import { createStore } from 'vuex';
import { books, booksStateType } from './modules/books';
import { favorites, favoritesStateType } from './modules/favorites';
import { discountBooks, discountBooksStateType } from './modules/discountBooks';

export interface RootState {
  modules: {
    books: booksStateType,
    discountBooks: discountBooksStateType,
    favorites: favoritesStateType
  }
}

export default createStore({
  modules: {
    books,
    discountBooks,
    favorites
  }
})
