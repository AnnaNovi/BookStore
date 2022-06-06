<template>
  <section>
    <h1 :class="$style.title">Избранное</h1>
    <TheLoader v-if="loadContent"/>
    <div :class="$style.bookCardsBlock">
      <BookCard
        v-for="(book, index) in favoriteBooksList"
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
  name: 'FavoritesView',
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
      'favoriteBooksList',
    ])
  },
  watch: {
    favoriteBooksList(){
      this.loadContent = false;
    }
  },
  methods: {
    ...mapActions([
      'getFavoriteBooks'
    ])
  },
  mounted(){
    this.getFavoriteBooks();
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
