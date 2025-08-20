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

  open: function(e) {
    const position = e.currentTarget.dataset.position || 'center';
    console.log('open called with position:', position);
    this.setData({
      show: true,
      position: position
    });
  },

  onClose: function() {
    this.setData({
      show: false
    });
  },

  openCloseable: function(e) {
    const position = e.currentTarget.dataset.position || 'center';
    console.log('openCloseable called with position:', position);
    this.setData({
      showCloseable: true,
      position: position
    });
  },

  onCloseCloseable: function() {
    this.setData({
      showCloseable: false
    });
  },

  openRound: function(e) {
    const position = e.currentTarget.dataset.position || 'center';
    this.setData({
      showRound: true,
      position: position
    });
  },

  onCloseRound: function() {
    this.setData({
      showRound: false
    });
  },

  openCustom: function(e) {
    const position = e.currentTarget.dataset.position || 'center';
    this.setData({
      showCustom: true,
      position: position
    });
  },

  onCloseCustom: function() {
    this.setData({
      showCustom: false
    });
  },

  openShadow: function(e) {
    const position = e.currentTarget.dataset.position || 'center';
    this.setData({
      showShadow: true,
      position: position
    });
  },

  onCloseShadow: function() {
    this.setData({
      showShadow: false
    });
  },

  openBlur: function(e) {
    const position = e.currentTarget.dataset.position || 'center';
    this.setData({
      showBlur: true,
      position: position
    });
  },

  onCloseBlur: function() {
    this.setData({
      showBlur: false
    });
  }
});
