---
preview: cell
---

# Cell 单元格

列表项容器，展示标题、描述、右侧内容，支持图标与箭头，常用于列表导航。

## 引入

```json
{
  "usingComponents": {
    "cc-cell": "/components/cc-ui/cell/cell",
    "cc-icon": "/components/cc-ui/icon/icon"
  }
}
```

## 基础用法

```wxml
<cc-cell title="单元格" value="内容" />
<cc-cell title="带描述" label="辅助说明" value="内容" />
```

## 图标与箭头

```wxml
<cc-cell title="个人中心" is-link>
  <view slot="icon"><cc-icon name="user" size="18" /></view>
</cc-cell>
```

## Props

- **title**: string - 左侧标题
- **label**: string - 标题下方的描述
- **value**: string - 右侧内容（当无默认 slot 时显示）
- **isLink**: boolean - 是否展示右侧箭头
- **customStyle**: string - 行内样式
- **customClass**: string - 自定义类名

## Slots

- **icon**: 左侧图标区域
- 默认 slot: 右侧自定义内容

## Events

- **bind:tap**(e) - 点击时触发 