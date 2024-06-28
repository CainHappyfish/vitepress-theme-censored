// 是否启用了 Algolia 搜索
declare const __ALGOLIA__: boolean
// 检查是否启用了本地搜索
declare const __VP_LOCAL_SEARCH__: boolean
// 键为字符串类型、值为任意类型的对象
declare type AnyObject = Record<string, any>

// 基本组件
declare namespace CensoredTheme {
    // 排序参数的类型，可以是字符串或一个键为字符串/数字、值为1或-1的对象
    type OrderByArg = string | Record<string | number, 1 | -1>;

    /** 文章基础信息 */
	interface PostData {
		/**
		 * 文件地址
		 */
		filePath: string;
		/**
		 * url
		 */
		url: string;
		/**
		 * 摘要
		 */
		excerpt: string;
		/**
		 * 标题
		 */
		title: string;
		/**
		 * 文章日期
		 */
		date: number;
		/**
		 * 最后修改日期
		 */
		lastUpdated: number;
		/**
		 *
		 */
		layout?: string;
		/**
		 * 作者
		 */
		author?: string;
		/**
		 * 排序值
		 */
		sticky?: number;
		/**
		 * 分类
		 */
		categories?: string[];
		/**
		 * 标签
		 */
		tags?: string[];
		/**
		 * 封面
		 */
		cover?: {
			default: string;
			// default: string | string[];
			type: 'img' | 'date' | 'random';
		};
	}

	/** 导航栏链接 */
	interface NavItemWithLink {
		/**
		 * 标题
		 */
		title: string;
		/**
		 * 链接
		 */
		url: string;
		/**
		 * 激活匹配规则
		 * `activeMatch` is expected to be a regex string. We can't use actual
		 * RegExp object here because it isn't serializable
		 */
		activeMatch?: string;
		/**
		 * 打开方式
		 */
		target?: string;
		/**
		 * HTML rel
		 */
		rel?: string;
		children?: never;
	}

	interface NavItemWithChildren {
		/**
		 * 标题
		 */
		title: string;
		/**
		 * 链接
		 */
		url?: string;
		/**
		 * 激活匹配规则
		 * `activeMatch` is expected to be a regex string. We can't use actual
		 * RegExp object here because it isn't serializable
		 */
		activeMatch?: string;
		/**
		 * 打开方式
		 */
		target?: string;
		/**
		 * HTML rel
		 */
		rel?: string;
		/**
		 * 子级
		 */
		children: NavItemWithLink[];
	}

	// 索引页
	interface Index {
		// 封面
		DarkThemeCoverURL: string;
		LightThemeCoverURL: string;
		// 博客名称
		BlogTitle: string;
		// 签名
		Signature: string;
	}

	/** 友情链接 */
	interface Links {
		/**
		 * 昵称
		 */
		name: string;
		/**
		 * 链接
		 */
		url: string;
		/**
		 * 头像
		 */
		image: string;
		/**
		 * 描述
		 */
		desc?: string;
	}

	/** 文章目录 */
	interface MenuItem {
		title: string;
		link: string;
		level: number;
		children?: MenuItem[];
	}

	/** 语言文件 */
	interface Language {
		site: {
			title: string;
			webmaster: string;
			domain: string;
			avatar: string;
			describe: string;
			ruleText: string;
			contactMe: string;
		};

		// 页面模块小标题
		title: {
			links: string;
			newPublish: string;
			comment: string;
			author: string;
			blog: string;
			privacy: string;
			more: string;
			allArchives: string;
			yearArchives: string;
			otherArticles: string;
			unclassified: string;
		};

		// 菜单
		menu: {
			home: string;
			categories: string;
			archives: string;
			tags: string;
			links: string;
			about: string;
		};

		favicon: {
			showText: string;
			hideText: string;
		};

		// 文章内容
		post: {
			sticky: string;
			rewardComment: string;
			noticeOutdateMessage: string;
			copyright: {
				author: string;
				link: string;
				licenseTitle: string;
				licenseContent: string;
			};
		};

		// 按钮块
		rightside: {
			search: string;
			backToTop: string;
			toc: string;
			theme: {
				dark: string;
				light: string;
			};
			aside: {
				open: string;
				exit: string;
			};
			readMode: {
				open: string;
				exit: string;
			};
		};

		// 页脚
		footer: {
			powered: string;
			theme: string;
			tips: string;
			day: string;
			hour: string;
			minute: string;
			seconds: string;
		};

