import { ActionContext } from 'vuex';
import { RootState } from '../index';

interface booksType {
  author: string,
  authorId: string,
  title: string,
  price: number,
  image: string,
  key: string
}
export interface discountBooksStateType {
  discountBooks: booksType[],
  discountValue: number
}

export const discountBooks = ({
  state: () => ({
    discountBooks: [],
    discountValue: 15
  }),
  getters: {
    discountBooksList(state: discountBooksStateType){
      return state.discountBooks;
    },
    discountValue(state: discountBooksStateType){
      return state.discountValue;
    },
  },
  mutations: {
    GET_DISCOUNT_BOOKS(state: discountBooksStateType, data: booksType[]) {
      return state.discountBooks = [...data];
    },
  },
  actions: {
    async getDiscountBooks({ commit }: ActionContext<discountBooksStateType, RootState>, {limit = 16, offset = 16}) {
      await fetch(`https://openlibrary.org/search.json?q=language%3Arus&limit=${limit}&offset=${offset}`)
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
              }
          });
          commit('GET_DISCOUNT_BOOKS', arrayOfBooks);
        });
    }
  }
});
