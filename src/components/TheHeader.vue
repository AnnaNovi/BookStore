<template>
  <div class="TheHeader">
    <HeaderNaigation />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderNaigation from './TheHeaderNavigation.vue';

  export default defineComponent({
    name: 'TheHeader',
    components: {
      HeaderNaigation
    }
  });
</script>

<style lang='scss' scoped>

</style>