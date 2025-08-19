import DefaultTheme from 'vitepress/theme'
import PreviewPanel from './PreviewPanel.vue'
import { h } from 'vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-bottom': () => h(PreviewPanel)
    })
  }
} 