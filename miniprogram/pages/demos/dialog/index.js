Page({
  openDialog() {
    this.selectComponent('#dialog').open({ title: '提示', message: '确认执行？' });
  },
  onConfirm() {
    wx.showToast({ title: '已确认', icon: 'none' });
  },
  onCancel() {
    wx.showToast({ title: '已取消', icon: 'none' });
  },
});
