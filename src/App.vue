<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-global-style />
    <n-layout>
      <n-layout-header bordered class="toolbar">
        <n-space justify="end" align="center">
          <span>{{ dark ? 'Dark Mode' : 'Light Mode' }}</span>
          <!-- 直接用 v-model 绑到 ref(boolean)，可切换回去 -->
          <n-switch v-model:value="dark">
            <template #checked>Dark</template>
            <template #unchecked>Light</template>
          </n-switch>
        </n-space>
      </n-layout-header>

      <n-layout-content content-style="padding: 24px;">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue'
import { darkTheme } from 'naive-ui'

// 用 boolean 控制主题，避免直接比较对象引用
const dark = ref(false)

// 由 boolean 派生出 Naive 的主题对象（null = 浅色）
const theme = computed(() => (dark.value ? darkTheme : null))

// 可选：持久化，刷新后保持用户选择
onMounted(() => {
  const saved = localStorage.getItem('demo-dark')
  if (saved != null) dark.value = saved === '1'
})
watchEffect(() => {
  localStorage.setItem('demo-dark', dark.value ? '1' : '0')
})

// 你自己的覆盖色
const themeOverrides = {
  common: {
    primaryColor: '#1E88E5',
    primaryColorHover: '#42A5F5',
    primaryColorPressed: '#1565C0'
  }
}
</script>

<style>
.toolbar { padding: 8px 16px; }
</style>