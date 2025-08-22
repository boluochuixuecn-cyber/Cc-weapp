Page({
  data: {
    text: '',
    password: '',
    clearable: '可清空内容',
    phone: '',
    phoneError: false,
    phoneErrorMessage: '',
  },
  onInput(e) {
    this.setData({ text: e.detail.value });
  },
  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },
  onClearableInput(e) {
    this.setData({ clearable: e.detail.value });
  },
  onPhoneInput(e) {
    const phone = e.detail.value || '';
    const phoneError = !!phone && !/^1\d{10}$/.test(phone);
    this.setData({ phone, phoneError, phoneErrorMessage: phoneError ? '手机号格式不正确' : '' });
  },
  onSubmit() {
    wx.showToast({ title: '提交成功', icon: 'success' });
  },
});
