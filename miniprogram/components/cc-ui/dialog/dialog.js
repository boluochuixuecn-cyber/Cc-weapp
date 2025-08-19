Component({
  externalClasses: ['custom-class'],
  properties: {
    show: { type: Boolean, value: false },
    title: { type: String, value: '' },
    message: { type: String, value: '' },
    showCancelButton: { type: Boolean, value: true },
    cancelText: { type: String, value: '取消' },
    confirmText: { type: String, value: '确定' },
    closeOnClickOverlay: { type: Boolean, value: false },
    asyncClose: { type: Boolean, value: false }
  },
  methods: {
    open(options = {}) { this.setData({ ...options, show: true }); this.triggerEvent('open'); },
    close() { this.setData({ show: false }); this.triggerEvent('close'); },
    onConfirm() {
      if (this.data.asyncClose) { this.triggerEvent('confirm'); return; }
      this.triggerEvent('confirm'); this.close();
    },
    onCancel() {
      if (this.data.asyncClose) { this.triggerEvent('cancel'); return; }
      this.triggerEvent('cancel'); this.close();
    },
    onOverlayClose() { if (this.data.closeOnClickOverlay) { this.close(); } }
  }
});
