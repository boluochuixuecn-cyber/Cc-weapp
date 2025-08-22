Component({
  options: { addGlobalClass: true },
  externalClasses: ['custom-class'],
  properties: {
    name: { type: String, value: '' },
    size: { type: Number, value: 32 },
    color: { type: String, value: '#323233' },
    customStyle: { type: String, value: '' },
  },
});
