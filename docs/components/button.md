---
preview: button
---
# Button 按钮

## 介绍
操作触发器，支持多尺寸、朴素、块级、圆角、发起表单等。

## 引入
```json
"usingComponents": { "cc-button": "/components/cc-ui/button/button" }
```

## 代码演示
```wxml
<cc-button type="primary">主要按钮</cc-button>
<cc-button type="primary" loading loadingText="提交中" />
```

## API
- `type` `size` `plain` `block` `round` `hairline` `disabled` `loading` `loadingText` `openType` `formType` `color` `customStyle`

## Events
- `bind:tap`

## 外部样式类
- `custom-class` 