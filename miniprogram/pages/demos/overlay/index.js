Page({
  data: { show: false },
  open() {
    this.setData({ show: true });
  },
  close() {
    this.setData({ show: false });
  },
});
