<template>
  <div
      :class="$style.pagesHistory"
      v-if="activeLink.name !== 'home'"
    >
    <button
      :class="$style.pageHistoryLink"
      @click="this.$router.push('/')"
    >
      Главная
    </button>
    <svg :class="$style.icon" >
      <use href="../assets/sprite.svg#arrow-down"/>
    </svg>
    <button
      :class="$style.pageHistoryLink"
      v-if="!blogPage"
    >
      {{ activeLink?.meta.title }}
    </button>
    <div
      v-if="blogPage"
      :class="{[$style.blogBlock]: blogPage}"
    >
      <button
        :class="$style.pageHistoryLink"
        @click="this.$router.push('/blog')"
      >Блог</button>
      <svg :class="$style.icon" >
        <use href="../assets/sprite.svg#arrow-down"/>
      </svg>
      <button
        :class="[$style.pageHistoryLink, $style.titlePost]"
        ref="titlePost"
      >
      {{ activePost?.title }}
      </button>
    </div>
    <span
      v-show="addDots"
      :class="$style.titlePostDots"
      ref="titlePostDots"
    >...</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters } from 'vuex';
  import { getAppPadding } from '../helpers';

  export default defineComponent({
    name: 'PagesHistory',
    data(){
      return {
        addDots: false,
      }
    },
    computed: {
      ...mapGetters([
        'activePost'
      ]),
      activeLink(){
        return this.$route;
      },
      blogPage(){
        const pageName = this.$route.name;
        return (pageName === 'post');
      },
    },
    methods: {
      checkAddDots(){
        const titleElement = (this.$refs["titlePost"] as HTMLButtonElement);
        const titleDotsElement = (this.$refs["titlePostDots"] as HTMLSpanElement);
        const yEndPosition = Math.ceil(titleElement.getBoundingClientRect().right);
        const windowWidth = window.screen.width;
        const appPadding = getAppPadding(windowWidth);
        console.log(windowWidth);
        const placeForDots = windowWidth - appPadding;

        if(titleElement.getBoundingClientRect().width === 0) {
          setTimeout(() => {
            this.checkAddDots();
          }, 2000);
        }
        if(yEndPosition > placeForDots) {
          titleDotsElement.style.right = `${appPadding}px`;
          if(!this.addDots) {
            this.addDots = true;
          }
        } else {
          if(this.addDots) {
            this.addDots = false;
          }
        }
      },
    },
    watch: {
      activePost(){
        if (this.$route.name === 'post') {
          this.checkAddDots();
          window.addEventListener("resize", this.checkAddDots);
        }
      }
    },
    unmounted() {
      if (this.$route.name === 'post') {
        window.removeEventListener("resize", this.checkAddDots);
      }
    },
  });
</script>

<style lang='scss' module>
  .pagesHistory {
    position: relative;
    display: flex;
    align-items: center;
    margin: 20px 0 35px;
    @media (max-width: 576px) {
      margin: 20px 0;
      height: 17px;
    }
  }
  .pageHistoryLink {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #A7A7A7;
    background: none;
    border: none;
    text-align: start;
    cursor: pointer;
    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
  .icon {
    width: 8px;
    height: 8px;
    fill: #A7A7A7;
    transform: rotate(-90deg);
    margin: 0 15px;
    overflow: visible;
  }
  .blogBlock {
    position: relative;
    display: flex;
    text-align: inherit;
    align-items: center;
    overflow: hidden;
    height: 20px;
    margin-right: 16px;
    @media (max-width: 576px) {
      height: 17px;
    }
  }
  .titlePost {
    white-space: nowrap;
  }
  .titlePostDots {
    position: absolute;
    bottom: 0;
    color: #A7A7A7;
    letter-spacing: 1px;
  }
</style>