<template>
  <div class="appWrapper">
    <div>
      <TheHeader style="padding: 0 120px;"/>
      <PagesHistory style="padding: 0 120px;"/>
      <router-view style="padding: 0 120px;"></router-view>
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
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  align-items: stretch;
}
</style>
