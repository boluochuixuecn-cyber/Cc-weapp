---
preview: input
---

# Input 输入框

用于接收用户的文本输入，支持清空按钮、错误提示、密码输入等。

## 引入

```json
{
  "usingComponents": {
    "cc-input": "/components/cc-ui/input/input",
    "cc-cell": "/components/cc-ui/cell/cell",
    "cc-button": "/components/cc-ui/button/button"
  }
}
```

## 基础用法

```wxml
<cc-cell title="文本">
  <cc-input value="{{ text }}" placeholder="请输入文本" bind:input="onInput" />
</cc-cell>
```

```js
Page({
  data: { text: '' },
  onInput(e) {
    this.setData({ text: e.detail.value });
  },
});
```

## 密码输入

```wxml
<cc-cell title="密码">
  <cc-input password value="{{ pwd }}" placeholder="请输入密码" bind:input="onPwd" />
</cc-cell>
```

## 清空按钮

```wxml
<cc-cell title="清空">
  <cc-input clearable value="{{ val }}" placeholder="可清空" bind:input="onVal" />
</cc-cell>
```

## 错误提示

```wxml
<cc-cell title="手机号">
  <cc-input
    value="{{ phone }}"
    placeholder="请输入手机号"
    error="{{ phoneError }}"
    error-message="{{ phoneErrorMessage }}"
    bind:input="onPhone"
  />
</cc-cell>
```

## Props

- **value**: string - 当前输入值
- **placeholder**: string - 占位符
- **password**: boolean - 是否为密码输入
- **disabled**: boolean - 禁用
- **maxlength**: number - 最大长度，默认 140
- **type**: string - 输入类型，默认 text
- **confirmType**: string - 键盘右下角按钮文字，默认 done
- **clearable**: boolean - 是否显示清空按钮
- **error**: boolean - 是否错误状态（边框高亮）
- **errorMessage**: string - 错误提示文案
- **cursorSpacing**: number - 光标与键盘的距离，默认 50
- **customStyle**: string - 行内样式
- **customClass**: string - 自定义类名

## Events

- **bind:input**(e) - 输入时触发，`e.detail.value`
- **bind:focus** - 聚焦时触发
- **bind:blur** - 失焦时触发
- **bind:confirm** - 点击键盘完成时触发
- **bind:clear** - 点击清空时触发
