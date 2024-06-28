import { defineConfig } from 'vitepress-theme-censored/config';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './',
  postDir: './posts',
  cleanUrls: true,
  base: '/vitepress-theme-censored/',
  title: "BLOG THEME CENSORED",
  description: "A theme for Vitepress",
  themeConfig: {
    navBars: [
      {title: "Home", url: "/"},
      {title: "About", url: "/about"},
      {title: "Categories", url: "/categories"},
      {title: "Friends", url: "/friends"},
      {title: "Archives", url: "/archives"},
      {title: "Tags", url: "/tags"}
    ],
    // 这里有个bug，这样写找不到img
    index: {
       LightThemeCoverURL: "./public/ThemeCover1.jpg",
       DarkThemeCoverURL: "./public/ThemeCover3.jpg",
       BlogTitle: "破酥的个人博客",
       Signature: "我遗落的风景。",
    },

    page: {
        home: '/' || '/home',
        about: '/about',
        archives: '/archives',
        tags: '/tags',
        categories: '/categories',
        friends: '/friends'
    },

    pageLoading: true,
    themeLoading: true,

    user: {
        name: "破酥",
        describe: "博客正在开发中orz\n前端初学者",
        essay: "我将泪水也藏在表面之下。"
    },

    footer: {
        copyrightYear: 2024
    },

    about: {
        introduction: "这个博客主题编写的目的是练习我的前端技术，如有问题可以在issues中提出，感激不尽orz"
    }

  },


})
