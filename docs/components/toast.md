---
preview: toast
---

# Toast 轻提示

## 介绍

轻量级的提示反馈组件。

## 引入

```json
"usingComponents": { "cc-toast": "/components/cc-ui/toast/toast" }
```

## 代码演示

```wxml
<cc-toast id="toast" />
```

```js
const toast = this.selectComponent('#toast');
toast.showToast({ message: '操作成功' });
```

## API

- `show` `type` `message` `duration` `zIndex` `position` `forbidClick`

## Events

- `bind:open` `bind:close`

## 外部样式类

- `custom-class`
