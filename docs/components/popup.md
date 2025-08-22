# Popup 弹出层

## 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

## 引入

在 `app.json` 或页面 `index.json` 中引入组件。

```json
"usingComponents": {
  "cc-popup": "/components/cc-ui/popup/popup"
}
```

## 代码演示

基础用法：通过 `show` 属性控制弹出层是否展示。

```wxml
<cc-button type="primary" bind:tap="showPopup">展示弹出层</cc-button>
<cc-popup show="{{ show }}" bind:close="onClose">内容</cc-popup>
```

```js
Page({
  data: { show: false },
  showPopup() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
});
```

弹出位置：通过 `position` 设置为 `top`、`bottom`、`left`、`right`。

```wxml
<cc-popup show="{{ show }}" position="top" custom-style="height: 20%;" bind:close="onClose" />
```

关闭图标：设置 `closeable`，并可自定义 `closeIcon` 与 `closeIconPosition`。

```wxml
<cc-popup show="{{ show }}" closeable position="bottom" custom-style="height: 20%" bind:close="onClose" />
<cc-popup show="{{ show }}" closeable closeIcon="close" closeIconPosition="top-left" position="bottom" custom-style="height: 20%" bind:close="onClose" />
```

圆角弹窗：设置 `round`。

```wxml
<cc-popup show="{{ show }}" round position="bottom" custom-style="height: 20%" bind:close="onClose" />
```

禁止滚动穿透（推荐配合 page-meta）：

```wxml
<!-- page-meta 必须为页面首个节点 -->
<page-meta page-style="{{ show ? 'overflow: hidden;' : '' }}" />
<cc-popup show="{{ show }}" catch:touchstart />
```

## API

| 参数                | 说明                                         | 类型    | 默认值    |
| ------------------- | -------------------------------------------- | ------- | --------- |
| show                | 是否显示弹出层                               | boolean | false     |
| zIndex              | 层级                                         | number  | 1000      |
| overlay             | 是否显示遮罩层                               | boolean | true      |
| position            | 弹出位置，可选 `top` `bottom` `left` `right` | string  | center    |
| duration            | 动画时长（ms）                               | number  | 300       |
| round               | 是否显示圆角                                 | boolean | false     |
| custom-style        | 自定义弹出层样式                             | string  | ''        |
| overlayStyle        | 自定义遮罩层样式                             | string  | ''        |
| closeOnClickOverlay | 点击遮罩是否关闭                             | boolean | true      |
| closeable           | 是否显示关闭图标                             | boolean | false     |
| closeIcon           | 关闭图标                                     | string  | close     |
| closeIconPosition   | 关闭图标位置                                 | string  | top-right |
| safeAreaInsetBottom | iPhone X 底部安全区                          | boolean | true      |
| safeAreaInsetTop    | 顶部安全区（状态栏高度）                     | boolean | false     |
| safeAreaTabBar      | 预留 tabbar 安全区                           | boolean | false     |
| lockScroll          | 是否锁定背景滚动（基础）                     | boolean | true      |
| rootPortal          | 是否从页面中脱离（占位）                     | boolean | false     |

## Events

| 事件名             | 说明             | 参数 |
| ------------------ | ---------------- | ---- |
| bind:close         | 关闭弹出层时触发 | -    |
| bind:click-overlay | 点击遮罩层时触发 | -    |
| bind:before-enter  | 进入前触发       | -    |
| bind:after-enter   | 进入后触发       | -    |
| bind:after-leave   | 离开后触发       | -    |

## 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| custom-class | 根节点样式类 |
