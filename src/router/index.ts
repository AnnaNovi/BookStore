import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Главная',
      subscription: true,
      isNavigation: false,
    },
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'О нас',
      subscription: false,
      isNavigation: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/events',
    name: 'events',
    meta: {
      title: 'Мероприятия',
      subscription: true,
      isNavigation: true,
    },
    component: () =>
      import(/* webpackChunkName: "events" */ '../views/EventsView.vue'),
  },
  {
    path: '/discounts',
    name: 'discounts',
    meta: {
      title: 'Скидки',
      subscription: false,
      isNavigation: true,
    },
    component: () =>
      import(/* webpackChunkName: "discounts" */ '../views/DiscountsView.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    meta: {
      title: 'Блог',
      subscription: false,
      isNavigation: true,
    },
    component: () =>
      import(/* webpackChunkName: "blog" */ '../views/BlogView.vue'),
  },
  {
    path: '/blog/:id',
    name: 'post',
    meta: {
      subscription: false,
      isNavigation: false,
    },
    component: () =>
      import(/* webpackChunkName: "post" */ '../views/BlogSingleView.vue'),
  },
  {
    path: '/books/:id',
    name: 'book',
    meta: {
      subscription: false,
      isNavigation: false,
    },
    component: () =>
      import(/* webpackChunkName: "book" */ '../views/BookView.vue'),
  },
  {
    path: '/delivery',
    name: 'delivery',
    meta: {
      title: 'Доставка и оплата',
      subscription: false,
      isNavigation: true,
    },
    component: () =>
      import(/* webpackChunkName: "delivery" */ '../views/DeliveryView.vue'),
  },
  {
    path: '/contacts',
    name: 'Контакты',
    meta: {
      title: 'Контакты',
      subscription: false,
      isNavigation: true,
    },
    component: () =>
      import(/* webpackChunkName: "contacts" */ '../views/ContactsView.vue'),
  },
  {
    path: '/favorites',
    name: 'favorites',
    meta: {
      title: 'Избранное',
      subscription: true,
      isNavigation: false,
    },
    component: () =>
      import(/* webpackChunkName: "favorites" */ '../views/FavoritesView.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: 'Корзина',
      subscription: false,
      isNavigation: false,
    },
    component: () =>
      import(/* webpackChunkName: "cart" */ '../views/CartView.vue'),
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      subscription: false,
      isNavigation: false,
    },
    component: () =>
      import(/* webpackChunkName: "cart" */ '../views/PageInProgress.vue'),
  },
  {
    path: '/catalog',
    name: 'catalog',
    meta: {
      title: 'Каталог',
      subscription: false,
      isNavigation: false,
    },
    component: () =>
      import(/* webpackChunkName: "cart" */ '../views/CatalogView.vue'),
  },
  {
    path: '/catalog/:category',
    name: 'category',
    meta: {
      subscription: false,
      isNavigation: false,
    },
    component: () =>
      import(/* webpackChunkName: "cart" */ '../views/CatalogSingleView.vue'),
  },
  {
    path: '/inProgress',
    alias: [],
    name: 'inProgress',
    meta: {
      subscription: false,
      isNavigation: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "inProgress" */ '../views/PageInProgress.vue'
      ),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    meta: {
      subscription: false,
      isNavigation: false,
    },
    component: () =>
      import(/* webpackChunkName: "pathMatch" */ '../views/PageNotFound.vue'),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

