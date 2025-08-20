Page({
  data: {
    showPopup: false,
    popupPosition: 'center'
  },

  // 打开弹窗
  openPopup(position) {
    this.setData({
      showPopup: true,
      popupPosition: position
    });
  },

  // 关闭弹窗
  closePopup() {
    this.setData({
      showPopup: false
    });
  }
});
