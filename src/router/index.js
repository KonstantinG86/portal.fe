import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import ArticlePage from '@/pages/ArticlePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/articles/:id',
      name: 'article',
      component: ArticlePage
    }
  ]
})

export default router
