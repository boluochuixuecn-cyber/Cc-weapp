<template>
  <div class="cc-preview">
    <h3>右侧预览</h3>
    <div class="phone">
      <div class="screen">
        <component v-if="Comp" :is="Comp" />
        <div v-else v-html="html"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const { page } = useData();

// 自动收集 docs/components/previews 下的预览组件
const modules = (import.meta as any).glob('../../components/previews/**/*.vue', {
  eager: true,
}) as Record<string, any>;

// 生成 key -> 组件 的映射
const previews: Record<string, any> = {};
Object.entries(modules).forEach(([path, mod]) => {
  const after = path.split('/previews/')[1] || '';
  const base = after.replace(/\.vue$/, '');
  const fileKey = base.split('/').pop() || '';
  const comp = (mod as any).default || mod;
  if (fileKey) previews[fileKey] = comp;
  if (base) previews[base] = comp;
});

function getLastSegmentWithoutExt(p: string): string {
  const clean = (p || '').replace(/\\/g, '/').replace(/\.md$/, '');
  const seg = clean.split('/').pop() || '';
  return seg;
}

const Comp = computed(() => {
  const p = page.value.relativePath || '';
  const fm = (page.value as any).frontmatter || {};
  const preferred = (fm.preview as string) || '';
  const keyCandidates = [
    preferred,
    getLastSegmentWithoutExt(p),
    (p || '').replace(/\\/g, '/').replace(/\.md$/, ''),
  ].filter(Boolean);
  for (const k of keyCandidates) {
    if (previews[k]) return previews[k];
  }
  return null;
});

const html = computed(() => {
  const fm = (page.value as any).frontmatter || {};
  return (fm.previewHtml as string) || '<p>在右侧查看预览示意。</p>';
});
</script>

<style scoped>
.cc-preview {
  padding: 12px 0;
}
.cc-preview h3 {
  margin: 0 0 12px;
  font-size: 16px;
  color: #57606a;
}
.phone {
  width: 360px;
  height: 640px;
  border: 8px solid #111;
  border-radius: 24px;
  background: #fafafa;
  overflow: hidden;
}
.screen {
  padding: 12px;
  overflow: auto;
  height: 100%;
}
</style>
