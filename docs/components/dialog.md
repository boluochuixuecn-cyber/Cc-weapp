---
preview: dialog
---

# Dialog 对话框

## 介绍

模态确认框，支持同步与异步关闭。

## 引入

```json
"usingComponents": { "cc-dialog": "/components/cc-ui/dialog/dialog" }
```

## 代码演示

```wxml
<cc-dialog id="dialog" bind:confirm="onConfirm" bind:cancel="onCancel" />
```

```js
const dialog = this.selectComponent('#dialog');
dialog.open({ title: '提示', message: '确认执行该操作？' });
```

## API

- `show` `title` `message` `showCancelButton` `cancelText` `confirmText`
