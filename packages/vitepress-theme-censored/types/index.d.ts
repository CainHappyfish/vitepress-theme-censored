import { DefaultTheme } from 'vitepress';
export declare interface CensoredThemeConfig {
	// 网站地址
	url?: string;
/** 页面切换动画 | page transition animations */
	pageLoading?: boolean;

	/** 主题切换动画 | theme transition animations */
	themeLoading?: boolean;

	/** 自定义文章样式 */
	customMdStyle?: boolean;

	/** 将主题组件注册到全局 | register the global component */
	globalComponents?: boolean | Array<string>;

	/** 作者 | author */
	author?: string;

	/** 搜索 | search */
	search?: { provider: 'local'; options?: DefaultTheme.LocalSearchOptions };

	/** 时区 | timeZone*/
	timeZone?: number;

	/** 文章目录 | post folder */
	postDir?: string;

	/** 内置页地址配置 | built in page path config */
	page?: CensoredTheme.BuiltPageCsconfig;

	/** 首页分页 | Index page generator */
	indexGenerator?: Omit<CensoredTheme.PaginationConfig, 'date_fmt'>;

	/** 归档页 | Archive generator */
	archiveGenerator?: CensoredTheme.PaginationConfig;

	/** 上下页 | Post pagination */
	postPagination?: CensoredTheme.PostPaginationConfig;

	/** 导航栏 | Layout top bars */
	navBars?: CensoredTheme.TobBarsConfig;

	/** 用户信息 | User info */
	user?: CensoredTheme.UserConfig;

	/** 站点图标 | Configure the icon information of the site */
	favicon?: CensoredTheme.FaviconConfig;

	/** 横幅 | Banner config */
	banner?: CensoredTheme.BannerConfig;

	/** 侧栏 | Sidebar config */
	sidebar?: CensoredTheme.SidebarConfig;

	/** 页脚 | Footer config */
	footer?: CensoredTheme.FooterConfig;

	/** 自定义封面 | Customize the cover image */
	cover?: CensoredTheme.ConverConfig;

	// 主题封面 | Theme Cover
	index?: CensoredTheme.Index;

	/** 固定按钮 | Fixed button */
	rightside?: CensoredTheme.FixedBtnConfig;

	/** 关于页 | About page Config */
	about?: CensoredTheme.AboutPageConfig;

	/** 友情链接 | Links */
	links?: CensoredTheme.LinksConfig;

	/** 打赏 | Reward */
	reward?: CensoredTheme.RewardConfig;

	/** 目录 | outline */
	outline?: DefaultTheme.Outline;
	outlineTitle?: string;

	/** 语言 | i18n */
	languages?: Record<string, CensoredTheme.Language>;
}

// mathjax配置
interface MarkdownItMathjaxOptions {
  /**
   * 输出格式
   *
   * @default 'svg'
   */

  output?: "chtml" | "svg";

  /**
   * 是否允许两端带空格的内联数学
   *
   * @description 不建议将此设置为 true，因为它很可能会破坏 $ 的默认使用
   *
   * @default false
   */
  allowInlineWithSpace?: boolean;

  /**
   * 是否将解析的数学语言 fence 块转换为显示模式数学
   *
   * @default false
   */
  mathFence?: boolean;

  /**
   * 是否启用无障碍
   *
   * @default true
   */
  a11y?: boolean;

  /**
   * TeX 输入选项
   */
  tex?: MathJaxTexInputOptions;

  /**
   * 通用 HTML 输出选项
   */
  chtml?: MathjaxCommonHTMLOutputOptions;

  /**
   * SVG 输出选项
   */
  svg?: MathjaxSVGOutputOptions;
}

import Theme, { defineTheme } from '../index';

import './theme.d.ts';
export default Theme;
export { defineTheme };