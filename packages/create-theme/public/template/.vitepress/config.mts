import { defineConfig } from 'vitepress-theme-censored/config';
import { PluginWithOptions } from 'markdown-it';
import mathjax3 from "markdown-it-mathjax3"


const wrapImagesPlugin: PluginWithOptions = (md, options) => {
  const defaultRender = md.renderer.rules.image || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const img = defaultRender(tokens, idx, options, env, self);

    return `<div class="img-container">${img}</div>`;
  };
};

const wrapListsPlugin: PluginWithOptions = (md, options) => {
  const defaultRenderOL = md.renderer.rules.ordered_list_open || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  const defaultRenderUL = md.renderer.rules.bullet_list_open || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.ordered_list_open = function (tokens, idx, options, env, self) {
    return '<div class="list-container">' + defaultRenderOL(tokens, idx, options, env, self);
  };

  md.renderer.rules.ordered_list_close = function (tokens, idx, options, env, self) {
    return defaultRenderOL(tokens, idx, options, env, self) + '</div>';
  };

  md.renderer.rules.bullet_list_open = function (tokens, idx, options, env, self) {
    return '<div class="list-container">' + defaultRenderUL(tokens, idx, options, env, self);
  };

  md.renderer.rules.bullet_list_close = function (tokens, idx, options, env, self) {
    return defaultRenderUL(tokens, idx, options, env, self) + '</div>';
  };
};

const wrapTablePlugin: PluginWithOptions = (md, options) => {
  const defaultRenderTableOpen = md.renderer.rules.table_open || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  const defaultRenderTableClose = md.renderer.rules.table_close || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
    return '<div class="table-container">' + defaultRenderTableOpen(tokens, idx, options, env, self);
  };

  md.renderer.rules.table_close = function (tokens, idx, options, env, self) {
    return defaultRenderTableClose(tokens, idx, options, env, self) + '</div>';
  };
};

function replaceClassPlugin(md) {
  const defaultRender = md.renderer.rules.fence || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    tokens[idx].attrJoin('class', 'censored-code');
    return defaultRender(tokens, idx, options, env, self);
  };

  const originalRender = md.renderer.render;
  md.renderer.render = function (tokens, options, env) {
    const html = originalRender.call(this, tokens, options, env);
    return html.replace(/vp-code/g, 'censored-code');
  };
}

const inlineCodePlugin: PluginWithOptions = (md, options) => {
  const defaultRender = md.renderer.rules.code_inline || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.code_inline = function (tokens, idx, options, env, self) {
    tokens[idx].attrJoin('class', 'inline-code');
    return defaultRender(tokens, idx, options, env, self);
  };
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './',
  postDir: './posts',
  cleanUrls: true,
  base: '/vitepress-theme-censored/',
  title: "BLOG THEME CENSORED",
  description: "A theme for Vitepress",
  markdown: {
    // https://shiki.tmrs.site/themes
    theme: 'nord',
    config: (md) => {
      // 使用自定义插件
      md.use(replaceClassPlugin);
      md.use(wrapImagesPlugin);
      md.use(wrapListsPlugin);
      md.use(wrapTablePlugin);
      md.use(inlineCodePlugin);
      md.use(mathjax3);
    }
  },
  themeConfig: {
      url: "https://cainhappyfish.github.io/vitepress-theme-censored/",
    navBars: [
      {title: "Home", url: "/"},
      {title: "About", url: "/about"},
      {title: "Friends", url: "/friends"},
      {title: "Archives", url: "/archives"},
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
        friends: '/friends',
        test: '/test',
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
    },

    banner: {
        bgurl: "https://pic.imgdb.cn/item/66810524d9c307b7e9cd8b8f.jpg",
        bannerText: "\"于迷途之中 我们彼此相伴\"",
    },

    links: [
        { name: "flandre495", image:"https://pic.imgdb.cn/item/668125d2d9c307b7e9f6425a.png" ,url: "https://www.cnblogs.com/maple276", desc: "伸臂引诱人" },
        { name: "今天睡够了吗", image:"https://pic.imgdb.cn/item/6681281bd9c307b7e9f8f3ed.jpg" ,url: "https://yhblogs.cn"},
        { name: "J.L.Picard", image:"https://pic.imgdb.cn/item/66812cafd9c307b7e9ff6a6e.png" ,url: "", desc:"Space, the final frontier"},
        { name: "youguan", image:"https://pic.imgdb.cn/item/66812d90d9c307b7e9008833.png" ,url: "", desc:"偶尔话起时的内心温暖就是我们一起活着的体现💗。"},
        { name: "tsuki", image:"https://pic.imgdb.cn/item/66812e64d9c307b7e9017860.png" ,url: "", desc:"等一个纪念"},
        { name: "Salazar", image:"https://pic.imgdb.cn/item/66812fb8d9c307b7e902fc20.png" ,url: "", desc:"the invisible one"},
        { name: "Fr0ggit", image:"https://pic.imgdb.cn/item/66812f02d9c307b7e9022e7b.png" ,url: "", desc:"什么都没留下"},
        { name: "OURO", image:"https://pic.imgdb.cn/item/66812f35d9c307b7e9026d66.png" ,url: "", desc:"Be your true mind"},
        { name: "容寒梓霜🌻", image:"https://pic.imgdb.cn/item/66812f5ad9c307b7e902968c.png" ,url: "", desc:"心是一切温柔的起点。"},
        { name: "Cakndex", image:"https://pic.imgdb.cn/item/668132fed9c307b7e90696f1.jpg" ,url: "https://cakndex.github.io/Cakndex.github.io-blog/", desc:"拨开云层的心房，关掉太阳关掉月亮吧"},
        { name: "Andonade", image:"https://s2.loli.net/2024/04/26/7LRHdZcFeG3WVi9.jpg" ,url: "https://andonade.github.io", desc:"Normal one. Normal days."},

    ]



  },


})