		// 符号
		symbol: {
			comma: string;
			period: string;
			colon: string;
		};
	}
}

declare namespace CensoredTheme {
	/**
	 * 网站图标配置 || Configure the icon information of the blog
	 */
	interface FaviconConfig {
		/**
		 * logo
		 */
		logo?: string;
		/**
		 *  dark 下使用
		 */
		darkLogo?: string;
		/**
		 * 网站图标
		 */
		icon16?: string;
		/**
		 * 网站图标
		 */
		icon32?: string;
		/**
		 * iOS 添加到主屏幕使用图标
		 */
		appleTouchIcon?: string;
		/**
		 * 网站清单配置
		 */
		webmanifest?: string;
		/**
		 * 是否监听选项卡可见事件
		 */
		visibilitychange?: boolean;
		/**
		 * 选项卡不可见时显示角标
		 */
		hidden?: string;
		/**
		 * 选项卡不可见 显示文案
		 */
		showText?: string;
		/**
		 * 选项卡由不可见切换为可见时显示文案
		 */
		hideText?: string;
	}

	/**
	 * 用户配置 || User config
	 */
	interface UserConfig {
		/**
		 * 站点昵称
		 */
		name?: string;
		/** 名 */
		firstName?: string;
		/** 姓 */
		lastName?: string;
		/**
		 * 邮箱
		 */
		email?: string;
		/**
		 * 域名
		 */
		domain?: string;
		/**
		 * 头像
		 */
		avatar?: string;
		/**
		 * dark 下使用
		 */
		darkAvatar?: string;
		/**
		 * 站点简介
		 */
		describe?: string;
		/**
		 * 友情链接规则
		 */
		ruleText?: string;
		/**
		 * 随笔
		 */
		essay?: string;
	}

	/**
	 * 顶部导航栏 || Layout top bars
	 */
	type TobBarsConfig = Array<CensoredTheme.NavItemWithLink | CensoredTheme.NavItemWithChildren>;

	/**
	 * 侧栏配置 || Layout sidebar config
	 */
	interface SidebarConfig {
		/**
		 * 打字动画固定前缀
		 */
		typedTextPrefix?: string;
		/**
		 * 打字动画切换文案
		 */
		typedText?: string[];
		/**
		 * 个人信息
		 */
		info?: {
			key: string;
			val: string;
		}[];
		/**
		 * 社交地址图标链接
		 */
		social?: {
			/**
			 * 名称
			 */
			name: string;
			/**
			 * svg  eg: icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>`
			 */
			icon: string;
			/**
			 * 链接
			 */
			url: string;
		}[];
	}

	/**
	 * 页脚配置 || Layout footer config
	 */
	interface FooterConfig {
		/**
		 * 是否显示 vitepress 和 主题
		 * theme link (Powered by vitepress).
		 */
		powered?: {
			enable: boolean;
		};
		/**
		 * 备案信息
		 * Beian icp information for Chinese users. In China, every legal website should have a beian icp in website footer.
		 * https://beian.miit.gov.cn/
		 */
		beian?: {
			enable: boolean;
			icp?: string;
		};
		/**
		 * 版权开始年号
		 */
		copyrightYear?: string;
		/**
		 * 运行时长
		 */
		liveTime?: {
			enable?: boolean;
			/**
			 * 前缀
			 */
			prefix?: string;
			/**
			 * 运行计算开始时间
			 */
			startTime?: string;
		};
	}

	/**
	 * 关于页 || About page config
	 */
	interface AboutPageConfig {
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 个人简单描述
		 */
		introduction?: string;
		/**
		 * 博客信息
		 */
		blog?: string;
		/**
		 * 隐私权说明
		 */
		privacy?: string;
	}

	/**
	 * 友情链接列表 || Links config
	 */
	type LinksConfig = Links[];

	/**
	 * 文章封面图 || Post cover image
	 */
	interface CoverConfig {
		default: string;
		type: 'img' | 'date' | 'random';
	}

	/**
	 * 页面分页配置 || [index | archives | categories | tags] page sort paging config
	 */
	interface PaginationConfig {
		/**
		 * 分页大小
		 */
		perPage?: number;
		/**
		 * 排序方式
		 */
		orderBy?: string;
		/**
		 * 归档时日期格式
		 */
		dateFmt?: string;
	}

