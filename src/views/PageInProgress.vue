<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">Страница находится в разработке...</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageNotFound',
});
</script>

<style lang="scss" module>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    font-weight: 700;
    font-size: 28px;
    color: $BROWN;
    position: relative;
    text-align: center;
    @media (max-width: 992px) {
      font-size: 22px;
    }
    @media (max-width: 576px) {
      font-size: 16px;
    }
  }
</style>
