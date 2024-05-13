// ==|== Imports ===================================================================================
import { createRouter, createWebHistory } from 'vue-router';

// ==|== Routes ====================================================================================
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/page/:id',
    name: 'Page',
    component: () => import('@/views/PageView.vue')
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: () => import('@/views/MovieDetails.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/ErrorPage.vue')
  }
];

// ==|== Router ====================================================================================
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// ==|== Export ====================================================================================
export default router;
