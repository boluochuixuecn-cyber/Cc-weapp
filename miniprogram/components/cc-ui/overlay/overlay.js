Component({
  externalClasses: ['custom-class'],
  properties: {
    show: { type: Boolean, value: false },
    closeOnClick: { type: Boolean, value: true },
    zIndex: { type: Number, value: 1000 }
  },
  methods: {
    onClose() {
      if (!this.data.closeOnClick) return;
      this.triggerEvent('close');
    },
    noop() {}
  }
});
