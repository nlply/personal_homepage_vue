import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogPostView from '../views/BlogPostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog/:slug',
    name: 'post',
    component: BlogPostView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // 浏览器后退回到原来的位置；带 #blog 时滚到博客目录；其余回到顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 16 }
    return { top: 0 }
  }
})

export default router
