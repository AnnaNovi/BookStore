<template>
  <div :class="$style.featureBlock">
    <span :class="$style.featureId">{{ feature.id }}</span>
    {{ feature.value }}
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  interface Feature {
    id: number,
    value: string
  }

  export default defineComponent({
    name: 'FeauterBlock',
    props: {
      feature: {
        type: Object as PropType<Feature>
      }
    }
  });
</script>

<style lang='scss' module>
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
    color: $BROWN;
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