<template>
  <div class="appWrapper">
    <div>
      <TheHeader class="paddingWrapper"/>
      <PagesHistory class="paddingWrapper"/>
      <router-view class="paddingWrapper"></router-view>
    </div>
    <div>
      <TheSubscription />
      <TheFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import PagesHistory from './components/PagesHistory.vue';
import TheSubscription from './components/TheSubscription.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    PagesHistory,
    TheSubscription
  },
  methods: {
    ...mapActions([
      'addFavoritesBookFromLocalStorage',
      'addCartBookFromLocalStorage',
      'addCartBookQuantityFromLocalStorage'
    ])
  },
  mounted(){
    (localStorage['favoritesList']) ? this.addFavoritesBookFromLocalStorage() : undefined;
    (localStorage['cartList']) ? this.addCartBookFromLocalStorage() : undefined;
  }
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
}
body {
  max-width: 1440px;
  margin: 0 auto;
}
.appWrapper {
  height: 100vh;
  width: 100vw;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.paddingWrapper {
  @include appPadding;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  align-items: stretch;
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: .3s opacity;
  transform: translate3d(0,0,0);
  z-index: 10;
}
</style>
