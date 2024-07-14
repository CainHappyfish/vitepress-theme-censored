import type { Theme } from 'vitepress';
import { Component } from 'vue';
import { createPinia } from 'pinia'

import LayoutPage from './layouts/Layout.vue';
import NotFoundPage from './layouts/NotFound.vue';
import './styles/index.css'

import MarkdownIt from 'markdown-it'
import Shiki from '@shikijs/markdown-it'


export default {
  Layout: LayoutPage,
  NotFound: NotFoundPage,
  enhanceApp({ app, router, siteData }) {
    // ...
    const pinia = createPinia()
    app.use(pinia)
  }
}