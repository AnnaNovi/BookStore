import { createStore } from 'vuex';
import { books, booksStateType } from './modules/books';
import { favorites, favoritesStateType } from './modules/favorites';
import { discountBooks, discountBooksStateType } from './modules/discountBooks';
import { indexPageBooks, indexPageBooksStateType } from './modules/indexPageBooks';
import { blogPosts, postsStateType } from './modules/blogPosts';

export interface RootState {
  modules: {
    books: booksStateType,
    discountBooks: discountBooksStateType,
    favorites: favoritesStateType,
    indexPageBooks: indexPageBooksStateType,
    blogPosts: postsStateType
  }
}

export default createStore({
  modules: {
    books,
    discountBooks,
    favorites,
    indexPageBooks,
    blogPosts
  }
})