	/**
	 * 内置页面跳转地址 || built in page path config
	 */
	interface BuiltPageConfig {
		/**
		 * 归档页地址 || archive page url
		 */
		archives?: string;
		/**
		 * 分类页地址 || category page url
		 */
		categories?: string;
		/**
		 * 标签页地址 || tag page url
		 */
		tags?: string;
	}

	/**
	 * 固定按钮显示配置 || Fixed button config on the right
	 */
	interface FixedBtnConfig {
		/**
		 * 阅读模式按钮
		 */
		readmode?: boolean;
		/**
		 * 单双栏切换按钮
		 */
		aside?: boolean;
	}

	/**
	 * 文章上下页 || the upper and lower pages of the article
	 */
	interface PostPaginationConfig {
		/**
		 * 文章底部是否显示上下篇
		 */
		enable?: boolean;
		/**
		 * 上下篇卡片样式
		 */
		type?: 'large' | 'small';
	}

	/**
	 * 打赏配置 || Reward config
	 */
	interface RewardConfig {
		/**
		 * 是否显示打赏按钮
		 */
		enable?: boolean;
		/**
		 * 打赏按钮下的描述
		 */
		comment?: string;
		/**
		 * 打赏链接（当开启打赏链接时，将自动跳转您的外部链接而不是展开二维码）
		 */
		url?: string;
		/**
		 * 打赏二维码
		 */
		methods?: {
			/**
			 * 二维码地址
			 */
			path: string;
			/**
			 * 二维码描述
			 */
			name: string;
			/**
			 * 点击二维码跳转链接
			 */
			link?: string;
		}[];
	}

	/**
	 * 文章版权信息 || Creative commons config
	 */
	interface CreativeCommonsConfig {
		/**
		 * 设置证书 (by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero)
		 */
		license?: string;
		/**
		 * 设置语言 (deed.zh | deed.en | deed.ja ｜ ...)
		 */
		language?: string;
		/**
		 * 在每篇文章末尾显示
		 */
		post?: boolean;
		/**
		 * 是否在复制文章时，在剪贴板中追加版权信息（默认关闭）
		 */
		clipboard?: boolean;
	}

	/**
	 * 过期提取 || notice outdate
	 */
	interface NoticeOutdateConfig {
		/**
		 * 是否启用
		 */
		enable?: boolean;
		/**
		 * 样式
		 */
		style?: 'simple' | 'flat';
		/**
		 * 距离今天多少天时显示
		 */
		limitDay?: number;
		/**
		 * 现实在文章中位置
		 */
		position?: 'top' | 'bottom';
	}

	/**
	 * RSS 生成
	 */
	interface RSSConfig {
		/**
		 * 是否启用
		 */
		enable?: boolean;
		/**
		 * 你的站点地址 eg: https://www.imalun.com
		 */
		baseUrl: string;
		/**
		 * 限制输出文件包含的文章数量
		 * @description (0 不限制；> 1 会按照日期排序对输出内容进行调整)
		 */
		limit?: number;
		/**
		 * 生成文件名
		 */
		fileName?: string;
		/**
		 * Feed 配置项
		 */
		feedOptions?: import('feed').FeedOptions;
	}
}

declare module 'vitepress-theme-censored/config' {
	// 从 'vitepress-theme-censored' 模块导入 CensoredThemeConfig 类型
	import { CensoredThemeConfig } from 'vitepress-theme-censored';
	// 从 'vitepress' 模块导入 UserConfig 类型
	import { UserConfig } from 'vitepress';

	// 导出 defineConfig 函数，该函数接受一个配置对象并返回相同类型的配置对象
	export const defineConfig: (config: UserConfig<CensoredThemeConfig>) => UserConfig<CensoredThemeConfig>;
	// 导出 defaultConfig 常量，类型为 CensoredThemeConfig
	export const defaultConfig: CensoredThemeConfig;
}

declare module '@localSearchIndex' {
	// 导出 data 常量，类型为一个对象，其中键为字符串，值为返回 Promise<{ default: string }> 的函数
	const data: Record<string, () => Promise<{ default: string }>>;
	export default data;
}

// 声明 DeepKeys 类型，用于获取对象的所有深层键
declare type DeepKeys<T> = T extends object
	? {
			[K in keyof T]-?: K extends string ? (T[K] extends object ? `${K}.${DeepKeys<T[K]>}` : `${K}`) : never;
	  }[keyof T]
	: never;

// 声明 DiffDateSuffix 类型，表示日期时间差的后缀
declare type DiffDateSuffix = {
	month: string;
	day: string;
	hour: string;
	min: string;
	just: string;
};