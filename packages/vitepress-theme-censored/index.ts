import type { Theme } from 'vitepress';
import { Component } from 'vue';

import LayoutPage from './layouts/Layout.vue';
import NotFoundPage from './layouts/NotFound.vue';
import './styles/index.css'


export default {
  Layout: LayoutPage,
  NotFound: NotFoundPage,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}