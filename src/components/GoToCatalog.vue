<template>
  <div :class="$style.goToCatalog">
    <Swiper
      :slides-per-view="1"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide>
        <img src="../assets/images/go-to-catalog-1.jpg" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/images/go-to-catalog-2.jpg" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/images/go-to-catalog-3.jpg" alt="">
      </SwiperSlide>
    </Swiper>
    <div>Checking</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  export default defineComponent({
    name: 'GoToCatalog',
    components: {
      Swiper,
      SwiperSlide
    }
  });
</script>

<style lang='scss' module>
  .goToCatalog {
    display: block;
  }
</style>