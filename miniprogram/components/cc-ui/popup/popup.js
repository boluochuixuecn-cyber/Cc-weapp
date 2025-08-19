Component({
  options: { addGlobalClass: true },
  externalClasses: ['custom-class'],
  properties: {
    show: { type: Boolean, value: false },
    position: { type: String, value: 'center' },
    zIndex: { type: Number, value: 1000 },
    overlay: { type: Boolean, value: true },
    duration: { type: Number, value: 300 },
    round: { type: Boolean, value: false },
    overlayStyle: { type: String, value: '' },
    closeOnClickOverlay: { type: Boolean, value: true },
    closeable: { type: Boolean, value: false },
    closeIcon: { type: String, value: 'close' },
    closeIconPosition: { type: String, value: 'top-right' },
    lockScroll: { type: Boolean, value: true },
    rootPortal: { type: Boolean, value: false },
    safeAreaInsetBottom: { type: Boolean, value: true },
    safeAreaInsetTop: { type: Boolean, value: false },
    safeAreaTabBar: { type: Boolean, value: false }
  },
  methods: {
    onOverlayClose() {
      this.triggerEvent('click-overlay');
      if (!this.data.closeOnClickOverlay) return;
      this.triggerEvent('close');
    },
    onTransitionStart() { this.triggerEvent('before-enter'); },
    onTransitionEnd() { this.triggerEvent(this.data.show ? 'after-enter' : 'after-leave'); },
    noop() {}
  }
});
