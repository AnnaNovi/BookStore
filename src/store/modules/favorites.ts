import { ActionContext } from 'vuex';
import { RootState } from '../index';

interface booksType {
  author: string,
  authorId: string,
  title: string,
  price: number,
  image: string,
  key: string,
  discount: number | null
}

export interface favoritesStateType {
  favorites: Set<string>;
  favoriteBooks: booksType[]
}

export const favorites = ({
  state: () => ({
    favorites: new Set(),
    favoriteBooks: []
  }),
  getters: {
    favoritesList(state: favoritesStateType){
      return state.favorites;
    },
    favoritesSize(state: favoritesStateType){
      return state.favorites.size;
    },
    favoriteBooksList(state: favoritesStateType){
      return state.favoriteBooks;
    },
  },
  mutations: {
    ADD_FAVORITES_BOOK(state: favoritesStateType, bookKey: string) {
      return state.favorites.add(bookKey);
    },
    REMOVE_FAVORITES_BOOK(state: favoritesStateType, bookKey: string) {
      return state.favorites.delete(bookKey);
    },
    ADD_FAVORITES_BOOK_FROM_LOCALSTORAGE(state: favoritesStateType, booksKey: string) {
      const booksFromLocalStorage = JSON.parse(booksKey);
      return state.favorites = new Set(booksFromLocalStorage);
    },
    GET_FAVORITES_BOOKS(state: favoritesStateType, data: booksType[]) {
      return state.favoriteBooks = [...state.favoriteBooks, ...data];
    },
  },
  actions: {
    addFavoritesBook({ commit }: ActionContext<favoritesStateType, RootState>, bookKey: string) {
      commit('ADD_FAVORITES_BOOK', bookKey);
    },
    removeFavoritesBook({ commit }: ActionContext<favoritesStateType, RootState>, bookKey: string) {
      commit('REMOVE_FAVORITES_BOOK', bookKey);
    },
    toggleFavoritesBook({ state, dispatch }: ActionContext<favoritesStateType, RootState>, bookKey: string) {
      const isBook = state.favorites.has(bookKey);
      (isBook) ? dispatch('removeFavoritesBook', bookKey) : dispatch('addFavoritesBook', bookKey);
    },
    checkFavoritesBook({ state }: ActionContext<favoritesStateType, RootState>, bookKey: string) {
      return state.favorites.has(bookKey);
    },
    addFavoritesBookFromLocalStorage({ commit }: ActionContext<favoritesStateType, RootState>) {
      const booksKey = localStorage.getItem('favoritesList');
      commit('ADD_FAVORITES_BOOK_FROM_LOCALSTORAGE', booksKey);
    },
    getFavoriteBooks({ commit, state }: ActionContext<favoritesStateType, RootState>) {
      state.favoriteBooks.length = 0;
      const fields = `
        author_name,
        author_key,
        title,
        number_of_pages_median,
        cover_edition_key,
        key,
        public_scan_b,
        ebook_count_i
      `;
      state.favorites.forEach(async(bookIdPath: string) => {
        const bookIdSeparate = bookIdPath.split('/');
        const bookId = bookIdSeparate[bookIdSeparate.length - 1];
        await fetch(`https://openlibrary.org/search.json?q=${bookId}&fields=${fields}`)
          .then(response => response.json())
          .then(data => {
            const arrayOfBooks = data.docs.map(function(item: any){
              const discount = (item.ebook_count_i < 5) ? 5 : (item.ebook_count_i > 20) ? 20 : item.ebook_count_i;
              return {
                  author: item.author_name[0],
                  authorId: item.author_key[0],
                  title: item.title,
                  price: Math.ceil(item.number_of_pages_median * 2.3),
                  image: item.cover_edition_key,
                  key: item.key,
                  discount: (item.public_scan_b) ? null : discount
                }
            });
            commit('GET_FAVORITES_BOOKS', arrayOfBooks);
          });
      })
    }
  }
});
