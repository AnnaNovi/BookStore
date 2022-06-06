<template>
  <section>
    <h1 :class="$style.title">Блог</h1>
    <div
      :class="$style.blogsBlock"
    >
      <BlogPost 
        v-for="(post, index) in postsList"
        :key="post.id"
        :post="post"
        :class="{[$style.longBlogPost]: (checkLongPostIndex(index))}"
      />
    </div>
    <TheLoader v-if="loadContent"/>
    <div
      v-if="!loadContent"
      style="display:flex;justify-content:center;"
    >
      <button
        :class="$style.nextPage"
        @click="handleNextPageButton"
      >Следующая страница</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import TheLoader from '../components/TheLoader.vue';
import BlogPost from '../components/BlogPost.vue';

export default defineComponent({
  name: 'BlogView',
  data(){
    return {
      loadContent: true,
    }
  },
  components: {
    TheLoader,
    BlogPost
  },
  computed: {
    ...mapGetters([
      'postsList',
    ])
  },
  watch: {
    postsList(){
      this.loadContent = false;
    }
  },
  methods: {
    ...mapActions([
      'getPosts',
      'getNextPage'
    ]),
    handleNextPageButton(){
      this.loadContent = true;
      this.getNextPage();
      this.getPosts();
    },
    checkLongPostIndex(index:number){
      const stringNumber = `${index}`;
      const lastNumber = +stringNumber.charAt(stringNumber.length - 1);
      return (lastNumber === 5 || lastNumber === 6) ? true : false;
    }
  },
  mounted(){
    if(this.postsList.length) {
      this.loadContent = false;
    } else {
      this.getPosts();
    }
  }
});
</script>

<style lang="scss" module>
  .blogsBlock {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    margin-top: 22px;
    margin-bottom: 40px;
    padding: 0;
    justify-items: center;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 50px;
      row-gap: 30px;
      padding: 0 40px;
    }
    @media (max-width: 768px) {
      column-gap: 20px;
      padding: 0;
    }
    @media (max-width: 450px) {
      display: block;
    }
  }
  .title {
    @include title;
  }
  .longBlogPost {
    display: grid;
    grid-row-start: initial;
    grid-row-end: span 2;
    grid-template-rows: 2fr auto;
    align-items: stretch;
    @media (max-width: 992px) {
      grid-row-end: initial;
      grid-template-rows: initial;
    }
  }
  .nextPage {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: $BROWN;
    text-transform: uppercase;
    padding: 20px 46px;
    border: 1px solid $BROWN;
    border-radius: 8px;
    background: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      transition: 0.5s;
      color: #7D6C65;
      border: 1px solid #7D6C65;
      opacity: 0.7;
    }
  }
</style>
