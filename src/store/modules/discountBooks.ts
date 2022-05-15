import { ActionContext } from 'vuex';
import { RootState } from '../index';

interface booksType {
  author: string,
  authorId: string,
  title: string,
  price: number,
  image: string,
  key: string,
  discount: number
}
export interface discountBooksStateType {
  discountBooks: booksType[],
}

export const discountBooks = ({
  state: () => ({
    discountBooks: [],
  }),
  getters: {
    discountBooksList(state: discountBooksStateType){
      return state.discountBooks;
    },
  },
  mutations: {
    GET_DISCOUNT_BOOKS(state: discountBooksStateType, data: booksType[]) {
      return state.discountBooks = [...data];
    },
  },
  actions: {
    async getDiscountBooks({ commit }: ActionContext<discountBooksStateType, RootState>, page = 1) {
      const fields = `
        author_name,
        author_key,
        title,
        number_of_pages_median,
        cover_edition_key,
        key
      `;
      const discount = false;
      const limit = 16;
      const url = `https://openlibrary.org/search.json?q=language%3Arus&public_scan_b=${discount}&limit=${limit}&page=${page}&fields=${fields}`;
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          const arrayOfBooks = data.docs.map(function(item: any){
            return {
                author: item.author_name[0],
                authorId: item.author_key[0],
                title: item.title,
                price: item.number_of_pages_median,
                image: item.cover_edition_key,
                key: item.key,
                discount: Math.floor(Math.random() * (20 - 5 + 1)) + 5
              }
          });
          commit('GET_DISCOUNT_BOOKS', arrayOfBooks);
        });
    }
  }
});
