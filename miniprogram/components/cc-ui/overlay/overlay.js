Component({
  properties: {
    show: { type: Boolean, value: false },
    closeOnClick: { type: Boolean, value: true }
  },
  methods: {
    onClose() {
      if (!this.data.closeOnClick) return;
      this.triggerEvent('close');
    },
    noop() {}
  }
});
