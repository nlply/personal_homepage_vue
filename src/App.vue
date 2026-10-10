<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-global-style />
    <n-layout>
      <n-layout-header bordered class="toolbar">
        <n-space justify="end" align="center">
          <!-- 语言切换：locale 是全局 ref，切换后全站响应式更新 -->
          <n-radio-group v-model:value="locale" size="small" name="locale">
            <n-radio-button v-for="item in LOCALES" :key="item.value" :value="item.value">
              {{ item.label }}
            </n-radio-button>
          </n-radio-group>
          <span>{{ dark ? c.theme.dark : c.theme.light }}</span>
          <!-- 直接用 v-model 绑到 ref(boolean)，可切换回去 -->
          <n-switch v-model:value="dark">
            <template #checked>{{ c.theme.darkShort }}</template>
            <template #unchecked>{{ c.theme.lightShort }}</template>
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
import { ref, computed, watchEffect } from 'vue'
import { darkTheme } from 'naive-ui'
import { locale, LOCALES, useContent } from '@/locales'

const c = useContent()

// 用 boolean 控制主题，避免直接比较对象引用
// 初始值直接读 localStorage：watchEffect 会立即执行并写回，放到 onMounted 里读会被先覆盖掉
const dark = ref(localStorage.getItem('demo-dark') === '1')

// 由 boolean 派生出 Naive 的主题对象（null = 浅色）
const theme = computed(() => (dark.value ? darkTheme : null))

// 持久化，刷新后保持用户选择；网站图标（苏鲁锭）跟随主题黑白切换
watchEffect(() => {
  localStorage.setItem('demo-dark', dark.value ? '1' : '0')
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = dark.value ? 'dark' : 'light'
    const favicon = document.getElementById('favicon')
    if (favicon) favicon.href = `${process.env.BASE_URL}sulde-${dark.value ? 'white' : 'black'}.svg`
  }
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