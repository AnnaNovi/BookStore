<template>
  <section>
    <h1 :class="$style.title">Скидки</h1>
    <TheLoader v-if="loadContent"/>
    <div :class="$style.bookCardsBlock">
      <BookCard
        v-for="(book, index) in discountBooksList"
        :key="index"
        :book="book"
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
      this.getDiscountBooks();
    }
  }
});
</script>

<style lang="scss" module>
  .title {
    @include title;
  }
  .bookCardsBlock {
    @include booksBlock;
  }
</style>
