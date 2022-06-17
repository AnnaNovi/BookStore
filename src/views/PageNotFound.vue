<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">Страница не найдена</h1>
    <div :class="$style.error">404</div>
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
    text-align: center;
    height: 50vh;
    font-weight: 700;
    font-size: 36px;
    color: $BROWN;
    position: relative;
    @media (max-width: 1200px) {
      font-size: 28px;
    }
    @media (max-width: 992px) {
      font-size: 28px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  .error {
    font-weight: 700;
    font-size: 12em;
    color: $BROWN;
    opacity: 0.1;
    position: absolute;
    @media (max-width: 576px) {
      font-size: 10em;
    }
  }
</style>
