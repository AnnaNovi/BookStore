import { ActionContext } from 'vuex';
import { RootState } from '../index';

export interface navigationLinks {
  name: string,
  title: string,
  path: string,
  active: boolean,
  subscription: boolean
}
interface navigationState {
  navigation: navigationLinks[]
}

export const navigation = ({
  state: () => ({
    navigation: [
      {
        name: 'home',
        title: 'Главная',
        path: '/',
        active: true,
        subscription: false
      },
      {
        name: 'about',
        title: 'О нас',
        path: '/about',
        active: false,
        subscription: false
      },
      {
        name: 'events',
        title: 'Мероприятия',
        path: '/events',
        active: false,
        subscription: true
      },
      {
        name: 'discounts',
        title: 'Скидки',
        path: '/discounts',
        active: false,
        subscription: false
      },
      {
        name: 'blog',
        title: 'Блог',
        path: '/blog',
        active: false,
        subscription: false
      },
      {
        name: 'delivery',
        title: 'Доставка и оплата',
        path: '/delivery',
        active: false,
        subscription: false
      },
      {
        name: 'contacts',
        title: 'Контакты',
        path: '/contacts',
        active: false,
        subscription: false
      },
      {
        name: 'favorites',
        title: 'Избранное',
        path: '/favorites',
        active: false,
        subscription: true
      },
      {
        name: 'cart',
        title: 'Корзина',
        path: '/cart',
        active: false,
        subscription: false
      },
    ]
  }),
  getters: {
    NavigationLinks(state: navigationState){
      return state.navigation.filter(item => !['home', 'favorites', 'cart'].includes(item.name));
    },
    ActiveLink(state: navigationState){
      const activeLink = state.navigation.filter(item => item.active);
      return {...activeLink[0]};
    }
  },
  mutations: {
    CHANGE_ACTIVE_LINK(state: navigationState, activeLinkName: string) {
      return state.navigation.map(item => {
        if(item.name === activeLinkName) {
          return item.active = true;
        } else {
          return item.active = false;
        }
      });
    }
  },
  actions: {
    changeActiveLink({ commit }: ActionContext<navigationState, RootState>, activeLinkName: string) {
      commit('CHANGE_ACTIVE_LINK', activeLinkName);
    }
  }
});
