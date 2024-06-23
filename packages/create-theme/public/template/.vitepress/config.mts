import { defineConfig } from 'vitepress-theme-censored/config';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './',
  base: '/vitepress-theme-censored/',
  title: "BLOG THEME CENSORED",
  description: "A theme for Vitepress",
  themeConfig: {
    navBars: [
      {title: "Home", url: "/home"},
      {title: "About", url: "/about"},
      {title: "Categories", url: "/categories"},
      {title: "Friends", url: "/friends"},
      {title: "Archives", url: "/archives"},
      {title: "Tags", url: "/friends"}
    ],

    index: {
       ThemeCoverURL: "./public/ThemeCover1.jpg",
       BlogTitle: "破酥的个人博客",
       Signature: "我遗落的风景。",
    }


  }
})
