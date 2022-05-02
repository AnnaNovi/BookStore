import { ActionContext } from 'vuex';

interface navigationLinks {
  name: string,
  title: string,
  path: string,
  active: boolean
}
interface State {
  navigation: navigationLinks[]
}

export const navigation = ({
  state: () => ({
    navigation: [
      {
        name: 'home',
        title: 'Главная',
        path: '/',
        active: true
      },
      {
        name: 'about',
        title: 'О нас',
        path: '/about',
        active: false
      },
      {
        name: 'events',
        title: 'Мероприятия',
        path: '/events',
        active: false
      },
      {
        name: 'discounts',
        title: 'Скидки',
        path: '/discounts',
        active: false
      },
      {
        name: 'blog',
        title: 'Блог',
        path: '/blog',
        active: false
      },
      {
        name: 'delivery',
        title: 'Доставка и оплата',
        path: '/delivery',
        active: false
      },
      {
        name: 'contacts',
        title: 'Контакты',
        path: '/contacts',
        active: false
      }
    ]
  }),
  getters: {
    NavigationLinks(state: State){
      return state.navigation.filter(item => item.name !== 'home');
    },
    ActiveLink(state: State){
      const activeLink = state.navigation.filter(item => item.active);
      return {...activeLink[0]};
    }
  },
  mutations: {
    CHANGE_ACTIVE_LINK(state: State, activeLinkName: string) {
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
    changeActiveLink({ commit }: ActionContext<State, State>, activeLinkName: string) {
      commit('CHANGE_ACTIVE_LINK', activeLinkName);
    }
  }
});
