# CC UI - 微信小程序组件库

CC UI 是一个轻量的微信小程序组件库，灵感来源于 Vant Weapp，提供常用的按钮、图标、弹出层、遮罩、对话框、吐司提示等组件，开箱即用。

## 本地运行

1. 安装并打开「微信开发者工具」。
2. 选择“打开项目”，目录选择：`/Users/wantao/Desktop/Cc`。
3. AppID 可使用 `touristappid` 进行快速预览（部分能力可能受限），或填写你自己的 AppID。
4. 确认项目根目录为 `miniprogram`（`project.config.json` 已配置）。
5. 在模拟器打开 `pages/index/index`，即可查看所有组件的演示与交互。

## 网页版示例

项目提供一个简易的网页静态示例（不依赖小程序运行时，仅用于快速浏览文档与示例片段）。

- 位置：`/web/index.html`
- 打开方式：直接用浏览器打开该文件即可（或在项目根目录运行一个静态服务器）。
  - 使用 Python: `python3 -m http.server 8080`，然后访问 `http://localhost:8080/web/`
  - 或任何你熟悉的静态服务器工具

> 说明：网页示例仅用于文档化展示与交互示意，实际小程序组件能力（如自定义组件、wxml、wxss）需在微信开发者工具内预览运行。

## 目录结构

- `miniprogram/components/cc-ui/` - 组件源码（button、icon、overlay、popup、toast、dialog ...）
- `miniprogram/pages/index` - 组件演示页
- `web/` - 网页版静态示例与文档页
- `project.config.json` - 微信开发者工具项目配置

---

## Popup 弹出层

**介绍**

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

**引入**

在 `app.json` 或页面 `index.json` 中引入组件。

```json
"usingComponents": {
  "cc-popup": "/components/cc-ui/popup/popup"
}
```

**代码演示**

- 基础用法：通过 `show` 属性控制弹出层是否展示。

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

- 弹出位置：通过 `position` 属性设置弹出位置，默认居中，可设为 `top`、`bottom`、`left`、`right`。

```wxml
<cc-popup show="{{ show }}" position="top" custom-style="height: 20%;" bind:close="onClose" />
```

- 关闭图标：设置 `closeable` 后会显示关闭图标，可通过 `closeIcon` 自定义图标，使用 `closeIconPosition` 自定义位置。

```wxml
<cc-popup show="{{ show }}" closeable position="bottom" custom-style="height: 20%" bind:close="onClose" />

<!-- 自定义图标与位置 -->
<cc-popup
  show="{{ show }}"
  closeable
  closeIcon="close"
  closeIconPosition="top-left"
  position="bottom"
  custom-style="height: 20%"
  bind:close="onClose"
/>
```

- 圆角弹窗：设置 `round` 后，弹窗会根据不同位置添加圆角样式。

```wxml
<cc-popup show="{{ show }}" round position="bottom" custom-style="height: 20%" bind:close="onClose" />
```

- 禁止滚动穿透：可使用 `lockScroll`（基础拦截）与官方推荐的 `page-meta` 方案共同处理。

```wxml
<!-- page-meta 需为页面首个节点 -->
<page-meta page-style="{{ show ? 'overflow: hidden;' : '' }}" />
<cc-popup show="{{ show }}" catch:touchstart />
```

**API**

Props

| 参数                | 说明                                                              | 类型    | 默认值    |
| ------------------- | ----------------------------------------------------------------- | ------- | --------- |
| show                | 是否显示弹出层                                                    | boolean | false     |
| zIndex              | 层级                                                              | number  | 1000      |
| overlay             | 是否显示遮罩层                                                    | boolean | true      |
| position            | 弹出位置，可选 `top` `bottom` `left` `right`                      | string  | center    |
| duration            | 动画时长（ms）                                                    | number  | 300       |
| round               | 是否显示圆角                                                      | boolean | false     |
| custom-style        | 自定义弹出层样式                                                  | string  | ''        |
| overlayStyle        | 自定义遮罩层样式                                                  | string  | ''        |
| closeOnClickOverlay | 点击遮罩是否关闭                                                  | boolean | true      |
| closeable           | 是否显示关闭图标                                                  | boolean | false     |
| closeIcon           | 关闭图标                                                          | string  | close     |
| closeIconPosition   | 关闭图标位置：`top-left` `top-right` `bottom-left` `bottom-right` | string  | top-right |
| safeAreaInsetBottom | iPhone X 底部安全区                                               | boolean | true      |
| safeAreaInsetTop    | 顶部安全区（状态栏高度）                                          | boolean | false     |
| safeAreaTabBar      | 预留 tabbar 安全区                                                | boolean | false     |
| lockScroll          | 是否锁定背景滚动（基础）                                          | boolean | true      |
| rootPortal          | 是否从页面中脱离（占位，受基础库限制）                            | boolean | false     |

