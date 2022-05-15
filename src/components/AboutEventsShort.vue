<template>
  <section :class="$style.section">
    <img :class="$style.image" src="../assets/images/about-our-events-1.jpg" alt="">
    <div :class="$style.contentWrapper">
      <div :class="$style.title">О наших мероприятиях</div>
      <p :class="$style.textBlock">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  incididunt ut laboret.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  incididunt ut laboret.
      </p>
      <button
          :class="$style.button"
          @click="this.$router.push('/events')"
        >ПОДРОБНЕЕ</button>
    </div>
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
    padding: 50px 120px;
    margin: 0 -120px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 525px auto;
    column-gap: 89px;
  }
  .title {
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #373737;
  }
  .textBlock {
    font-weight: 100;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }
  .button {
    text-transform: uppercase;
    padding: 21px 43px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #887569;
    border: 1px solid #887569;
    border-radius: 8px;
    background: none;
    width: fit-content;
    cursor: pointer;
  }
  .image {
    width: 525px;
    height: 325px;
    object-fit: cover;
  }
  .contentWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>