import { ref, computed, watchEffect } from 'vue'
import en from './en'
import zh from './zh'

const packs = { en, zh }

// html lang 属性用的标准语言标签
const htmlLang = { en: 'en-US', zh: 'zh-CN' }

export const LOCALES = [
  { value: 'en', label: 'EN' },
  { value: 'zh', label: '中文' },
]

const STORAGE_KEY = 'locale'
const DEFAULT_LOCALE = 'en'

// 首次访问一律用英文；只有用户手动切换过才沿用其选择
function initialLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && packs[saved]) return saved
  return DEFAULT_LOCALE
}

// 全局单例：任何组件 import 后都能读写并保持响应式
export const locale = ref(initialLocale())

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, locale.value)
  if (typeof document !== 'undefined') {
    document.documentElement.lang = htmlLang[locale.value]
    document.title = packs[locale.value].pageTitle
  }
})

// 返回当前语言的内容包（computed，切换语言时自动更新）
export function useContent() {
  return computed(() => packs[locale.value])
}
