<template>
  <section :class="{[$style.wrapper]: !loadContent}">
    <TheLoader v-if="loadContent"/>
    <template
      v-if="!loadContent"
    >
      <h1 :class="$style.title">{{ activePost.title }}</h1>
      <img :src="activePost.image" :class="$style.mainImage" alt="">
      <div :class="$style.textBlock">
        <p>{{ activePost.body.repeat(3) }}</p>
        <p>{{ activePost.body.repeat(2) }}</p>
        <p>{{ activePost.body.repeat(2) }}</p>
      </div>
      <div :class="$style.imageBlock">
        <img :src="activePost.image2" alt="">
        <img :src="activePost.image3" alt="">
        <img :src="activePost.image4" alt="">
      </div>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import TheLoader from '../components/TheLoader.vue';

export default defineComponent({
  name: 'BlogSingleView',
  data(){
    return {
      loadContent: true,
    }
  },
  components: {
    TheLoader
  },
  computed: {
    ...mapGetters([
      'activePost'
    ])
  },
  watch: {
    activePost(){
      this.loadContent = false;
    }
  },
  methods: {
    ...mapActions([
      'getPostById'
    ])
  },
  mounted(){
    const id = this.$router.currentRoute.value.params.id;
    if(!this.activePost?.id || this.activePost.id !== +id) {
      this.getPostById(id);
    }
  }
});
</script>

<style lang="scss" module>
  .title {
    grid-area: D;
    @include title;
    margin-top: 12px;
    margin-bottom: -30px;
    @media (max-width: 1220px) {
      margin-bottom: 10px;
    }
  }
  .wrapper {
    display: grid;
    row-gap: 47px;
    column-gap: 63px;
    grid-template-columns: repeat(2fr, 1fr);
    grid-template-areas: "D B"
                          "A B"
                          "C C";
    @media (max-width: 1220px) {
      grid-template-areas: "D D"
                          "B B"
                          "A A"
                          "C C";
      justify-items: center;
    }
  }
  .textBlock {
    grid-area: A;
    p {
      @include paragraph;
      &:not(:first-child):not(:last-child){
        margin: 18px 0;
      }
    }
  }
  .mainImage {
    grid-area: B;
    width: 100%;
    height: 522px;
    object-fit: cover;
    align-self: center;
    @media (max-width: 1220px) {
      width: 522px;
      height: 522px;
    }
    @media (max-width: 992px) {
      width: 380px;
      height: 380px;
      margin: -20px 0;
    }
    @media (max-width: 650px) {
      max-width: 380px;
      height: 320px;
      width: 100%;
    }
    @media (max-width: 450px) {
      height: 240px;
    }
  }
  .imageBlock {
    grid-area: C;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: space-between;
    width: 100%;
    height: 260px;
    @media (max-width: 992px) {
      flex-wrap: wrap;
      height: calc(260 * 2) + 20px;
    }
    @media (max-width: 650px) {
      height: calc(260 * 3) + 30px;
    }
    @media (max-width: 450px) {
      height: calc(200 * 3) + 30px;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      &:not(:first-child):not(:last-child){
        margin: 0 20px;
        @media (max-width: 992px) {
          margin: 0 auto;
        }
      }
      @media (max-width: 992px) {
        margin: 0 auto;
        width: calc(50% - 20px);
        height: calc(100% / 2 - 20px);
      }
      @media (max-width: 650px) {
        width: 80%;
        height: calc(100% / 3 - 10px);
      }
      @media (max-width: 450px) {
        width: 100%;
      }
    }
  }
</style>
