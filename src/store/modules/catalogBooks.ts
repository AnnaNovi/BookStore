import { ActionContext } from 'vuex';
import { RootState } from '../index';

interface booksType {
  author: string;
  authorId: string;
  title: string;
  price: number;
  image: string;
  key: string;
  discount: number;
}
export interface catalogBooksStateType {
  catalogBooks: booksType[];
  quantityOfBooks: number | null;
}

export const catalogBooks = {
  state: () => ({
    catalogBooks: [],
    quantityOfBooks: null,
  }),
  getters: {
    catalogBooksList(state: catalogBooksStateType) {
      return state.catalogBooks;
    },
    quantityOfBooks(state: catalogBooksStateType) {
      return state.quantityOfBooks;
    },
  },
  mutations: {
    GET_CATALOG_BOOKS(state: catalogBooksStateType, data: booksType[]) {
      return (state.catalogBooks = [...data]);
    },
    GET_QUANTITY_OF_BOOKS(state: catalogBooksStateType, quantity: number) {
      return (state.quantityOfBooks = quantity);
    },
  },
  actions: {
    async getCatalogBooks(
      {
        commit,
        state,
      }: ActionContext<catalogBooksStateType, RootState>,
      catalogType: string,
      page = 1
    ) {
      state.catalogBooks.length = 0;
      const fields = `
        author_name,
        author_key,
        title,
        number_of_pages_median,
        cover_edition_key,
        key,
        ebook_count_i,
        public_scan_b
      `;
      const limit = 16;
      const url = `https://openlibrary.org/search.json?q=subject%3A${catalogType}&limit=${limit}&page=${page}&fields=${fields}`;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const arrayOfBooks = data.docs.map(function (item: any) {
            const discount =
              item.ebook_count_i < 5
                ? 5
                : item.ebook_count_i > 20
                ? 20
                : item.ebook_count_i;
            return {
              author: item.author_name[0],
              authorId: item.author_key[0],
              title: item.title,
              price: Math.ceil(item.number_of_pages_median * 2.3),
              image: item.cover_edition_key,
              key: item.key,
              discount: item.public_scan_b ? null : discount,
            };
          });
          commit('GET_QUANTITY_OF_BOOKS', data.numFound);
          commit('GET_CATALOG_BOOKS', arrayOfBooks);
        })
        .catch((error) => {
          console.log(error);
          alert('Произошла ошибка, пожалуйста перезагрузите страницу!');
        });
    },
  },
};
