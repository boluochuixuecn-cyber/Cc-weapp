Component({
  options: { multipleSlots: true, addGlobalClass: true },
  properties: {
    type: { type: String, value: 'primary' },
    plain: { type: Boolean, value: false },
    block: { type: Boolean, value: false },
    disabled: { type: Boolean, value: false },
    loading: { type: Boolean, value: false },
    openType: { type: String, value: '' }
  },
  methods: {
    onTap(e) {
      if (this.data.disabled || this.data.loading) return;
      this.triggerEvent('tap', e.detail || {});
    }
  }
});