Events

| 事件名             | 说明             | 参数 |
| ------------------ | ---------------- | ---- |
| bind:close         | 关闭弹出层时触发 | -    |
| bind:click-overlay | 点击遮罩层时触发 | -    |
| bind:before-enter  | 进入前触发       | -    |
| bind:after-enter   | 进入后触发       | -    |
| bind:after-leave   | 离开后触发       | -    |

外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| custom-class | 根节点样式类 |

---

## Button 按钮

**介绍**：操作触发器，支持多尺寸、朴素、块级、圆角、发起表单等。

- 引入：

```json
"usingComponents": { "cc-button": "/components/cc-ui/button/button" }
```

- 基础：

```wxml
<cc-button type="primary">主要按钮</cc-button>
<cc-button type="primary" loading loadingText="提交中" />
```

- 主要 Props：`type` `size` `plain` `block` `round` `hairline` `disabled` `loading` `loadingText` `openType` `formType` `color` `customStyle`
- 事件：`bind:tap`
- 外部样式：`custom-class`

---

## Icon 图标

**介绍**：内置基础形状图标（可扩展 iconfont）。

- 引入：

```json
"usingComponents": { "cc-icon": "/components/cc-ui/icon/icon" }
```

- 基础：

```wxml
<cc-icon name="success" size="40" />
```

- Props：`name` `size` `color` `customStyle`
- 外部样式：`custom-class`

---

## Overlay 遮罩层

**介绍**：浮层遮罩，用于信息聚焦与阻断背景交互。

- 引入：

```json
"usingComponents": { "overlay": "/components/cc-ui/overlay/overlay" }
```

- 基础：

```wxml
<overlay show="{{show}}" bind:close="onClose" />
```

- Props：`show` `closeOnClick` `zIndex`
- 事件：`bind:close`（点击遮罩）
- 外部样式：`custom-class`

---

## Toast 轻提示

**介绍**：轻量级反馈，支持文本与加载中。

- 引入：

```json
"usingComponents": { "cc-toast": "/components/cc-ui/toast/toast" }
```

- 基础：

```wxml
<cc-toast id="ccToast" />
```

```js
const toast = this.selectComponent('#ccToast');
toast.showToast({ message: '操作成功', duration: 1500 });
```

- Props：`show` `type` `message` `duration` `zIndex` `position` `forbidClick`
- 方法：`showToast(options)` `hide()`
- 事件：`bind:open` `bind:close`
- 外部样式：`custom-class`

---

## Dialog 对话框

**介绍**：模态确认框，支持同步与异步关闭。

- 引入：

```json
"usingComponents": { "cc-dialog": "/components/cc-ui/dialog/dialog" }
```

- 基础：

```wxml
<cc-dialog id="ccDialog" bind:confirm="onConfirm" bind:cancel="onCancel" />
```

```js
const dialog = this.selectComponent('#ccDialog');
dialog.open({ title: '提示', message: '确认执行该操作？', showCancelButton: true });
```

- Props：`show` `title` `message` `showCancelButton` `cancelText` `confirmText` `closeOnClickOverlay` `asyncClose`
- 方法：`open(options)` `close()`
- 事件：`bind:open` `bind:close` `bind:confirm` `bind:cancel`
- 外部样式：`custom-class`

---

## 贡献

欢迎提交 Issue 与 PR，完善文档、示例与更多组件能力。
