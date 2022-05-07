<template>
  <section>
    <h1 :class="$style.title">Скидки</h1>
    <TheLoader v-if="loadContent"/>
    <div :class="$style.bookCardsBlock">
      <BookCard
        v-for="(book, index) in discountBooksList"
        :key="index"
        :book="book"
        :discount="true"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import BookCard from '../components/BookCard.vue';
import TheLoader from '../components/TheLoader.vue'

export default defineComponent({
  name: 'DiscountsView',
  data(){
    return {
      loadContent: true
    }
  },
  components: {
    BookCard,
    TheLoader
  },
  computed: {
    ...mapGetters([
      'discountBooksList'
    ])
  },
  watch: {
    discountBooksList(){
      this.loadContent = false;
    }
  },
  methods: {
    ...mapActions([
      'getDiscountBooks'
    ])
  },
  mounted(){
    if(this.discountBooksList.length) {
      this.loadContent = false;
    } else {
      this.getDiscountBooks({limit: 16, offset: 0});
    }
  }
});
</script>

<style lang="scss" module>
  .title {
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #373737;
  }
  .bookCardsBlock {
    margin: 53px 0 38px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 28px;
    row-gap: 42px;
  }
</style>
