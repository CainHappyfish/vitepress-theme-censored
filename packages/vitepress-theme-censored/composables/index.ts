import { CensoredThemeConfig } from '../types'
import { computed} from "vue"
import { useData, withBase } from 'vitepress'
// import { useMediaQuery } from '@vueuse/core'
import { data as allPosts } from './post.data'
import { groupBy, sortBy } from '../utils/shared'
import { formatDate } from '../utils/client'


// 获取主题配置
export const useTheme = () => {
	const { theme } = useData<CensoredThemeConfig>();
	return theme;
};

// 获取页面 url 配置
export const usePageUrl = () => {
	const { theme } = useData<CensoredThemeConfig>();
	const { archives, categories, tags } = theme.value.page ?? {};
	return {
		archives: withBase(archives ?? ''),
		categories: withBase(categories ?? ''),
		tags: withBase(tags ?? ''),
	};
};

// 获取所有文章
export const useAllPosts = (sort?: CensoredTheme.OrderByArg, filter?: (v: CensoredTheme.PostData, i: number, l: CensoredTheme.PostData[]) => boolean) => {
	let list = allPosts;
	if (filter) {
		list = list.filter(filter);
	}
	return sort ? sortBy([...list], sort) : [...list];
};

// 获取当前页面
export const usePrevNext = () => {
	const { page } = useData();
	const posts = useAllPosts();
	return computed(() => {
		const index = posts.findIndex(post => post.filePath === page.value.filePath);
		return {
			prev: posts[index - 1],
			post: posts[index],
			next: posts[index + 1],
		};
	});
};

// 判断当前页是否是文章页
export const useIsPost = () => {
	const { page } = useData();
	const posts = useAllPosts();
	return computed(() => {
		const index = posts.findIndex(post => post.filePath === page.value.filePath);
		return index > -1;
	});
};

// 获取所有标签
export const useTags = () => sortBy(groupBy(allPosts, 'tags'), { 1: -1 });

// 获取所有分类
export const useCategories = () => sortBy(groupBy(allPosts, 'categories'), { 1: -1 });

// 获取归档
export const useArchives = () => {
	const theme = useTheme();
	return sortBy(
		groupBy(allPosts, 'date', date => formatDate(date, theme.value.archiveGenerator?.dateFmt || 'YYYY')),
		{ 0: -1 },
	);
};
