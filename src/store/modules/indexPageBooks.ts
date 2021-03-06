import { ActionContext } from 'vuex';
import { RootState } from '../index';

interface booksType {
  author: string,
  authorId: string,
  title: string,
  price: number,
  image: string,
  key: string,
  discount?: number
}
export interface indexPageBooksStateType {
  discountBooksSwiper: booksType[],
  popularBooksSwiper: booksType[],
  recommendsBooksSwiper: booksType[],
}

export const indexPageBooks = ({
  state: () => ({
    discountBooksSwiper: [],
    popularBooksSwiper: [],
    recommendsBooksSwiper: []
  }),
  getters: {
    discountBooksSwiper(state: indexPageBooksStateType){
      return state.discountBooksSwiper;
    },
    popularBooksSwiper(state: indexPageBooksStateType){
      return state.popularBooksSwiper;
    },
    recommendsBooksSwiper(state: indexPageBooksStateType){
      return state.recommendsBooksSwiper;
    },
  },
  mutations: {
    GET_SWIPER_BOOKS(state: indexPageBooksStateType, {data, type} : {data: booksType[], type: string}) {
      switch(type) {
        case 'discount':
          return state.discountBooksSwiper = [...data];
        case 'popular':
          return state.popularBooksSwiper = [...data];
        case 'recommends':
          return state.recommendsBooksSwiper = [...data];
        default: 
          return
      }
    },
  },
  actions: {
    async getSwiperBooks({ commit }: ActionContext<indexPageBooksStateType, RootState>, {page, type}: {page: number, type: string}) {
      const fields = `
        author_name,
        author_key,
        title,
        number_of_pages_median,
        cover_edition_key,
        key,
        ebook_count_i
      `;
      const notDiscount = (type === 'discount') ? false : true;
      const limit = 12;
      const url = `https://openlibrary.org/search.json?q=language%3Arus&public_scan_b=${notDiscount}&limit=${limit}&page=${page}&fields=${fields}`;
      await fetch(url)
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
                discount: (notDiscount) ? null : discount
              }
          });
          commit('GET_SWIPER_BOOKS', {data: arrayOfBooks, type: type});
        })
        .catch((error) => {
          console.log(error);
          alert('?????????????????? ????????????, ???????????????????? ?????????????????????????? ????????????????!')
        });
    },
    getAllSwiperBooks({ dispatch }: ActionContext<indexPageBooksStateType, RootState>){
      dispatch('getSwiperBooks', {page: 15, type: 'discount'});
      dispatch('getSwiperBooks', {page: 16, type: 'popular'});
      dispatch('getSwiperBooks', {page: 17, type: 'recommends'});
    }
  }
});
