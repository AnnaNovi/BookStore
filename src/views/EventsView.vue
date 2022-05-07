<template>
  <section :class="$style.section">
    <h1 :class="$style.title">Мероприятия</h1>
    <div :class="$style.wrapper">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipisicing im veniam Lorem ipsum dolor sit amet, consectetur adipisicing 
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
        </p>
      </div>
      <div :class="$style.imageBlock">
        <img src="../assets/images/events-1.jpg">
        <img src="../assets/images/events-2.jpg">
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EventsView',

});
</script>

<style lang="scss" module>
  .title {
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #373737;
  }
  .section p {
    margin: 22px 0;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #525252;
  }
  .wrapper {
    display: flex;
  }
  .imageBlock {
    margin-left: 25px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 11px;
    img {
      width: 312px;
      height: 312px;
    }
  }
</style>
