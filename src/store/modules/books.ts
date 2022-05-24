import { ActionContext } from 'vuex';
import { RootState } from '../index';

interface booksType {
  author: string,
  authorId: string,
  title: string,
  price: number,
  image: string,
  key: string,
  discount?: number,
  first_sentence?: string,
  available?: string,
  quantityOfPage?: number,
  weight?: number,
  publisherYear?: number,
  isbn?: string,
  subject?: string
}
export interface booksStateType {
  books: booksType[],
  activeBook: booksType[],
  similarBooks: booksType[]
}

export const books = ({
  state: () => ({
    books: [],
    activeBook: [],
    similarBooks: []
  }),
  getters: {
    booksList(state: booksStateType){
      return state.books;
    },
    activeBook(state: booksStateType){
      return state.activeBook[0];
    },
    similarBooksSwiper(state: booksStateType){
      return state.similarBooks;
    },
  },
  mutations: {
    GET_BOOKS(state: booksStateType, data: booksType[]) {
      return state.books = [...data];
    },
    GET_BOOK_BY_ID(state: booksStateType, data: booksType) {
      return state.activeBook.push(data);
    },
    GET_SIMILAR_BOOKS(state: booksStateType, data: booksType[]) {
      return state.similarBooks = [...data];
    },
  },
  actions: {
    async getBooks({ commit }: ActionContext<booksStateType, RootState>, {limit = 16, offset = 16}) {
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
                key: item.key
              }
          });
          commit('GET_BOOKS', arrayOfBooks);
        });
    },
    async getBookById({ commit, state }: ActionContext<booksStateType, RootState>, bookId:number) {
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
      await fetch(`https://openlibrary.org/search.json?q=${bookId}&fields=${fields}`)
        .then(response => response.json())
        .then(data => {
          const lastPublisherYear = data.docs[0].publish_year.sort((a: number, b: number) => b - a);
          const discount = (data.ebook_count_i < 5) ? 5 : (data.ebook_count_i > 20) ? 20 : data.ebook_count_i;
          const book = {
            author: data.docs[0].author_name[0],
            authorId: data.docs[0].author_key[0],
            title: data.docs[0].title,
            price: Math.ceil(data.docs[0].number_of_pages_median * 2.3),
            image: data.docs[0].cover_edition_key,
            key: data.docs[0].key,
            firstSentence: data.docs[0].first_sentence,
            available: data.docs[0].has_fulltext,
            quantityOfPage: data.docs[0].number_of_pages_median,
            weight: Math.ceil(data.docs[0].number_of_pages_median * 1.5),
            publisherYear: lastPublisherYear[0],
            isbn: data.docs[0].isbn[0],
            discount: discount,
            subject: data.docs[0].subject[0]
          };
          commit('GET_BOOK_BY_ID', book);
        });
    },
    async getSimilarBooks({ commit }: ActionContext<booksStateType, RootState>, subject:string){
      const fields = `
        author_name,
        author_key,
        title,
        number_of_pages_median,
        cover_edition_key,
        key
      `;
      const limit = 12;
      const page = (Math.floor(Math.random() * (10 - 1 + 1)) + 1);
      const url = `https://openlibrary.org/search.json?q=subject:${subject}&public_scan_b=${true}&limit=${limit}&page=${page}&fields=${fields}`;
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          const arrayOfBooks = data.docs.map(function(item: any){
            return {
                author: item.author_name[0],
                authorId: item.author_key[0],
                title: item.title,
                price: Math.ceil(item.number_of_pages_median * 2.3),
                image: item.cover_edition_key,
                key: item.key
              }
          });
          commit('GET_SIMILAR_BOOKS', arrayOfBooks);
        })
        .catch((error) => {
          console.log(error);
          alert('Произошла ошибка, пожалуйста перезагрузите страницу!')
        });
    }
  }
});
