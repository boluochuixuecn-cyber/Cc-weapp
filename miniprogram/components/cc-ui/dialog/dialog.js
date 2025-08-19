Component({
  properties: {
    show: { type: Boolean, value: false },
    title: { type: String, value: '' },
    message: { type: String, value: '' },
    showCancelButton: { type: Boolean, value: true },
    cancelText: { type: String, value: '取消' },
    confirmText: { type: String, value: '确定' },
    closeOnClickOverlay: { type: Boolean, value: false }
  },
  methods: {
    open(options = {}) { this.setData({ ...options, show: true }); },
    close() { this.setData({ show: false }); },
    onConfirm() { this.triggerEvent('confirm'); this.close(); },
    onCancel() { this.triggerEvent('cancel'); this.close(); },
    onOverlayClose() { if (this.data.closeOnClickOverlay) { this.close(); } }
  }
});
