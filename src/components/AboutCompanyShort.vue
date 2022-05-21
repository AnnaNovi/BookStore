<template>
  <section :class="$style.section">
    <div :class="$style.logoName">BOOKVILLE</div>
    <div :class="$style.title">О нашей компании</div>
    <div :class="$style.textBlock">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  incididunt ut laboret.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  incididunt ut laboret.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AboutCompanyShort',
  });
</script>

<style lang='scss' module>
  .section {
    padding: 50px 120px;
    margin: 0 -120px;
    background: #F8F8F8;
    border-radius: 5px;
  }
  .logoName {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: $BROWN;
    text-transform: uppercase;
  }
  .title {
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #373737;
    margin: 9px 0 35px 0;
  }
  .textBlock {
    font-weight: 100;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 83px;
    padding: 0 50px;
  }
</style>