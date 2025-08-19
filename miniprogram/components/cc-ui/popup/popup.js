Component({
  options: { addGlobalClass: true },
  properties: {
    show: { type: Boolean, value: false },
    position: { type: String, value: 'center' },
    zIndex: { type: Number, value: 1000 },
    closeOnClickOverlay: { type: Boolean, value: true }
  },
  methods: {
    onOverlayClose() {
      if (!this.data.closeOnClickOverlay) return;
      this.triggerEvent('close');
    },
    noop() {}
  }
});
