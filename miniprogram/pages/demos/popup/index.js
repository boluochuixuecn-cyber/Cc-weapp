Page({
  data: { show: false, position: 'center' },
  open(pos) { this.setData({ show: true, position: pos }); },
  onClose() { this.setData({ show: false }); }
});
