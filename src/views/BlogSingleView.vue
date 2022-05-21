<template>
  <section :class="{[$style.wrapper]: !loadContent}">
    <TheLoader v-if="loadContent"/>
    <template
      v-if="!loadContent"
    >
      <div :class="$style.textBlock">
        <h1 :class="$style.title">{{ activePost.title }}</h1>
        <p>{{ activePost.body.repeat(3) }}</p>
        <p>{{ activePost.body.repeat(2) }}</p>
        <p>{{ activePost.body.repeat(2) }}</p>
      </div>
      <img :src="activePost.image" :class="$style.mainImage" alt="">
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
    this.getPostById(id);
  }
});
</script>

<style lang="scss" module>
  .title {
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #373737;
    margin: 12px 0 38px;
  }
  .wrapper {
    display: grid;
    row-gap: 47px;
    column-gap: 63px;
    grid-template-areas: "A B"
                          "C C";
  }
  .textBlock {
    grid-area: A;
    p {
      margin: 18px 0;
      font-weight: 300;
      font-size: 16px;
      line-height: 158.4%;
      color: #525252;
    }
  }
  .mainImage {
    grid-area: B;
    width: 522px;
    min-height: 522px;
    object-fit: cover;
    align-self: stretch;
  }
  .imageBlock {
    grid-area: C;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    img {
      height: 260px;
      width: 100%;
      object-fit: cover;
    }
  }
</style>
