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
    @media (max-width: 576px) {
      margin-top: 20px;
      padding: 0 20px;
    }
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
    @media (max-width: 1200px) {
      height: 470px;
    }
    @media (max-width: 992px) {
      height: 400px;
    }
    @media (max-width: 768px) {
      height: 340px;
    }
    @media (max-width: 576px) {
      height: 249px;
    }
    @media (max-width: 450px) {
      height: 178px;
    }
  }
  .button {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: $BROWN;
    padding: 23px 80px;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 8px;
    position: absolute;
    bottom: 70px;
    z-index: 5;
    cursor: pointer;
    @media (max-width: 992px) {
      bottom: 50px;
    }
    @media (max-width: 768px) {
      bottom: 35px;
      padding: 18px 50px;
    }
    @media (max-width: 576px) {
      bottom: 20px;
      padding: 18px 40px;
      font-size: 12px;
      line-height: 16px;
    }
  }
  .buttonForSwiper {
    position: absolute;
    z-index: 5;
    background: none;
    border: none;
    transform: translate(0%, -50%);
    top: 50%;
    cursor: pointer;
  }
  .buttonForSwiperPrev {
    left: -30px;
    @media (max-width: 576px) {
      left: -10px;
    }
  }
  .buttonForSwiperNext {
    right: -30px;
    @media (max-width: 576px) {
      right: -10px;
    }
  }
</style>