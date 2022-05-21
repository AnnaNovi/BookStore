import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Главная',
      subscription: true,
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
    component: () => import(/* webpackChunkName: "blog" */ '../views/BlogView.vue')
  },
  {
    path: '/blog/:id',
    name: 'post',
    meta: {
      subscription: false,
    },
    component: () => import(/* webpackChunkName: "post" */ '../views/BlogSingleView.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    meta: {
      title: 'Доставка и оплата',
      subscription: false,
    },
    component: () => import(/* webpackChunkName: "delivery" */ '../views/DeliveryView.vue')
  },
  {
    path: '/contacts',
    name: 'Контакты',
    meta: {
      title: 'Контакты',
      subscription: false,
    },
    component: () => import(/* webpackChunkName: "contacts" */ '../views/ContactsView.vue')
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
    component: () => import(/* webpackChunkName: "cart" */ '../views/PageInProgress.vue')
  },
  {
    path: '/inProgress',
    alias: ['/catalog'],
    name: 'inProgress',
    component: () => import(/* webpackChunkName: "inProgress" */ '../views/PageInProgress.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "pathMatch" */ '../views/PageNotFound.vue')
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/* process.env.BASE_URL */
