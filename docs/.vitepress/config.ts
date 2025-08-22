import { webcrypto as _webcrypto } from 'node:crypto';

// Ensure global webcrypto exists for Vite/VitePress when running on Node 18
// @ts-ignore
if (
  !(globalThis as any).crypto ||
  typeof (globalThis as any).crypto.getRandomValues !== 'function'
) {
  // @ts-ignore
  (globalThis as any).crypto = _webcrypto as any;
}

import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: 'CC UI',
  description: '微信小程序组件库文档',
  themeConfig: {
    nav: [
      { text: '指南', link: '/' },
      { text: '组件', link: '/components/popup' },
    ],
    sidebar: [
      {
        text: '组件',
        items: [
          { text: 'Popup 弹出层', link: '/components/popup' },
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Toast 轻提示', link: '/components/toast' },
          { text: 'Dialog 对话框', link: '/components/dialog' },
          { text: 'Overlay 遮罩层', link: '/components/overlay' },
          { text: 'Icon 图标', link: '/components/icon' },
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'Cell 单元格', link: '/components/cell' },
        ],
      },
    ],
    outline: [2, 3],
    socialLinks: [],
  },
});
