<template>
  <section :class="$style.section">
    <img :class="$style.image" src="../assets/images/about-our-events-1.jpg" alt="">
    <div :class="$style.contentWrapper">
      <div :class="$style.title">О наших мероприятиях</div>
      <p :class="$style.textBlock">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  incididunt ut laboret.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  incididunt ut laboret.
      </p>
    </div>
    <button
      :class="$style.button"
      @click="this.$router.push('/events')"
    >
      ПОДРОБНЕЕ
      <svg :class="$style.icon">
        <use href="../assets/sprite.svg#arrow-right"/>
      </svg>
    </button>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AboutEventsShort',
  });
</script>

<style lang='scss' module>
  .section {
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 5px;
    display: grid;
    grid-template-areas: 'A B'
                          'A C';
    grid-template-columns: 525px auto;
    column-gap: 89px;
    row-gap: 0px;
    text-align: start;
    justify-items: start;
    @include appPadding;
    @include appPaddingReverse; 
    @media (max-width: 1200px) {
      grid-template-areas:  'B'
                            'A'
                            'C';
      grid-template-columns: 100%;
      column-gap: 0px;
      row-gap: 20px;
      text-align: center;
      justify-items: center;
    }
  }
  .title {
    @include title;
    margin-bottom: 0px;
  }
  .textBlock {
    font-weight: 100;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin: 16px 0;
  }
  .button {
    display: flex;
    align-items: center;
    grid-area: C;
    text-transform: uppercase;
    padding: 21px 43px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: $BROWN;
    border: 1px solid #887569;
    border-radius: 8px;
    background: none;
    width: fit-content;
    cursor: pointer;
    svg {
      fill: $BROWN;
      width: 14px;
      height: 14px;
      margin-left: 15px;
    }
    @media (max-width: 768px) {
      padding: 13px 31px;
      font-size: 12px;
      line-height: 15px;
    }
  }
  .image {
    grid-area: A;
    width: 100%;
    max-width: 525px;
    height: 325px;
    object-fit: cover;
    @media (max-width: 768px) {
      height: 270px;
    }
    @media (max-width: 450px) {
      height: 191px;
    }
  }
  .contentWrapper {
    grid-area: B;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>