import { ActionContext } from 'vuex';
import { RootState } from '../index';

interface booksType {
  author: string,
  authorId: string,
  title: string,
  price: number,
  image: string,
  key: string,
  discount: number | null,
  quantityInCart: number
}

export interface cartStateType {
  cart: Map<string, number>;
  cartBooks: booksType[],
}

export const cart = ({
  state: () => ({
    cart: new Map(),
    cartBooks: [],
  }),
  getters: {
    cartList(state: cartStateType){
      return state.cart;
    },
    cartSize(state: cartStateType){
      let size = 0;
      for (const quantity of state.cart.values()) {
        size += quantity;
      }
      return size;
    },
    cartBooksList(state: cartStateType){
      return state.cartBooks;
    },
  },
  mutations: {
    ADD_CART_BOOK(state: cartStateType, bookKey: string) {
      return state.cart.set(bookKey, 1);
    },
    REMOVE_CART_BOOK(state: cartStateType, bookKey: string) {
      state.cart.delete(bookKey);
      const filterArray = state.cartBooks.filter(book => book.key !== bookKey);
      return state.cartBooks = [...filterArray];
    },
    CHANGE_CART_BOOK_QUANTITY(state: cartStateType, {bookKey, type}: {bookKey: string, type: string}) {
      const lastValue = state.cart.get(bookKey);
      if(lastValue) {
        (type === 'increase') ? state.cart.set(bookKey, lastValue + 1) :
        (lastValue === 1) ? undefined : state.cart.set(bookKey, lastValue - 1);
      }
      return state.cartBooks.forEach(book => {
        if(book.key === bookKey) {
          (type === 'increase') ? book.quantityInCart += 1 :
          (book.quantityInCart === 1) ? undefined : book.quantityInCart -= 1;
        }
      })
    },
    ADD_CART_BOOK_FROM_LOCALSTORAGE(state: cartStateType, booksKey: string) {
      const booksFromLocalStorage = JSON.parse(booksKey);
      return state.cart = new Map(booksFromLocalStorage);
    },
    GET_CART_BOOKS(state: cartStateType, data: booksType[]) {
      return state.cartBooks = [...state.cartBooks, ...data];
    },
  },
  actions: {
    addCartBook({ commit, state }: ActionContext<cartStateType, RootState>, bookKey: string) {
      commit('ADD_CART_BOOK', bookKey);
    },
    removeCartBook({ commit }: ActionContext<cartStateType, RootState>, bookKey: string) {
      commit('REMOVE_CART_BOOK', bookKey);
    },
    checkCartBook({ state }: ActionContext<cartStateType, RootState>, bookKey: string) {
      return state.cart.has(bookKey);
    },
    addCartBookFromLocalStorage({ commit }: ActionContext<cartStateType, RootState>) {
      const booksKey = localStorage.getItem('cartList');
      commit('ADD_CART_BOOK_FROM_LOCALSTORAGE', booksKey);
    },
    changeCartBookQuantity({ commit }: ActionContext<cartStateType, RootState>, {bookKey, type}: {bookKey: string, type: string}){
      commit('CHANGE_CART_BOOK_QUANTITY', {bookKey: bookKey, type: type});
    },
    async getCartBooks({ commit, state }: ActionContext<cartStateType, RootState>) {
      state.cartBooks.length = 0;
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
      for (const bookIdQuantity of state.cart) {
        const bookIdSeparate = bookIdQuantity[0].split('/');
        const bookId = bookIdSeparate[bookIdSeparate.length - 1];
        const bookQuantity = bookIdQuantity[1];
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
                  discount: (item.public_scan_b) ? null : discount,
                  quantityInCart: bookQuantity
                }
            });
            commit('GET_CART_BOOKS', arrayOfBooks);
          });
      }
    }
  }
});
