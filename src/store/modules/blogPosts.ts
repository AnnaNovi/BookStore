import { ActionContext } from 'vuex';
import { RootState } from '../index';

interface postsType {
  id: number,
  title: string,
  image: string,
}
interface postActiveType extends postsType {
  image2?: string,
  image3?: string,
  image4?: string,
  body?: string
}
export interface postsStateType {
  posts: postsType[],
  imageUrl: string[],
  activePost: postActiveType[],
  postsPage: number,
  postsLimit: number,
}

export const blogPosts = ({
  state: () => ({
    posts: [],
    imageUrl: [],
    activePost: [],
    postsPage: 1,
    postsLimit: 10,
  }),
  getters: {
    postsList(state: postsStateType){
      return state.posts;
    },
    activePost(state: postsStateType){
      return state.activePost[0];
    }
  },
  mutations: {
    GET_POSTS(state: postsStateType, data: postsType[]) {
      return state.posts = [...state.posts, ...data];
    },
    GET_IMAGE_URL(state: postsStateType, data: string) {
      return state.imageUrl.push(data);
    },
    GET_POST_BY_ID(state: postsStateType, data: postActiveType){
      return state.activePost.push(data);
    },
    INCREASE_PAGE(state: postsStateType){
      return state.postsPage += 1;
    }
  },
  actions: {
    async getPosts({ commit, dispatch, state }: ActionContext<postsStateType, RootState>) {
      const limit = state.postsLimit;
      const page = state.postsPage;
      await dispatch('getImageUrl', limit);
      await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${limit}&_page=${page}`)
        .then(response => response.json())
        .then(data => {
          const postsList = data.map((post: postsType, index: number) => {
            return {
              id: post.id,
              title: post.title,
              image: state.imageUrl[index]
            }
          })
          commit('GET_POSTS', postsList)
        })
    },
    async getImageUrl({ commit, state }: ActionContext<postsStateType, RootState>, limit:number){
      state.imageUrl.length = 0;
      for(let i = 0; i < limit; i++) {
        await fetch(`https://random.imagecdn.app/v1/image?width=700&height=700`)
          .then(response => response.text())
          .then(data => commit('GET_IMAGE_URL', data))
      }
    },
    async getPostById({ commit, dispatch, state }: ActionContext<postsStateType, RootState>, id:number) {
      state.activePost.length = 0;
      await dispatch('getImageUrl', 4);
      const hasPost = state.posts.filter(post => post.id === +id);
      if(hasPost.length) {
        await fetch(`https://jsonplaceholder.typicode.com/posts/?id=${id}`)
          .then(response => response.json())
          .then(data => {
            const singlePost =  {
              id: hasPost[0].id,
              title: hasPost[0].title,
              image: hasPost[0].image,
              image2: state.imageUrl[1],
              image3: state.imageUrl[2],
              image4: state.imageUrl[3],
              body: data[0].body
            }
            commit('GET_POST_BY_ID', singlePost);
          })
      } else {
        await fetch(`https://jsonplaceholder.typicode.com/posts/?id=${id}`)
          .then(response => response.json())
          .then(data => {
            const singlePost =  {
              id: data[0].id,
              title: data[0].title,
              image: state.imageUrl[0],
              image2: state.imageUrl[1],
              image3: state.imageUrl[2],
              image4: state.imageUrl[3],
              body: data[0].body
            }
            commit('GET_POST_BY_ID', singlePost);
          })
      }
    },
    getNextPage({ commit }: ActionContext<postsStateType, RootState>) {
      commit('INCREASE_PAGE');
    }
  }
});
