import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import ArticlePage from '@/pages/ArticlePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import {useAuthStore} from '@/stores/authstore'
import ArticlesPage from '@/pages/admin/ArticlesPage.vue'
import CreateArticlePage from '@/pages/admin/CreateArticlePage.vue'
import EditArticlePage from '@/pages/admin/EditArticlePage.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/admin/articles',
      name: 'admin_articles',
      component: ArticlesPage,
      meta: {
        authOnly: true
      }
    },
    {
      path: '/admin/articles/create',
      name: 'admin_article_create',
      component: CreateArticlePage,
      meta: {
        authOnly: true
      }
    },
    {
      path: '/admin/articles/:id',
      name: 'admin_article_edit',
      component: EditArticlePage,
      meta: {
        authOnly: true
      }
    }
  ]
});

router.beforeEach(function (to) {
  const authStore = useAuthStore();
  if (to.meta.guestOnly && authStore.isAuth) {
    return {
      name: 'main'
    };
  }

  if (to.meta.authOnly && !authStore.isAuth) {
    return {
      name: 'login'
    };
  }
});


export default router
