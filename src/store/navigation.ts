interface navigationLinks {
  name: string,
  title: string,
  path: string,
  active: boolean
}

export const navigation = ({
  state: () => ([
    {
      name: 'home',
      title: 'Главная',
      path: '/',
      active: false
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
  ]),
  getters: {
    NavigationLinks(state: navigationLinks[]){
      return state.filter(item => item.name !== 'home');
    }
  },
  mutations: {
    changeActiveLink(state: navigationLinks[], activeLinkName: string) {
      return state.map(item => {
        if(item.name === activeLinkName) {
          return item.active = true;
        } else {
          return item.active = false;
        }
      });
    }
  },
  actions: {
    changeActiveLink({ commit }: any, activeLinkName: string) {
      commit('changeActiveLink', activeLinkName);
    }
  }
});
