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
    height: 50vh;
    font-weight: 700;
    font-size: 36px;
    color: #887569;
    position: relative;
  }
  .error {
    font-weight: 700;
    font-size: 15em;
    color: #887569;
    opacity: 0.1;
    position: absolute;
  }
</style>
