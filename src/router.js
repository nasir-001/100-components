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
    },
    {
      path: '/layout7',
      name: 'seventh',
      component: () => import('./views/Layout7.vue')
    },
    {
      path: '/layout8',
      name: 'eight',
      component: () => import('./views/Layout8.vue')
    },
    {
      path: '/layout9',
      name: 'ninth',
      component: () => import('./views/Layout9.vue')
    },
    {
      path: '/layout10',
      name: 'tenth',
      component: () => import('./views/Layout10.vue')
    },
    {
      path: '/layout11',
      name: 'eleventh',
      component: () => import('./views/Layout11.vue')
    },
    {
      path: '/layout12',
      name: 'twelve',
      component: () => import('./views/Layout12.vue')
    }
  ],
});

export default router;