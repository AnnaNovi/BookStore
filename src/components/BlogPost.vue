<template>
  <div :class="$style.wrapper">
    <img :src="post.image" :class="$style.image" alt="">
    <div :class="$style.textBlock">
      <a
        :class="$style.title"
        @click="handleTitleBlogButton(post.id)"
      >
        <span ref="title">{{ post.title }}</span>
        <span
          v-show="addDots"
          :class="$style.titleDots"
          ref="titleDots"
        >...</span>
      </a>
      <p :class="$style.date">{{ postDate }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { mapActions } from 'vuex';
  import { getPostDate } from '../helpers/index';

  interface postsType {
    id: number,
    title: string,
    image: string,
  }

  export default defineComponent({
    name: 'BlogPost',
    data(){
      return {
        addDots: false,
      }
    },
    props: {
      post: {
        type: Object as PropType<postsType>
      }
    },
    computed: {
      postDate(){
        return (this.post?.id) ? getPostDate(this.post?.id) : 'Ошибка!';
      }
    },
    methods: {
      ...mapActions([
        'getPostById'
      ]),
      checkAddDots(){
        const titleElement = (this.$refs["title"] as HTMLSpanElement);
        const titleDotsElement = (this.$refs["titleDots"] as HTMLSpanElement);
        const numberOfLines = titleElement.getClientRects().length;
        const secondLine = titleElement.getClientRects()[1];
        if(numberOfLines > 2) {
          this.addDots = true;
          const secondLineWidth = secondLine.width + 8;
          titleDotsElement.style.left = `${secondLineWidth}px`;
        } else {
          this.addDots = false;
        }
      },
      handleTitleBlogButton(id: number){
        this.$router.push(`/blog/${id}`);
        this.getPostById(id);
      }
    },
    created() {
      window.addEventListener("resize", this.checkAddDots);
    },
    unmounted() {
      window.removeEventListener("resize", this.checkAddDots);
    },
    mounted(){
      this.checkAddDots();
    }
  });
</script>

<style lang='scss' module>
  .wrapper {
    margin-bottom: 0;
    @media (max-width: 450px) {
      margin-bottom: 20px;
    }
  }
  .image {
    width: 100%;
    min-height: 260px;
    object-fit: cover;
    margin-bottom: 10px;
    @media (max-width: 576px) {
      min-height: 200px;
    }
    @media (max-width: 450px) {
      height: 200px;
    }
  }
  .title {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    height: 40px;
    overflow-y: hidden; 
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: $BROWN;
      transition: 0.5s;
    }
    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 17px;
      height: 34px;
    }
  }
  .titleDots {
    position: absolute;
    top: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    @media (max-width: 576px) {
      top: 17px;
    }
  }
  .date {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #8D8D8D;
    @media (max-width: 576px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
  .textBlock {
    position: relative;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>