<template>
  <section>
    <h1 :class="$style.title">Блог</h1>
    <TheLoader v-if="loadContent"/>
    <div :class="$style.blogsBlock">
      <BlogPost 
        v-for="(post, index) in postsList"
        :key="post.id"
        :post="post"
        :class="{[$style.longBlogPost]: (index === 5 || index === 6)}"
      />
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
      'getPosts'
    ])
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
  }
  .title {
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #373737;
    margin: 12px 0;
  }
  .longBlogPost {
    grid-row-start: initial;
    grid-row-end: span 2;
    display: grid;
    grid-template-rows: 2fr auto;
    align-items: stretch;
  }
</style>
