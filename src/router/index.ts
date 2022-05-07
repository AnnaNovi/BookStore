import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import(/* webpackChunkName: "events" */ '../views/EventsView.vue')
  },
  {
    path: '/discounts',
    name: 'discounts',
    component: () => import(/* webpackChunkName: "discounts" */ '../views/DiscountsView.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import(/* webpackChunkName: "favorites" */ '../views/FavoritesView.vue')
  },
  {
    path: '/inProgress',
    alias: ['/cart', '/blog', '/delivery', '/contacts'],
    name: 'inProgress',
    component: () => import(/* webpackChunkName: "favorites" */ '../views/PageInProgress.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "discounts" */ '../views/PageNotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
