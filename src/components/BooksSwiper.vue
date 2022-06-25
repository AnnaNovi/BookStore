<template>
  <section :class="$style.section">
    <h1 :class="$style.title">{{ this.title }}</h1>
    <div :class="$style.swiperBlock">
      <TheLoader v-if="loadContent"/>
      <Swiper
        :loop="true"
        :breakpoints="this.breakpoints"
        :class="$style.swiperBar"
        @swiper="onSwiper"
      >
        <SwiperSlide
          v-for="(book, index) in currentBooksSwiper"
          :key="index"
          :class="$style.slide"
        >
          <BookCard :book="book"/>
        </SwiperSlide>
      </Swiper>
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
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters, mapActions } from 'vuex';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import BookCard from './BookCard.vue'
  import 'swiper/css';
  import TheLoader from '../components/TheLoader.vue';

  export default defineComponent({
    name: 'BooksSwiper',
    data(){
      return {
        swiper: {} as typeof Swiper,
        loadContent: true,
        breakpoints: {
          1440: {
            slidesPerView: 4
          },
          576: {
            slidesPerView: 3
          },
          0: {
            slidesPerView: 2
          }
        }
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      BookCard,
      TheLoader
    },
    props: {
      title: {
        type: String
      },
      type: {
        type: String
      }
    },
    computed: {
      ...mapGetters([
        'discountBooksSwiper',
        'popularBooksSwiper',
        'recommendsBooksSwiper',
        'similarBooksSwiper',
        'activeBook'
      ]),
      currentBooksSwiper(){
        return (this.type === 'discount') ? this.discountBooksSwiper : 
        (this.type === 'popular') ? this.popularBooksSwiper : 
        (this.type === 'recommends') ? this.recommendsBooksSwiper : 
        this.similarBooksSwiper;
      },
    },
    watch: {
      currentBooksSwiper(){
        this.loadContent = false;
      }
    },
    methods: {
      ...mapActions([
        'getSimilarBooks',
        'getAllSwiperBooks'
      ]),
      onSwiper(swiper: typeof Swiper){
        this.swiper = swiper;
      },
      changeSlide(direction: string){
        (direction === 'next') ? this.swiper.slideNext() : this.swiper.slidePrev();
      },
    },
    mounted(){
      if (this.type === 'similar') {
        this.getSimilarBooks(this.activeBook.subject);
      } else {
        this.getAllSwiperBooks()
      }
    },
  });
</script>

<style lang='scss' module>
  .section {
    margin: 62px 0;
    @media (max-width: 992px) {
      margin: 38px 0;
    }
    @media (max-width: 576px) {
      margin: 24px 0;
    }
  }
  .title {
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #373737;
    text-align: center;
    margin-bottom: 37px;
    @media (max-width: 992px) {
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 24px;
    }
    @media (max-width: 576px) {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 13px;
    }
  }
  .swiperBlock {
    position: relative;
  }
  .swiperBar {
    padding-top: 20px;
  }
  .buttonForSwiper {
    position: absolute;
    z-index: 5;
    background: none;
    border: none;
    transform: translate(0%, -50%);
    top: 50%;
    border: 1px solid #897668;
    border-radius: 50%;
    width: 33px;
    height: 33px;
    display: grid;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 14px;
      height: 14px;
    }
  }
  .buttonForSwiperPrev {
    left: -18px;
  }
  .buttonForSwiperNext {
    right: -18px;
  }
  .slide {
    display: flex;
    justify-content: center;
    height: auto;
  }
</style>