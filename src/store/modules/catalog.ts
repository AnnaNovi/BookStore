import { ActionContext } from 'vuex';
import { RootState } from '../index';
interface catalogSubcategoriesType {
  subtitle: string;
  query: string;
}
interface catalogType {
  title: string;
  commonQuery: string;
  subcategories: catalogSubcategoriesType[];
}
export interface catalogStateType {
  catalog: catalogType[];
  activeCategory: catalogType;
}
export const catalog = {
  state: () => ({
    catalog: [
      {
        title: 'Художественная литература',
        commonQuery: 'fiction',
        subcategories: [
          {
            subtitle: 'Фэнтези',
            query: 'fantasy',
          },
          {
            subtitle: 'Историческая фантастика',
            query: 'historical_fiction',
          },
          {
            subtitle: 'Ужасы',
            query: 'horror',
          },
          {
            subtitle: 'Юмор',
            query: 'humor',
          },
          {
            subtitle: 'Классика',
            query: 'literature',
          },
          {
            subtitle: 'Магия',
            query: 'magic',
          },
          {
            subtitle: 'Мистика и детективы',
            query: 'mystery_and_detective_stories',
          },
          {
            subtitle: 'Пьесы',
            query: 'plays',
          },
          {
            subtitle: 'Поэзия',
            query: 'poetry',
          },
          {
            subtitle: 'Романы',
            query: 'romance',
          },
          {
            subtitle: 'Научная фантастика',
            query: 'science_fiction',
          },
          {
            subtitle: 'Рассказы',
            query: 'short_stories',
          },
          {
            subtitle: 'Триллеры',
            query: 'thriller',
          },
        ],
      },
      {
        title: 'Книги для детей',
        commonQuery: 'juvenile_fiction',
        subcategories: [
          {
            subtitle: 'Детские Книги',
            query: 'juvenile_literature',
          },
          {
            subtitle: 'Стихи',
            query: 'stories_in_rhyme',
          },
          {
            subtitle: 'Книжки-малышки',
            query: 'infancy',
          },
          {
            subtitle: 'Книги на ночь',
            query: 'bedtime',
          },
          {
            subtitle: 'Книги с картинками',
            query: 'picture_books',
          },
        ],
      },
      {
        title: 'Книги для подростков',
        commonQuery: 'young_adult_fiction',
        subcategories: [
          {
            subtitle: 'Книги для подростков',
            query: 'young_adult_fiction',
          },
        ],
      },
      {
        title: 'Бизнес и Финансы',
        commonQuery: 'business',
        subcategories: [
          {
            subtitle: 'Менеджмент',
            query: 'management',
          },
          {
            subtitle: 'Предпринимательство',
            query: 'entrepreneurship',
          },
          {
            subtitle: 'Экономика',
            query: 'business__economics',
          },
          {
            subtitle: 'Успешные проекты',
            query: 'success_in_business',
          },
          {
            subtitle: 'Финансы',
            query: 'finance',
          },
        ],
      },
      {
        title: 'Биография',
        commonQuery: 'biography',
        subcategories: [
          {
            title: 'Биография',
            query: 'biography',
          },
        ],
      },
      {
        title: 'Социальные науки',
        commonQuery: 'social',
        subcategories: [
          {
            title: 'Антропология',
            query: 'anthropology',
          },
          {
            title: 'Религия',
            query: 'religion',
          },
          {
            title: 'Политическая наука',
            query: 'political_science',
          },
          {
            title: 'Психология',
            query: 'psychology',
          },
        ],
      },
      {
        title: 'Искусство',
        commonQuery: 'art',
        subcategories: [
          {
            subtitle: 'Архитектура',
            query: 'architecture',
          },
          {
            subtitle: 'Руководства по искусству',
            query: 'art__art_instruction',
          },
          {
            subtitle: 'История искусства',
            query: 'history_of_art__art__design_styles',
          },
          {
            subtitle: 'Танцы',
            query: 'dance',
          },
          {
            subtitle: 'Дизайн',
            query: 'design',
          },
          {
            subtitle: 'Мода',
            query: 'fashion',
          },
          {
            subtitle: 'Кинематограф',
            query: 'film',
          },
          {
            subtitle: 'Графический дизайн',
            query: 'graphic_design',
          },
          {
            subtitle: 'Музыка',
            query: 'music',
          },
          {
            subtitle: 'Теория музыки',
            query: 'music_theory',
          },
          {
            subtitle: 'Изобразительное искусство',
            query: 'painting__paintings',
          },
          {
            subtitle: 'Фотография',
            query: 'photography',
          },
        ],
      },
      {
        title: 'Здоровье и здоровый образ жизни',
        commonQuery: 'health',
        subcategories: [
          {
            subtitle: 'Приготовление еды',
            query: 'cooking',
          },
          {
            subtitle: 'Поваренные книги',
            query: 'cookbooks',
          },
          {
            subtitle: 'Душевное здоровье',
            query: 'mental_health',
          },
          {
            subtitle: 'Упражнения',
            query: 'exercise',
          },
          {
            subtitle: 'Питание',
            query: 'nutrition',
          },
          {
            subtitle: 'Самопомощь',
            query: 'self-help',
          },
        ],
      },
    ],
    activeCategory: {},
  }),
  getters: {
    catalogList(state: catalogStateType) {
      return state.catalog;
    },
    activeCategory(state: catalogStateType) {
      return state.activeCategory;
    },
  },
  mutations: {
    SET_ACTIVE_CATEGORY(state: catalogStateType, data: catalogType) {
      return (state.activeCategory = {...data});
    },
  },
  actions: {
    setActiveCategory(
      { commit, state }: ActionContext<catalogStateType, RootState>,
      categoryPath: string
    ) {
      const activeCategory = state.catalog.filter(
        (category) => category.commonQuery === categoryPath
      )[0];
      commit('SET_ACTIVE_CATEGORY', activeCategory);
    },
  },
};
