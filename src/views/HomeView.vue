<template>
  <div>
    <GoToCatalog />
    <FeaturesBar :class="$style.featureBar"/>
    <AboutCompanyShort />
    <BooksSwiper title="Популярные товары" type="popular"/>
    <BooksSwiper title="Скидки" type="discount"/>
    <BooksSwiper title="BOOKVILLE рекомендует" type="recommends"/>
    <AboutEventsShort />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GoToCatalog from '../components/GoToCatalog.vue';
import FeaturesBar from '../components/FeautersBar.vue';
import BooksSwiper from '../components/BooksSwiper.vue';
import AboutCompanyShort from '../components/AboutCompanyShort.vue';
import AboutEventsShort from '../components/AboutEventsShort.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    GoToCatalog,
    FeaturesBar,
    BooksSwiper,
    AboutCompanyShort,
    AboutEventsShort
  },
});
</script>

<style lang="scss" module>
  .featureBar {
    margin: 40px;
    @media (max-width: 768px) {
      margin: 20px;
    }
  }
</style>
