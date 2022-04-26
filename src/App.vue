<template>
  <div class="appWrapper">
    <TheHeader />
    <router-view></router-view>
  </div>
    <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
});
</script>

<style lang="scss">
@font-face {
  font-family: "Montserrat", sans-serif;
  src: url("./assets/fonts/Montserrat-Regular.eot");
  src: url("./assets/fonts/Montserrat-Regular.woff") format("woff"),
    url("./assets/fonts/Montserrat-Regular.ttf") format("truetype"),
    url("./assets/fonts/Montserrat-Regular.otf") format("opentype"),
    url("./assets/fonts/Montserrat-Regular.svg") format("svg");
  font-weight: normal;
  font-style: normal;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
}
body {
  font-family: "Montserrat", sans-serif;
  max-width: 1440px;
  margin: 0 auto;
}
.appWrapper{
  padding: 0 120px;
}
</style>
