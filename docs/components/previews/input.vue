<template>
  <div class="cc-preview">
    <div class="row">
      <div class="label">文本</div>
      <div class="field"><input placeholder="请输入文本" /></div>
    </div>
    <div class="row">
      <div class="label">密码</div>
      <div class="field"><input type="password" placeholder="请输入密码" /></div>
    </div>
    <div class="row">
      <div class="label">错误</div>
      <div class="field error">
        <input placeholder="手机号" />
        <div class="msg">手机号格式不正确</div>
      </div>
    </div>
  </div>
</template>

<style>
.cc-preview {
  font-size: 14px;
  color: #2c3e50;
}
.row {
  display: flex;
  align-items: center;
  margin: 8px 0;
}
.label {
  width: 64px;
  color: #666;
}
.field {
  flex: 1;
  position: relative;
}
.field input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.field.error input {
  border-color: #ee0a24;
}
.field .msg {
  margin-top: 6px;
  font-size: 12px;
  color: #ee0a24;
}
</style>
