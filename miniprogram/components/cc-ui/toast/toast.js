Component({
  externalClasses: ['custom-class'],
  properties: {
    show: { type: Boolean, value: false },
    type: { type: String, value: 'text' },
    message: { type: String, value: '' },
    duration: { type: Number, value: 1500 },
    zIndex: { type: Number, value: 2000 },
    position: { type: String, value: 'middle' }, // top | middle | bottom
    forbidClick: { type: Boolean, value: false }
  },
  data: { timer: null },
  methods: {
    showToast(options = {}) {
      const { type = 'text', message = '', duration = this.data.duration, position } = options;
      if (this.data.timer) clearTimeout(this.data.timer);
      this.setData({ type, message, show: true, position: position || this.data.position });
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
