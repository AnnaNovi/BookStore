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
      <img :class="$style.leftImage" src="../assets/images/aboutUs-1.jpg">
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
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #373737;
  }
  .wrapper {
    display: flex;
    img {
      width: 446px;
      height: 446px;
      margin-left: 32px;
      margin-bottom: 18px;
    }
    div {
      margin-top: 25px;
    }
  }
  .wrapper p:first-of-type::first-letter{
    font-size: 144px;
    line-height: 90px;
    padding-right: 43px;
    float: left;
    color: black;
  }
  .leftImage {
    float: right;
  }
  .section p {
    margin: 22px 0;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    color: #525252;
  }
  .centerParagraph {
    text-align: center;
    font-size: 15.9px !important;
  }
  .imageBlock {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 11px;
    margin-bottom: 27px;
    img {
      width: 100%;
    }
  }
</style>
