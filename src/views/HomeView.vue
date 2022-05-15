<template>
  <div>
    <GoToCatalog />
    <FeaturesBar style="margin: 40px"/>
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
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'HomeView',
  components: {
    GoToCatalog,
    FeaturesBar,
    BooksSwiper,
    AboutCompanyShort,
    AboutEventsShort
  },
  methods: {
    ...mapActions([
      'getAllSwiperBooks'
    ])
  },
  mounted(){
    this.getAllSwiperBooks();
  }
});
</script>
