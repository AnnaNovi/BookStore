<template>
  <section :class="$style.section">
    <h1 :class="$style.title">Мероприятия</h1>
    <div :class="$style.wrapper">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipisicing im veniam Lorem ipsum dolor sit amet, consectetur adipisicing 
      </p>
      <div :class="$style.imageBlock">
        <img src="../assets/images/events-1.jpg">
        <img src="../assets/images/events-2.jpg">
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
      </p>
    </div>
    <p style="margin-top:20px;">
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
    @include title;
  }
  .section p {
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #525252;
    margin-right: 14px;
    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 140%;
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 25px;
    row-gap: 16px;
    align-items: center;
    img {
      width: 312px;
      height: 312px;
      object-fit: cover;
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 576px) {
        width: 100%;
        height: 186px;
      }
    }
    @media (max-width: 1200px) {
      display: block;
    }
  }
  .imageBlock {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
    column-gap: 11px;
    grid-row-start: initial;
    grid-row-end: span 2;
    justify-items: center;
    @media (max-width: 1200px) {
      margin: 20px 0;
    }
    @media (max-width: 576px) {
      grid-template-columns: none;
      grid-template-rows: repeat(2, 1fr);
      grid-row-start: none;
      grid-row-end: none;
      row-gap: 11px;
    }
  }
</style>
