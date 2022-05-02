<template>
  <header>
    <TheHeaderTop />
    <hr :class="$style.line" />
    <TheHeaderNaigation />
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import TheHeaderNaigation from './TheHeaderNavigation.vue';
  import TheHeaderTop from './TheHeaderTop.vue';

  export default defineComponent({
    name: 'TheHeader',
    components: {
      TheHeaderNaigation,
      TheHeaderTop
    }
  });
</script>

<style lang='scss' module>
  .line {
    border: 1px solid #cdcdcd;
    width: 100%;
  }
</style>