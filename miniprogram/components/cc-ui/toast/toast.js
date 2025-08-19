Component({
  properties: {
    show: { type: Boolean, value: false },
    type: { type: String, value: 'text' },
    message: { type: String, value: '' },
    duration: { type: Number, value: 1500 },
    zIndex: { type: Number, value: 2000 }
  },
  data: { timer: null },
  methods: {
    showToast(options = {}) {
      const { type = 'text', message = '', duration = this.data.duration } = options;
      if (this.data.timer) clearTimeout(this.data.timer);
      this.setData({ type, message, show: true });
      if (duration > 0) {
        const timer = setTimeout(() => this.hide(), duration);
        this.setData({ timer });
      }
      this.triggerEvent('open');
    },
    hide() {
      if (this.data.timer) clearTimeout(this.data.timer);
      this.setData({ show: false, timer: null });
      this.triggerEvent('close');
    }
  },
  detached() {
    if (this.data.timer) clearTimeout(this.data.timer);
  }
});
