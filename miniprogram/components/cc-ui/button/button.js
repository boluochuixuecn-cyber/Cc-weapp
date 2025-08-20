Component({
  options: { multipleSlots: true, addGlobalClass: true },
  externalClasses: ['custom-class'],
  properties: {
    type: { type: String, value: 'primary' },
    plain: { type: Boolean, value: false },
    block: { type: Boolean, value: false },
    disabled: { type: Boolean, value: false },
    loading: { type: Boolean, value: false },
    openType: { type: String, value: '' },
    // New props
    size: { type: String, value: 'normal' }, // normal | large | small | mini
    round: { type: Boolean, value: false },
    hairline: { type: Boolean, value: false },
    color: { type: String, value: '' },
    loadingText: { type: String, value: '' },
    customStyle: { type: String, value: '' },
    hoverClass: { type: String, value: 'button-hover' },
    formType: { type: String, value: '' }
  },
  data: {
    computedStyle: ''
  },
  observers: {
    'color, plain': function(color, plain) {
      if (!color) {
        this.setData({ computedStyle: '' });
        return;
      }
      const style = plain
        ? `color: ${color}; border-color: ${color};`
        : `background-color: ${color}; color: #fff; border-color: ${color};`;
      this.setData({ computedStyle: style });
    }
  },
  methods: {
    onTap(e) {
      if (this.data.disabled || this.data.loading) return;
      this.triggerEvent('tap', e);
    }
  }
});
