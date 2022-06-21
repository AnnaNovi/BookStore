<template>
  <section :class="$style.section">
    <div :class="$style.logoName">BOOKVILLE</div>
    <div :class="$style.title">О нашей компании</div>
    <div
      :class="$style.textBlock"
      v-if="!getAboutCompanyTextSwiper"
    >
      <p
        v-for="(aboutCompanyText, index) in aboutCompanyTextArray"
        :key="index"
      >
        {{ aboutCompanyText }}
      </p>
    </div>
    <Swiper
      v-else
      :loop="false"
      :pagination="pagination"
      :modules="modules"
      @swiper="onSwiper"
      class="AboutCompanyShortSwiper"
    >
      <SwiperSlide
          v-for="(aboutCompanyText, index) in aboutCompanyTextArray"
          :key="index"
          :class="$style.slide"
        >
        <p>{{ aboutCompanyText }}</p>
      </SwiperSlide>
    </Swiper>

  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper';

  export default defineComponent({
    name: 'AboutCompanyShort',
    data(){
      return {
        windowWidth: document.documentElement.clientWidth,
        aboutCompanyTextArray: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  incididunt ut laboret.',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  incididunt ut laboret.'
        ],
        swiper: {} as typeof Swiper,
        modules: [Pagination],
        pagination: {
          clickable: true,
          renderBullet: function (index: number, className: string) {
            return '<span class="' + className + ' AboutCompanyShort_bullet">' + "</span>";
          },
        }
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    computed: {
      getAboutCompanyTextSwiper(): boolean{
        return (this.windowWidth <= 768) ? true : false;
      }
    },
    methods: {
      onResize(){
        this.windowWidth = document.documentElement.clientWidth;
      },
      onSwiper(swiper: typeof Swiper){
        this.swiper = swiper;
      },
      changeSlide(direction: string){
        (direction === 'next') ? this.swiper.slideNext() : this.swiper.slidePrev();
      }
    },
    created() {
      window.addEventListener("resize", this.onResize);
    },
    unmounted() {
      window.removeEventListener("resize", this.onResize);
    },
  });
</script>

<style lang='scss' module>
  .section {
    padding-top: 50px;
    padding-bottom: 50px;
    background: #F8F8F8;
    border-radius: 5px;
    @include appPadding;
    @include appPaddingReverse; 
  }
  .logoName {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: $BROWN;
    text-transform: uppercase;
    text-align: start;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  .title {
    @include title;
    margin: 9px 0 35px 0;
    text-align: start;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  .textBlock {
    font-weight: 100;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 83px;
    padding: 0 50px;
  }
  .slide {
    text-align: center;
    font-weight: 100;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }
</style>
<style lang='scss'>
.AboutCompanyShort_bullet {
  &.swiper-pagination-bullet {
    display: inline-block;
    margin: 0 6px;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background: #A5A5A5;
    opacity: 0.6;
    &.swiper-pagination-bullet-active{
      opacity: 1;
    }
  }
}
.AboutCompanyShortSwiper {
  padding-bottom: 25px;
  .swiper-pagination {
    width: 100%;
    bottom: 0px;
  }
}
</style>