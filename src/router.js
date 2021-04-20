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
    },
    {
      path: '/layout3',
      name: 'third',
      component: () => import('./views/Layout3.vue')
    },
    {
      path: '/layout4',
      name: 'fourth',
      component: () => import('./views/Layout4.vue')
    },
    {
      path: '/layout5',
      name: 'fifth',
      component: () => import('./views/Layout5.vue')
    },
    {
      path: '/layout6',
      name: 'sixth',
      component: () => import('./views/Layout6.vue')
    }
  ],
});

export default router;