<template>
  <div class="appWrapper">
    <div class="headerWrapper">
      <TheHeader />
      <PagesHistory />
      <router-view></router-view>
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
      'addFavoritesBookFromLocalStorage'
    ])
  },
  mounted(){
    if(localStorage['_favoritesList']) {
      this.addFavoritesBookFromLocalStorage();
    }
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
.headerWrapper{
  padding: 0 120px;
}
.appWrapper {
  height: 100vh;
  display: grid;
  align-content: space-between;
}
</style>
