import {CensoredThemeConfig} from 'types'
import { createMarkdownRenderer } from 'vitepress';
import type { LoaderModule, MarkdownRenderer, SiteConfig } from 'vitepress';
import { isObject } from '@vueuse/core';
import { normalizePath } from 'vite';
import matter from 'gray-matter';

import fs from 'fs';
import path from 'path';
import { sortBy, withBase } from '../utils/shared';
import { isString } from "is-what";
import {slash} from "../utils/node";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: SiteConfig<CensoredThemeConfig> = (globalThis as any).VITEPRESS_CONFIG;
const theme = config.site.themeConfig;

declare const data: CensoredTheme.PostData[];

let md: MarkdownRenderer;
const cache = /* @__PURE__ */ new Map();

export { data };

export default <LoaderModule>{
	watch: [`${theme.postDir ?? 'posts'}/**/*.md`].map(p => normalizePath(path.join(config.root, p))),
	async load(files) {
		md = md || (await createMarkdownRenderer(config.srcDir, config.markdown, config.site.base, config.logger));
		const raw = [];
		for (const file of files) {
			if (!file.endsWith('.md')) {
				continue;
			}

			const { mtimeMs: timestamp, birthtimeMs } = fs.statSync(file);
			const cached = cache.get(file);

			if (cached && timestamp === cached.timestamp) {
				raw.push(cached.data);
				continue;
			}

			const fileContent = fs.readFileSync(file, 'utf-8');
			const { data: meta, excerpt } = matter(fileContent, {
				excerpt: text => {
					const reg = /<!--\s*more\s*-->/gs;
					const rpt = reg.exec(text);
					return rpt ? text.substring(0, rpt.index) : '';
				},
			});

			// // 处理创建时间 md => git => file
			// const timeZone = theme?.timeZone ?? 8;
			// if (!meta.date) {
			// 	meta.date = getFileBirthTime(file);
			// 	if (!meta.date) {
			// 		meta.date = birthtimeMs;
			// 	}
			// } else {
			// 	meta.date = new Date(`${new Date(meta.date).toUTCString()}+${timeZone}`).getTime();
			// }
			//
			// if (!meta.lastUpdated) {
			// 	meta.lastUpdated = getFileLastUpdateTime(file);
			// 	if (!meta.lastUpdateTime) {
			// 		meta.lastUpdated = timestamp;
			// 	}
			// } else {
			// 	meta.lastUpdated = new Date(`${new Date(meta.lastUpdateTime).toUTCString()}+${timeZone}`).getTime();
			// }

			// 封面
			const cover = theme.cover;
			if (isString(meta.cover) || Array.isArray(meta.cover)) {
				meta.cover = {
					type: cover?.type,
					default: meta.cover,
				};
			} else {
				meta.cover = {
					type: cover?.type,
					default: cover?.default,
					...(isObject(meta.cover) ? meta.cover : {}),
				};
			}

			// 标题
			if (!meta.title) {
				const title = /^#\s(.+)/gm.exec(fileContent);
				if (title) {
					meta.title = title[1].trim();
				} else {
					meta.title = path.basename(file).replace(new RegExp(`${path.extname(file)}$`), '');
				}
			}

			meta.tags = typeof meta.tags === 'string' ? [meta.tags] : meta.tags || [];
			meta.categories = typeof meta.categories === 'string' ? [meta.categories.trim()] : meta.categories || [];

			const url =
				'/' +
				normalizePath(path.relative(config.srcDir, file))
					.replace(/(^|\/)index\.md$/, '$1')
					.replace(/\.md$/, config.cleanUrls ? '' : '.html');

			const renderedExcerpt = excerpt ? md.render(excerpt) : void 0;
			const data = {
				excerpt: renderedExcerpt,
				...meta,
				url: withBase(config.site.base, url),
				filePath: slash(path.relative(config.srcDir, file)),
			};
			cache.set(file, { data, timestamp });
			raw.push(data);
		}
		return sortBy(raw, `-sticky  ${theme.indexGenerator?.orderBy || '-date'}`) as CensoredTheme.PostData[];
	},
};
