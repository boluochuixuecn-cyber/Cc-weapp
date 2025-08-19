Page({
  data: {
    showCenter: false,
    showBottom: false
  },
  openCenter() { this.setData({ showCenter: true }); },
  closeCenter() { this.setData({ showCenter: false }); },
  openBottom() { this.setData({ showBottom: true }); },
  closeBottom() { this.setData({ showBottom: false }); },
  openToast() {
    const toast = this.selectComponent('#ccToast');
    toast && toast.showToast({ type: 'text', message: '操作成功', duration: 1500 });
  },
  openDialog() {
    const dialog = this.selectComponent('#ccDialog');
    dialog && dialog.open({ title: '提示', message: '确认执行该操作？', showCancelButton: true });
  },
  onDialogConfirm() {
    const toast = this.selectComponent('#ccToast');
    toast && toast.showToast({ message: '已确认' });
  },
  onDialogCancel() {
    const toast = this.selectComponent('#ccToast');
    toast && toast.showToast({ message: '已取消' });
  }
});
