interface catalogSubcategoriesType {
  subtitle: string,
  query: string
}
interface catalogType {
  title: string;
  subcategories: catalogSubcategoriesType[];
}
export interface catalogStateType {
  catalog: catalogType[];
}
export const catalogBooks = {
  state: () => ({
    catalog: [
      {
        title: 'Художественная литература',
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
        subcategories: [
          {
            subtitle: 'Книги для подростков',
            query: 'young_adult_fiction',
          },
        ],
      },
      {
        title: 'Бизнес и Финансы',
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
        subcategories: [
          {
            title: 'Биография',
            query: 'biography',
          },
        ],
      },
      {
        title: 'Социальные науки',
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
  }),
  getters: {
    catalogList(state: catalogStateType) {
      return state.catalog;
    },
  },
};

