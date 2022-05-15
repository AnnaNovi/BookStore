<template>
  <div :class="$style.wrapper">
    <Swiper
      :slides-per-view="1"
      :initial-slide="1"
      :loop="true"
      :class="$style.goToCatalogSwiper"
      @swiper="onSwiper"
    >
      <SwiperSlide
        v-for="(imgSrc, index) in imageForSwiper"
        :key="index"
        :class="$style.slide"
      >
        <img :src="imgSrc.url" alt="Перейти в каталог">
      </SwiperSlide>
    </Swiper>
    <button
      :class="$style.button"
      @click="this.$router.push('/catalog')"
    >Перейти в каталог</button>
    <button
      :class="[$style.buttonForSwiper, $style.buttonForSwiperPrev]"
      @click="changeSlide('prev')"
    >
      <img src="../assets/images/slider-arrow-prev.png" />
    </button>
    <button
      :class="[$style.buttonForSwiper, $style.buttonForSwiperNext]"
      @click="changeSlide('next')"
    >
      <img src="../assets/images/slider-arrow-next.png" />
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  export default defineComponent({
    name: 'GoToCatalog',
    data(){
      return {
        imageForSwiper: [
          { url: require('@/assets/images/go-to-catalog-2.jpg') },
          { url: require('@/assets/images/go-to-catalog-1.jpg') },
          { url: require('@/assets/images/go-to-catalog-3.jpg') },
        ],
        swiper: {} as typeof Swiper
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    methods: {
      onSwiper(swiper: typeof Swiper){
        this.swiper = swiper;
      },
      changeSlide(direction: string){
        (direction === 'next') ? this.swiper.slideNext() : this.swiper.slidePrev();
      }
    }
  });
</script>

<style lang='scss' module>
  .wrapper {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .goToCatalogSwiper{
    width: 100%;
    height: 100%;

  }
  .slide {
    height: 560px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .button {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #887569;
    padding: 23px 80px;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 8px;
    position: absolute;
    bottom: 70px;
    z-index: 5;
    cursor: pointer;
  }
  .buttonForSwiper {
    position: absolute;
    z-index: 5;
    background: none;
    border: none;
    transform: translate(0%, -50%);
    top: 50%;
  }
  .buttonForSwiperPrev {
    left: -30px;
  }
  .buttonForSwiperNext {
    right: -30px;
  }
</style>