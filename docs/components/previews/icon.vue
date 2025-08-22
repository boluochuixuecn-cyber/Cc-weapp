<template>
  <div>
    <h4 style="margin: 0 0 8px">Icon 预览</h4>
    <div
      style="
        width: 48px;
        height: 48px;
        border: 2px solid #07c160;
        border-radius: 50%;
        position: relative;
        margin: 8px 0;
      "
    >
      <div
        style="
          position: absolute;
          left: 22%;
          top: 48%;
          width: 28%;
          height: 2px;
          background: #07c160;
          transform: rotate(45deg);
          transform-origin: left center;
        "
      ></div>
      <div
        style="
          position: absolute;
          left: 44%;
          top: 36%;
          width: 48%;
          height: 2px;
          background: #07c160;
          transform: rotate(-45deg);
          transform-origin: left center;
        "
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
// 静态示意
</script>
