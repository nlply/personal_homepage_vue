<template>
  <div class="site-page">
    <div class="site-content">
      <router-link class="back-link" :to="{ name: 'home', hash: '#blog' }">{{ c.blogUI.back }}</router-link>

      <article v-if="post" class="post">
        <h1 class="post-title">{{ post.title }}</h1>
        <p v-if="post.date" class="post-date">{{ post.date }}</p>
        <!-- 内容来自仓库里自己写的 Markdown，可信，所以直接 v-html -->
        <div class="post-body" v-html="post.html"></div>
      </article>

      <p v-else class="post-missing">{{ c.blogUI.notFound }}</p>
    </div>
    <n-back-top :right="40" :bottom="40"/>
  </div>
</template>

<script>

import {defineComponent, computed, watchEffect, onBeforeUnmount} from 'vue'
import {useContent} from '@/locales'
import {getPost} from '@/blog'

export default defineComponent({
  props: {
    slug: {type: String, required: true},
  },
  setup(props) {
    const c = useContent()
    const post = computed(() => getPost(props.slug))

    // 标签页标题显示文章名，离开时恢复主页标题
    watchEffect(() => {
      document.title = post.value ? `${post.value.title} | ${c.value.name}` : c.value.pageTitle
    })
    onBeforeUnmount(() => {
      document.title = c.value.pageTitle
    })

    return {c, post}
  }
})

</script>

<style scoped>
.back-link {
  display: inline-block;
  margin-bottom: 28px;
  font-size: 15px;
  color: var(--link);
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}

.post-title {
  font-size: 30px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 6px;
  color: var(--fg-strong);
}

.post-date {
  margin: 0 0 28px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--border);
  color: var(--fg-muted);
  font-size: 14px;
  font-variant-numeric: tabular-nums;
}

.post-missing {
  color: var(--fg-muted);
}

/* ---------- 正文排版（v-html 渲染的内容需要 :deep） ---------- */

.post-body {
  overflow-wrap: break-word;
}

.post-body :deep(h1),
.post-body :deep(h2),
.post-body :deep(h3),
.post-body :deep(h4) {
  color: var(--fg-strong);
  font-weight: 600;
  line-height: 1.35;
  margin: 32px 0 12px;
}

.post-body :deep(h1) { font-size: 24px; }
.post-body :deep(h2) { font-size: 21px; padding-bottom: 6px; border-bottom: 1px solid var(--border); }
.post-body :deep(h3) { font-size: 18px; }
.post-body :deep(h4) { font-size: 16px; }

.post-body :deep(p),
.post-body :deep(ul),
.post-body :deep(ol) {
  margin: 0 0 16px;
}

.post-body :deep(ul),
.post-body :deep(ol) {
  padding-left: 24px;
}

.post-body :deep(li + li) {
  margin-top: 4px;
}

.post-body :deep(a) {
  color: var(--link);
  text-decoration: none;
}

.post-body :deep(a:hover) {
  text-decoration: underline;
}

.post-body :deep(img),
.post-body :deep(video) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 20px auto;
  border-radius: 4px;
}

.post-body :deep(blockquote) {
  margin: 0 0 16px;
  padding: 2px 16px;
  border-left: 3px solid var(--border);
  color: var(--fg-muted);
}

.post-body :deep(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 0.88em;
  padding: 1px 5px;
  background: var(--bg-thumb);
  border-radius: 3px;
}

.post-body :deep(pre) {
  margin: 0 0 16px;
  padding: 12px 14px;
  overflow-x: auto;
  background: var(--bg-thumb);
  border: 1px solid var(--border-soft);
  border-radius: 4px;
  line-height: 1.55;
}

.post-body :deep(pre code) {
  padding: 0;
  background: none;
  font-size: 13.5px;
}

.post-body :deep(table) {
  display: block;
  max-width: 100%;
  overflow-x: auto;
  margin: 0 0 16px;
  border-collapse: collapse;
  font-size: 15px;
}

.post-body :deep(th),
.post-body :deep(td) {
  padding: 6px 12px;
  border: 1px solid var(--border);
}

.post-body :deep(th) {
  background: var(--bg-thumb);
  font-weight: 600;
}

.post-body :deep(hr) {
  margin: 28px 0;
  border: none;
  border-top: 1px solid var(--border);
}

@media (max-width: 720px) {
  .post-title {
    font-size: 25px;
  }
}
</style>
