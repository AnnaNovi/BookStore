import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Главная',
      subscription: false,
    },
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'О нас',
      subscription: false,
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/events',
    name: 'events',
    meta: {
      title: 'Мероприятия',
      subscription: true,
    },
    component: () => import(/* webpackChunkName: "events" */ '../views/EventsView.vue')
  },
  {
    path: '/discounts',
    name: 'discounts',
    meta: {
      title: 'Скидки',
      subscription: false,
    },
    component: () => import(/* webpackChunkName: "discounts" */ '../views/DiscountsView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    meta: {
      title: 'Блог',
      subscription: false,
    },
    component: () => import(/* webpackChunkName: "favorites" */ '../views/PageInProgress.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    meta: {
      title: 'Доставка и оплата',
    },
    component: () => import(/* webpackChunkName: "favorites" */ '../views/PageInProgress.vue')
  },
  {
    path: '/contacts',
    name: 'Контакты',
    meta: {
      title: 'Контакты',
      subscription: false,
    },
    component: () => import(/* webpackChunkName: "favorites" */ '../views/PageInProgress.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    meta: {
      title: 'Избранное',
      subscription: true,
    },
    component: () => import(/* webpackChunkName: "favorites" */ '../views/FavoritesView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: 'Корзина',
      subscription: true,
    },
    component: () => import(/* webpackChunkName: "favorites" */ '../views/PageInProgress.vue')
  },
  {
    path: '/inProgress',
    alias: ['/cart'],
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
