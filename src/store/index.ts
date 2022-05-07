import { createStore } from 'vuex';
import { navigation, navigationLinks } from './modules/navigation';
import { books, booksStateType } from './modules/books';
import { favorites, favoritesStateType } from './modules/favorites';
import { discountBooks, discountBooksStateType } from './modules/discountBooks';

export interface RootState {
  modules: {
    navigation: navigationLinks,
    books: booksStateType,
    discountBooks: discountBooksStateType,
    favorites: favoritesStateType
  }
}

export default createStore({
  modules: {
    navigation,
    books,
    discountBooks,
    favorites
  }
})
