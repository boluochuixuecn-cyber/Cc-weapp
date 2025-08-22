<template>
  <div class="cc-preview">
    <div class="cell">
      <div class="left">单元格</div>
      <div class="right">内容</div>
    </div>
    <div class="cell">
      <div class="left">带描述<div class="desc">辅助说明</div></div>
      <div class="right">内容</div>
    </div>
  </div>
</template>

<style>
.cc-preview { font-size: 14px; color: #2c3e50; }
.cell { display: flex; align-items: center; padding: 10px 12px; border-bottom: 1px solid #eee; }
.left { flex: 1; }
.desc { color: #999; font-size: 12px; margin-top: 4px; }
.right { color: #999; }
</style> 