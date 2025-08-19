Page({
  showText() { this.selectComponent('#toast').showToast({ message: '操作成功' }); },
  showLoading() { this.selectComponent('#toast').showToast({ type: 'loading', message: '加载中...', duration: 0 }); setTimeout(()=>{ this.selectComponent('#toast').hide(); }, 1500); }
});
