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
export interface booksStateType {
  books: booksType[],
  booksType: string
}

export const books = ({
  state: () => ({
    books: [],
    booksType: ''
  }),
  getters: {
    booksList(state: booksStateType){
      return state.books;
    },
    booksType(state: booksStateType){
      return state.booksType;
    },
  },
  mutations: {
    GET_BOOKS(state: booksStateType, data: booksType[]) {
      return state.books = [...data];
    },
  },
  actions: {
    async getBooks({ commit, state }: ActionContext<booksStateType, RootState>, {type = '', limit = 16, offset = 16}) {
      state.booksType = type;
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
                /* first_sentence
                https://covers.openlibrary.org/b/olid/OL7440033M-S.jpg */
              }
          });
          commit('GET_BOOKS', arrayOfBooks);
        });
    }
  }
});
