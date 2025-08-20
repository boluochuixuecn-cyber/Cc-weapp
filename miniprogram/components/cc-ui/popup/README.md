# Popup 弹出层组件

一个功能完善的弹出层组件，支持多种弹出方向、自定义图标、圆角弹窗等功能。

## 基础用法

### 底部弹出
```xml
<cc-popup show="{{showBottom}}" position="bottom" bind:close="onClose">
  <view class="popup-content">
    <view class="popup-title">底部弹出</view>
    <view class="popup-text">这是一个底部弹出的弹窗内容</view>
  </view>
</cc-popup>
```

### 居中弹出
```xml
<cc-popup show="{{showCenter}}" position="center" round bind:close="onClose">
  <view class="popup-content">
    <view class="popup-title">居中弹出</view>
    <view class="popup-text">这是一个居中弹出的弹窗内容</view>
  </view>
</cc-popup>
```

### 顶部弹出
```xml
<cc-popup show="{{showTop}}" position="top" bind:close="onClose">
  <view class="popup-content">
    <view class="popup-title">顶部弹出</view>
    <view class="popup-text">这是一个顶部弹出的弹窗内容</view>
  </view>
</cc-popup>
```

### 左侧弹出
```xml
<cc-popup show="{{showLeft}}" position="left" bind:close="onClose">
  <view class="popup-content">
    <view class="popup-title">左侧弹出</view>
    <view class="popup-text">这是一个左侧弹出的弹窗内容</view>
  </view>
</cc-popup>
```

### 右侧弹出
```xml
<cc-popup show="{{showRight}}" position="right" bind:close="onClose">
  <view class="popup-content">
    <view class="popup-title">右侧弹出</view>
    <view class="popup-text">这是一个右侧弹出的弹窗内容</view>
  </view>
</cc-popup>
```

## 关闭按钮

### 显示关闭按钮
```xml
<cc-popup show="{{show}}" closeable bind:close="onClose">
  <view class="popup-content">弹窗内容</view>
</cc-popup>
```

### 自定义关闭图标
```xml
<cc-popup 
  show="{{show}}" 
  closeable 
  custom-close-icon="close-o"
  close-icon-size="40"
  close-icon-color="#ff4444"
  bind:close="onClose"
>
  <view class="popup-content">弹窗内容</view>
</cc-popup>
```

### 关闭按钮位置
```xml
<!-- 右上角 -->
<cc-popup show="{{show}}" closeable close-icon-position="top-right">
  <view class="popup-content">弹窗内容</view>
</cc-popup>

<!-- 左上角 -->
<cc-popup show="{{show}}" closeable close-icon-position="top-left">
  <view class="popup-content">弹窗内容</view>
</cc-popup>

<!-- 右下角 -->
<cc-popup show="{{show}}" closeable close-icon-position="bottom-right">
  <view class="popup-content">弹窗内容</view>
</cc-popup>

<!-- 左下角 -->
<cc-popup show="{{show}}" closeable close-icon-position="bottom-left">
  <view class="popup-content">弹窗内容</view>
</cc-popup>

<!-- 顶部居中 -->
<cc-popup show="{{show}}" closeable close-icon-position="center-top">
  <view class="popup-content">弹窗内容</view>
</cc-popup>

<!-- 底部居中 -->
<cc-popup show="{{show}}" closeable close-icon-position="center-bottom">
  <view class="popup-content">弹窗内容</view>
</cc-popup>

<!-- 左侧居中 -->
<cc-popup show="{{show}}" closeable close-icon-position="center-left">
  <view class="popup-content">弹窗内容</view>
</cc-popup>

<!-- 右侧居中 -->
<cc-popup show="{{show}}" closeable close-icon-position="center-right">
  <view class="popup-content">弹窗内容</view>
</cc-popup>
```

## 样式定制

### 圆角弹窗
```xml
<cc-popup show="{{show}}" round>
  <view class="popup-content">圆角弹窗内容</view>
</cc-popup>
```

### 自定义尺寸
```xml
<cc-popup 
  show="{{show}}" 
  position="center"
  width="600rpx"
  height="400rpx"
>
  <view class="popup-content">自定义尺寸弹窗</view>
</cc-popup>
```

### 自定义背景色和边框
```xml
<cc-popup 
  show="{{show}}" 
  position="center"
  background-color="#f5f5f5"
  border-color="#e0e0e0"
  border-width="2rpx"
>
  <view class="popup-content">自定义样式弹窗</view>
</cc-popup>
```

