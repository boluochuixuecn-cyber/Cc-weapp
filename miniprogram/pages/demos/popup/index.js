Page({
  data: { 
    show: false, 
    position: 'center',
    showCloseable: false,
    showRound: false,
    showCustom: false,
    showShadow: false,
    showBlur: false
  },
  
  // 基础弹出方法
  open(pos) { 
    this.setData({ show: true, position: pos }); 
  },
  
  // 关闭弹窗
  onClose() { 
    this.setData({ show: false }); 
  },
  
  // 显示带关闭按钮的弹窗
  openCloseable(pos) {
    this.setData({ 
      showCloseable: true, 
      position: pos 
    }); 
  },
  
  // 关闭带关闭按钮的弹窗
  onCloseCloseable() { 
    this.setData({ showCloseable: false }); 
  },
  
  // 显示圆角弹窗
  openRound(pos) {
    this.setData({ 
      showRound: true, 
      position: pos 
    }); 
  },
  
  // 关闭圆角弹窗
  onCloseRound() { 
    this.setData({ showRound: false }); 
  },
  
  // 显示自定义样式弹窗
  openCustom(pos) {
    this.setData({ 
      showCustom: true, 
      position: pos 
    }); 
  },
  
  // 关闭自定义样式弹窗
  onCloseCustom() { 
    this.setData({ showCustom: false }); 
  },
  
  // 显示阴影弹窗
  openShadow(pos) {
    this.setData({ 
      showShadow: true, 
      position: pos 
    }); 
  },
  
  // 关闭阴影弹窗
  onCloseShadow() { 
    this.setData({ showShadow: false }); 
  },
  
  // 显示模糊弹窗
  openBlur(pos) {
    this.setData({ 
      showBlur: true, 
      position: pos 
    }); 
  },
  
  // 关闭模糊弹窗
  onCloseBlur() { 
    this.setData({ showBlur: false }); 
  }
});
