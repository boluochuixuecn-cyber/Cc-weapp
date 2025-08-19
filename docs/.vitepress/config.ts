import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'CC UI',
  description: '微信小程序组件库文档',
  themeConfig: {
    nav: [
      { text: '指南', link: '/' },
      { text: '组件', link: '/components/popup' }
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
          { text: 'Icon 图标', link: '/components/icon' }
        ]
      }
    ],
    outline: [2, 3],
    socialLinks: []
  }
}) 