import { createStore } from 'vuex';
import { books, booksStateType } from './modules/books';
import { favorites, favoritesStateType } from './modules/favorites';
import { discountBooks, discountBooksStateType } from './modules/discountBooks';
import { indexPageBooks, indexPageBooksStateType } from './modules/indexPageBooks';
import { blogPosts, postsStateType } from './modules/blogPosts';
import { cart, cartStateType } from './modules/cart';
import { catalog, catalogStateType } from './modules/catalog';
import { catalogBooks, catalogBooksStateType } from './modules/catalogBooks';

export interface RootState {
  modules: {
    blogPosts: postsStateType;
    books: booksStateType;
    cart: cartStateType;
    catalog: catalogStateType;
    catalogBooks: catalogBooksStateType;
    discountBooks: discountBooksStateType;
    favorites: favoritesStateType;
    indexPageBooks: indexPageBooksStateType;
  };
}

export default createStore({
  modules: {
    blogPosts,
    books,
    cart,
    catalog,
    catalogBooks,
    discountBooks,
    favorites,
    indexPageBooks,
  }
})
