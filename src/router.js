import { createWebHistory, createRouter } from 'vue-router';
import Home from './pages/Home.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/layout1',
      name: 'layout1',
      component: () => import('./views/Layout1.vue')
    },
    {
      path: '/layout2',
      name: 'second',
      component: () => import('./views/Layout2.vue')
    }
  ],
});

export default router;