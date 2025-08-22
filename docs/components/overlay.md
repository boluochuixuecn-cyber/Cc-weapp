---
preview: overlay
---

# Overlay 遮罩层

## 介绍

浮层遮罩，用于信息聚焦与阻断背景交互。

## 引入

```json
"usingComponents": { "overlay": "/components/cc-ui/overlay/overlay" }
```

## 代码演示

```wxml
<overlay show="{{show}}" bind:close="onClose" />
```

## API

- `show` `closeOnClick` `zIndex`

## Events

- `bind:close`

## 外部样式类

- `custom-class`
