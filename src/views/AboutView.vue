<template>
  <section :class="$style.section">
    <h1 :class="$style.title">О нас</h1>
    <div :class="$style.wrapper">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipisicing im veniam Lorem ipsum dolor sit amet, consectetur adipisicing 
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
        </p>
      </div>
      <img :class="$style.rightImage" src="../assets/images/aboutUs-1.jpg">
    </div>
    <p :class="$style.centerParagraph">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam 
    </p>
    <div :class="$style.imageBlock">
      <img src="../assets/images/aboutUs-2.jpg">
      <img src="../assets/images/aboutUs-2.jpg">
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView',
});
</script>

<style lang="scss" module>
  .title {
    @include title;
  }
  .wrapper {
    display: grid;
    grid-template-columns: auto 446px;
    grid-template-rows: none;
    column-gap: 32px;
    row-gap: none;
    align-items: center;
    justify-items: center;
    div {
      margin-top: 25px;
      @media (max-width: 576px) {
        margin-top: 0;
      }
    }
    @media (max-width: 1200px) {
      grid-template-rows: auto 446px;
      grid-template-columns: none;
      row-gap: 13px;
      column-gap: none;
    }
    @media (max-width: 992px) {
      grid-template-rows: auto 298px;
    }
  }
  .wrapper p:first-of-type::first-letter{
    font-size: 144px;
    line-height: 90px;
    padding-right: 43px;
    float: left;
    color: black;
    @media (max-width: 576px) {
      font-size: 64px;
      line-height: 58px;
      padding-right: 18px;
    }
  }
  .rightImage {
    width: 446px;
    height: 446px;
    object-fit: cover;
    margin-bottom: 18px;
    @media (max-width: 992px) {
      width: 298px;
      height: 298px;
    }
  }
  .section p {
    @include paragraph;
  }
  .centerParagraph {
    text-align: center;
    font-size: 15.9px !important;
    @media (max-width: 576px) {
      font-size: 13.9px !important;
    }
  }
  .imageBlock {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
    column-gap: 11px;
    row-gap: none;
    img {
      width: 100%;
      object-fit: cover;
    }
    @media (max-width: 992px) {
      grid-template-columns: none;
      grid-template-rows: repeat(2, 1fr);
      column-gap: none;
      row-gap: 13px;
      img {
        width: 60%;
        min-width: 298px;
      }
    }
  }
</style>
