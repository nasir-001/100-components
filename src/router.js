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
    },
    {
      path: '/layout13',
      name: 'thirteen',
      component: () => import('./views/Layout13.vue')
    },
    {
      path: '/layout14',
      name: 'fourtheen',
      component: () => import('./views/Layout14.vue')
    },
    {
      path: '/layout15',
      name: 'fifteen',
      component: () => import('./views/Layout15.vue')
    },
    {
      path: '/layout16',
      name: 'sixteen',
      component: () => import('./views/Layout16.vue')
    },
    {
      path: '/layout17',
      name: 'seventeen',
      component: () => import('./views/Layout17.vue')
    },
    {
      path: '/layout18',
      name: 'eigtheen',
      component: () => import('./views/Layout18.vue')
    },
    {
      path: '/layout19',
      name: 'nineteen',
      component: () => import('./views/Layout19.vue')
    },
    {
      path: '/layout20',
      name: 'twenty',
      component: () => import('./views/Layout20.vue')
    },
    {
      path: '/layout21',
      name: 'twentyone',
      component: () => import('./views/Layout21.vue')
    },
    {
      path: '/layout22',
      name: 'twentytwo',
      component: () => import('./views/Layout22.vue')
    },
    {
      path: '/layout23',
      name: 'twentythree',
      component: () => import('./views/Layout23.vue')
    },
    {
      path: '/layout24',
      name: 'twentyfour',
      component: () => import('./views/Layout24.vue')
    },
    {
      path: '/layout25',
      name: 'twentyfive',
      component: () => import('./views/Layout25.vue')
    }
  ],
});

export default router;