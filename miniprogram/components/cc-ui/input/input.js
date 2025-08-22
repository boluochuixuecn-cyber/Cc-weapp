Component({
  options: { multipleSlots: true, addGlobalClass: true },
  externalClasses: ['custom-class'],
  properties: {
    value: { type: String, value: '' },
    placeholder: { type: String, value: '' },
    password: { type: Boolean, value: false },
    disabled: { type: Boolean, value: false },
    maxlength: { type: Number, value: 140 },
    type: { type: String, value: 'text' },
    confirmType: { type: String, value: 'done' },
    clearable: { type: Boolean, value: true },
    error: { type: Boolean, value: false },
    errorMessage: { type: String, value: '' },
    cursorSpacing: { type: Number, value: 50 },
    customStyle: { type: String, value: '' },
    customClass: { type: String, value: '' },
  },
  methods: {
    onInput(e) {
      const { value } = e.detail || {};
      this.triggerEvent('input', { value });
    },
    onFocus(e) {
      this.triggerEvent('focus', e.detail || {});
    },
    onBlur(e) {
      this.triggerEvent('blur', e.detail || {});
    },
    onConfirm(e) {
      this.triggerEvent('confirm', e.detail || {});
    },
    onClear() {
      this.triggerEvent('input', { value: '' });
      this.triggerEvent('clear', {});
    },
  },
});
