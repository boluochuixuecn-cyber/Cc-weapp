<template>
  <div class="cc-preview">
    <h3>右侧预览</h3>
    <div class="phone">
      <div class="screen" v-html="html"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

const html = computed(() => {
  const p = page.value.relativePath || ''
  if (p.includes('components/popup')) {
    return `<h4>Popup 预览</h4><p>点击按钮打开弹出层（示意）。</p><div style=\"display:flex;gap:8px;flex-wrap:wrap\"><button style=\"padding:8px 12px;background:#1989fa;color:#fff;border:none;border-radius:6px\">居中弹出</button><button style=\"padding:8px 12px;background:#1989fa;color:#fff;border:none;border-radius:6px\">底部弹出</button></div>`
  }
  if (p.includes('components/button')) {
    return `<h4>Button 预览</h4><div style=\"display:flex;gap:8px;flex-wrap:wrap\"><button style=\"padding:8px 12px;background:#1989fa;color:#fff;border:none;border-radius:6px\">主要按钮</button><button style=\"padding:8px 12px;background:#07c160;color:#fff;border:none;border-radius:6px\">成功按钮</button></div>`
  }
  if (p.includes('components/toast')) {
    return `<h4>Toast 预览</h4><p>调用 showToast 展示轻提示（示意）。</p>`
  }
  if (p.includes('components/dialog')) {
    return `<h4>Dialog 预览</h4><p>点击按钮打开对话框（示意）。</p><button style=\"padding:8px 12px;background:#1989fa;color:#fff;border:none;border-radius:6px\">打开 Dialog</button>`
  }
  if (p.includes('components/overlay')) {
    return `<h4>Overlay 预览</h4><div style=\"position:relative;height:120px;background:#f7f8fa;border:1px dashed #ddd;border-radius:8px\"><div style=\"position:absolute;inset:0;background:rgba(0,0,0,.5)\"></div></div>`
  }
  if (p.includes('components/icon')) {
    return `<h4>Icon 预览</h4><div style=\"width:48px;height:48px;border:2px solid #07c160;border-radius:50%;position:relative;margin:8px 0\"><div style=\"position:absolute;left:22%;top:48%;width:28%;height:2px;background:#07c160;transform:rotate(45deg);transform-origin:left center\"></div><div style=\"position:absolute;left:44%;top:36%;width:48%;height:2px;background:#07c160;transform:rotate(-45deg);transform-origin:left center\"></div></div>`
  }
  return `<p>在右侧查看预览示意。</p>`
})
</script>

<style scoped>
.cc-preview { padding: 12px 0; }
.cc-preview h3 { margin: 0 0 12px; font-size: 16px; color: #57606a; }
.phone { width: 360px; height: 640px; border: 8px solid #111; border-radius: 24px; background: #fafafa; overflow: hidden; }
.screen { padding: 12px; overflow: auto; height: 100%; }
</style> 