<template>
  <div>
    <img :src="post.image" :class="$style.image" alt="">
    <div :class="$style.textBlock">
      <a
        :class="$style.title"
        @click="this.$router.push(`/blog/${this.post.id}`)"
      >{{ post.title }}</a>
      <p :class="$style.date">{{ getPostDate(this.post.id) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  interface postsType {
    id: number,
    title: string,
    image: string,
    image2?: string,
    image3?: string,
    image4?: string,
    body?: string
  }

  export default defineComponent({
    name: 'BlogPost.vue',
    props: {
      post: {
        type: Object as PropType<postsType>
      }
    },
    methods: {
      getPostDate(id: number){
        const fullDate = new Date(
          2022,
          new Date().getMonth() - id, 
          15
        );
        const year = fullDate.getFullYear();
        const month = fullDate.getMonth() + 1;
        const date = fullDate.getDate();
        return `${(date < 10) ? '0' + date : date}.${(month < 10) ? '0' + month : month}.${year}`;
      }
    }
  });
</script>

<style lang='scss' module>
  .image {
    width: 387px;
    min-height: 260px;
    object-fit: cover;
  }
  .title {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: $BROWN;
      transition: 0.5s;
    }
  }
  .date {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #8D8D8D;
  }
  .textBlock {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>