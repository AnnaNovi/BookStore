<template>
  <div :class="$style.wrapper">
    <FeauterBlock
      v-for="(feature, index) in features"
      :key="index"
      :feature="feature"
    ></FeauterBlock>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import FeauterBlock from './FeauterBlock.vue';

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
    },
    components: {
      FeauterBlock
    }
  });
</script>

<style lang='scss' module>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    column-gap: 20px;
    row-gap: 0px;
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 14px;
    }
    @media (max-width: 450px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>