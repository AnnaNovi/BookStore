import { createStore } from 'vuex';
import { books, booksStateType } from './modules/books';
import { favorites, favoritesStateType } from './modules/favorites';
import { discountBooks, discountBooksStateType } from './modules/discountBooks';
import { indexPageBooks, indexPageBooksStateType } from './modules/indexPageBooks'

export interface RootState {
  modules: {
    books: booksStateType,
    discountBooks: discountBooksStateType,
    favorites: favoritesStateType,
    indexPageBooks: indexPageBooksStateType
  }
}

export default createStore({
  modules: {
    books,
    discountBooks,
    favorites,
    indexPageBooks
  }
})
