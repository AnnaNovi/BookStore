import { ActionContext } from 'vuex';
import { RootState } from '../index';
import { getQuantityOfFoundBooks } from '../../helpers/index';

interface booksType {
  author: string,
  authorId: string,
  title: string,
  price: number,
  image: string,
  key: string,
  discount: number | null,
}
interface bookActiveType extends booksType {
  first_sentence: string,
  available: string,
  quantityOfPage: number,
  weight: number,
  publisherYear: number,
  isbn: string,
  subject: string
}
export interface booksStateType {
  activeBook: bookActiveType[];
  similarBooks: booksType[];
  catalogBooks: booksType[];
}

export const books = {
  state: () => ({
    activeBook: [],
    similarBooks: [],
    catalogBooks: [],
  }),
  getters: {
    activeBook(state: booksStateType) {
      return state.activeBook[0];
    },
    similarBooksSwiper(state: booksStateType) {
      return state.similarBooks;
    },
    catalogBooks(state: booksStateType) {
      return state.catalogBooks;
    },
  },
  mutations: {
    GET_BOOK_BY_ID(state: booksStateType, book: bookActiveType) {
      return state.activeBook.push(book);
    },
    GET_SIMILAR_BOOKS(state: booksStateType, books: booksType[]) {
      return (state.similarBooks = [...books]);
    },
    GET_CATALOG_BOOKS(state: booksStateType, books: booksType[]) {
      return (state.catalogBooks = [...books]);
    },
  },
  actions: {
    async getBookById(
      { commit, state }: ActionContext<booksStateType, RootState>,
      bookId: number
    ) {
      state.activeBook.length = 0;
      const fields = `
        author_name,
        author_key,
        title,
        number_of_pages_median,
        cover_edition_key,
        key,
        public_scan_b,
        first_sentence,
        has_fulltext,
        publish_year,
        isbn,
        subject,
        ebook_count_i
      `;
      await fetch(
        `https://openlibrary.org/search.json?q=${bookId}&fields=${fields}`
      )
        .then((response) => response.json())
        .then((data) => {
          const bookData = data.docs[0];
          const lastPublisherYear = bookData.publish_year.sort(
            (a: number, b: number) => b - a
          );
          const discount =
            bookData.ebook_count_i < 5
              ? 5
              : bookData.ebook_count_i > 20
              ? 20
              : bookData.ebook_count_i;
          const book = {
            author: bookData.author_name[0],
            authorId: bookData.author_key[0],
            title: bookData.title,
            price: Math.ceil(bookData.number_of_pages_median * 2.3),
            image: bookData.cover_edition_key,
            key: bookData.key,
            discount: bookData.public_scan_b ? null : discount,
            firstSentence: bookData.first_sentence,
            available: bookData.has_fulltext,
            quantityOfPage: bookData.number_of_pages_median,
            weight: Math.ceil(bookData.number_of_pages_median * 1.5),
            publisherYear: lastPublisherYear[0],
            isbn: bookData.isbn[0],
            subject: bookData.subject[0],
          };
          commit('GET_BOOK_BY_ID', book);
        });
    },
    async getSimilarBooks(
      { commit, state }: ActionContext<booksStateType, RootState>,
      subject: string
    ) {
      state.similarBooks.length = 0;
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
      const limit = 12;
      const urlForQuantityOfFoundBooks = `https://openlibrary.org/search.json?q=subject:${subject}&limit=${limit}&fields=title`;
      const quantityOfBooks = await getQuantityOfFoundBooks(
        urlForQuantityOfFoundBooks
      );
      const pageMin = 1;
      const pageMax = Math.floor(quantityOfBooks / limit);
      const page =
        Math.floor(Math.random() * (pageMax + 1 - pageMin)) + pageMin;
      const url = `https://openlibrary.org/search.json?q=subject:${subject}&limit=${limit}&page=${page}&fields=${fields}`;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const arrayOfBooks = data.docs.map(function (item: any) {
            const discount =
              item.ebook_count_i < 5
                ? 5
                : item.ebook_count_i > 20
                ? 20
                : item.ebook_count_i;
            return {
              author: item.author_name[0],
              authorId: item.author_key[0],
              title: item.title,
              price: Math.ceil(item.number_of_pages_median * 2.3),
              image: item.cover_edition_key,
              key: item.key,
              discount: item.public_scan_b ? null : discount,
            };
          });
          commit('GET_SIMILAR_BOOKS', arrayOfBooks);
        })
        .catch((error) => {
          console.log(error);
          alert('Произошла ошибка, пожалуйста перезагрузите страницу!');
        });
    },
  },
};
