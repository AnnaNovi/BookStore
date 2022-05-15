<template>
  <div :class="$style.wrapper">
    <div
      :class="$style.featureBlock"
      v-for="(feature, index) in features"
      :key="index"
    >
      <span :class="$style.featureId">{{ feature.id }}</span>
      {{ feature.value }}
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'FeaturesBar',
    data(){
      return{
        features: [
          {
            id: 1,
            value: 'Консультация книжного сомелье'
          },
          {
            id: 2,
            value: 'Доставка 1-2 дня'
          },
          {
            id: 3,
            value: 'Уникальные подборки книг'
          },
          {
            id: 4,
            value: 'Эстетическая упаковка'
          },
        ]
      }
    }
  });
</script>

<style lang='scss' module>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    column-gap: 20px;
  }
  .featureBlock {
    display: grid;
    grid-template-columns: 60px auto;
    column-gap: 20px;
    align-items: center;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: #373737;
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
  .featureId {
    font-weight: 300;
    font-size: 30px;
    line-height: 37px;
    color: #887569;
    width: 58px;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 5;
    @media (max-width: 575px) {
      font-size: 20px;
      line-height: 24px;
      width: 44px;
      height: 44px;
    }
    &::after {
      position: absolute;
      content: "";
      width: 57px;
      height: 57px;
      background: #f4f0eb;
      bottom: 6px;
      left: 6px;
      border-radius: 50%;
      z-index: -1;
      @media (max-width: 575px) {
        bottom: 5px;
        left: 5px;
        width: 43px;
        height: 43px;
      }
    }
    &::before {
      position: absolute;
      content: "";
      width: 58px;
      height: 58px;
      border: 0.5px solid #887569;
      bottom: 0px;
      left: 0px;
      border-radius: 50%;
      z-index: 2;
      @media (max-width: 575px) {
        width: 44px;
        height: 44px;
      }
    }
  }
</style>