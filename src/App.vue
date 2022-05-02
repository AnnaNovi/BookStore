<template>
  <div class="appWrapper">
    <TheHeader />
    <PagesHistory />
    <router-view></router-view>
  </div>
    <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import PagesHistory from './components/PagesHistory.vue'

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    PagesHistory
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
}
body {
  font-family: 'Montserrat', sans-serif;
  max-width: 1440px;
  margin: 0 auto;
}
.appWrapper{
  padding: 0 120px;
}
</style>
