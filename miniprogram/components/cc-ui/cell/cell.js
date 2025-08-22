Component({
  options: { multipleSlots: true, addGlobalClass: true },
  externalClasses: ['custom-class'],
  properties: {
    title: { type: String, value: '' },
    label: { type: String, value: '' },
    value: { type: String, value: '' },
    isLink: { type: Boolean, value: false },
    customStyle: { type: String, value: '' },
    customClass: { type: String, value: '' },
  },
  data: {
    hasSlot: false,
  },
  lifetimes: {
    attached() {
      const slot = this.selectAllComponents('slot');
      this.setData({ hasSlot: !!(slot && slot.length) });
    },
  },
  methods: {
    onTap(e) {
      this.triggerEvent('tap', e);
    },
  },
});
