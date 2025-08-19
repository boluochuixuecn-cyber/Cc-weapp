# Toast 轻提示

## 介绍
轻量级反馈，支持文本与加载中。

## 引入
```json
"usingComponents": { "cc-toast": "/components/cc-ui/toast/toast" }
```

## 代码演示
```wxml
<cc-toast id="ccToast" />
```
```js
const toast = this.selectComponent('#ccToast');
toast.showToast({ message: '操作成功', duration: 1500 });
```

## API
- `show` `type` `message` `duration` `zIndex` `position` `forbidClick`

## Events
- `bind:open` `bind:close`

## 外部样式类
- `custom-class` 