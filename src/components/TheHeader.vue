<template>
  <header>
    <component :is="changeHeaderByWindiwSize"></component>
    <hr :class="$style.line" />
    <TheHeaderNaigation />
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import TheHeaderNaigation from './TheHeaderNavigation.vue';
  import TheHeaderTop from './TheHeaderTop.vue';
  import TheHeaderTopShort from './TheHeaderTopShort.vue';

  export default defineComponent({
    name: 'TheHeader',
    data(){
      return {
        windowWidth: document.documentElement.clientWidth,
      }
    },
    components: {
      TheHeaderNaigation,
      TheHeaderTop,
      TheHeaderTopShort
    },
    computed: {
      changeHeaderByWindiwSize(){
        if(this.windowWidth < 576) {
          return TheHeaderTopShort
        } else {
          return TheHeaderTop
        }
      }
    },
    methods: {
      onResize(){
        this.windowWidth = document.documentElement.clientWidth;
      }
    },
    created() {
      window.addEventListener("resize", this.onResize);
    },
    unmounted() {
      window.removeEventListener("resize", this.onResize);
    },
  });
</script>

<style lang='scss' module>
  .line {
    border: 1px solid #cdcdcd;
    width: 100%;
  }
</style>