### 阴影和模糊效果
```xml
<cc-popup 
  show="{{show}}" 
  position="center"
  shadow
  blur
>
  <view class="popup-content">带阴影和模糊效果的弹窗</view>
</cc-popup>
```

## 事件处理

```xml
<cc-popup 
  show="{{show}}" 
  bind:close="onClose"
  bind:click-overlay="onClickOverlay"
  bind:before-enter="onBeforeEnter"
  bind:after-enter="onAfterEnter"
  bind:after-leave="onAfterLeave"
>
  <view class="popup-content">弹窗内容</view>
</cc-popup>
```

```javascript
Page({
  data: {
    show: false
  },
  
  onClose() {
    console.log('弹窗关闭');
    this.setData({ show: false });
  },
  
  onClickOverlay() {
    console.log('点击遮罩层');
  },
  
  onBeforeEnter() {
    console.log('弹窗进入前');
  },
  
  onAfterEnter() {
    console.log('弹窗进入后');
  },
  
  onAfterLeave() {
    console.log('弹窗离开后');
  }
});
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| show | 是否显示弹窗 | `boolean` | `false` |
| position | 弹出位置，可选值为 `top`、`bottom`、`left`、`right`、`center` | `string` | `center` |
| z-index | 弹窗层级 | `number` | `1000` |
| overlay | 是否显示遮罩层 | `boolean` | `true` |
| duration | 动画时长，单位毫秒 | `number` | `300` |
| round | 是否显示圆角 | `boolean` | `false` |
| overlay-style | 自定义遮罩层样式 | `string` | `''` |
| close-on-click-overlay | 点击遮罩层是否关闭弹窗 | `boolean` | `true` |
| closeable | 是否显示关闭按钮 | `boolean` | `false` |
| close-icon | 关闭图标名称 | `string` | `close` |
| close-icon-position | 关闭图标位置 | `string` | `top-right` |
| close-icon-size | 关闭图标大小 | `number` | `36` |
| close-icon-color | 关闭图标颜色 | `string` | `#969799` |
| custom-close-icon | 自定义关闭图标名称 | `string` | `''` |
| lock-scroll | 是否锁定背景滚动 | `boolean` | `true` |
| root-portal | 是否插入到根节点 | `boolean` | `false` |
| safe-area-inset-bottom | 是否开启底部安全区适配 | `boolean` | `true` |
| safe-area-inset-top | 是否开启顶部安全区适配 | `boolean` | `false` |
| safe-area-tabbar | 是否开启 tabbar 安全区适配 | `boolean` | `false` |
| width | 弹窗宽度 | `string` | `''` |
| height | 弹窗高度 | `string` | `''` |
| max-width | 弹窗最大宽度 | `string` | `''` |
| max-height | 弹窗最大高度 | `string` | `''` |
| min-width | 弹窗最小宽度 | `string` | `''` |
| min-height | 弹窗最小高度 | `string` | `''` |
| background-color | 弹窗背景色 | `string` | `#fff` |
| border-color | 弹窗边框色 | `string` | `''` |
| border-width | 弹窗边框宽度 | `string` | `''` |
| shadow | 是否显示阴影 | `boolean` | `false` |
| blur | 是否显示模糊效果 | `boolean` | `false` |

### close-icon-position 可选值

| 值 | 说明 |
|------|------|
| `top-right` | 右上角 |
| `top-left` | 左上角 |
| `bottom-right` | 右下角 |
| `bottom-left` | 左下角 |
| `center-top` | 顶部居中 |
| `center-bottom` | 底部居中 |
| `center-left` | 左侧居中 |
| `center-right` | 右侧居中 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| `close` | 关闭弹窗时触发 | - |
| `click-overlay` | 点击遮罩层时触发 | - |
| `before-enter` | 弹窗进入前触发 | - |
| `after-enter` | 弹窗进入后触发 | - |
| `after-leave` | 弹窗离开后触发 | - |

### 外部样式类

| 类名 | 说明 |
|------|------|
| `custom-class` | 根节点样式类 |

## 注意事项

1. 弹窗组件会自动处理安全区域适配
2. 建议在弹窗内容较多时使用 `max-height` 限制高度
3. 使用 `blur` 效果时注意兼容性
4. 自定义尺寸时建议使用 rpx 单位以保持响应式 