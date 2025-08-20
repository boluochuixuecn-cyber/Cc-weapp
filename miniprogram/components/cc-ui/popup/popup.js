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
    closeIconSize: { type: Number, value: 36 },
    closeIconColor: { type: String, value: '#969799' },
    customCloseIcon: { type: String, value: '' },
    lockScroll: { type: Boolean, value: true },
    rootPortal: { type: Boolean, value: false },
    safeAreaInsetBottom: { type: Boolean, value: true },
    safeAreaInsetTop: { type: Boolean, value: false },
    safeAreaTabBar: { type: Boolean, value: false },
    width: { type: String, value: '' },
    height: { type: String, value: '' },
    maxWidth: { type: String, value: '' },
    maxHeight: { type: String, value: '' },
    minWidth: { type: String, value: '' },
    minHeight: { type: String, value: '' },
    backgroundColor: { type: String, value: '#fff' },
    borderColor: { type: String, value: '' },
    borderWidth: { type: String, value: '' },
    shadow: { type: Boolean, value: false },
    blur: { type: Boolean, value: false }
  },
  data: {
    // 计算后的样式
    computedStyle: ''
  },
  observers: {
    'show, position, round, width, height, maxWidth, maxHeight, minWidth, minHeight, backgroundColor, borderColor, borderWidth, shadow, blur': function(show, position, round, width, height, maxWidth, maxHeight, minWidth, minHeight, backgroundColor, borderColor, borderWidth, shadow, blur) {
      this.computeStyle();
    }
  },
  methods: {
    // 计算样式
    computeStyle() {
      const { width, height, maxWidth, maxHeight, minWidth, minHeight, backgroundColor, borderColor, borderWidth, shadow, blur } = this.data;
      let style = '';
      
      if (width) style += `width: ${width}; `;
      if (height) style += `height: ${height}; `;
      if (maxWidth) style += `max-width: ${maxWidth}; `;
      if (maxHeight) style += `max-height: ${maxHeight}; `;
      if (minWidth) style += `min-width: ${minWidth}; `;
      if (minHeight) style += `min-height: ${minHeight}; `;
      if (backgroundColor) style += `background-color: ${backgroundColor}; `;
      if (borderColor) style += `border-color: ${borderColor}; `;
      if (borderWidth) style += `border-width: ${borderWidth}; `;
      if (shadow) style += `box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.12); `;
      if (blur) style += `backdrop-filter: blur(10rpx); `;
      
      this.setData({ computedStyle: style });
    },
    
    // 点击遮罩层
    onOverlayClose() {
      this.triggerEvent('click-overlay');
      if (!this.data.closeOnClickOverlay) return;
      this.triggerEvent('close');
    },
    
    // 点击关闭按钮
    onCloseClick() {
      this.triggerEvent('close');
    },
    
    // 动画开始
    onTransitionStart() { 
      this.triggerEvent('before-enter'); 
    },
    
    // 动画结束
    onTransitionEnd() { 
      this.triggerEvent(this.data.show ? 'after-enter' : 'after-leave'); 
    },
    
    // 阻止触摸移动
    noop() {}
  }
});
