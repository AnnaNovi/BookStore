<template>
  <section>
    <h1 :class="$style.title">Избранное</h1>
    <TheLoader v-if="loadContent && !emptyFavorite"/>
    <div :class="$style.bookCardsBlock">
      <BookCard
        v-for="(book, index) in favoriteBooksList"
        :key="index"
        :book="book"
      />
    </div>
    <div
      v-if="emptyFavorite"
      :class="$style.emptyFavorite"
    >
      <p>В избранном пока ничего нет</p>
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
      'favoritesSize'
    ]),
    emptyFavorite(){
      return !this.favoritesSize;
    }
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
  .emptyFavorite {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    font-weight: 700;
    font-size: 36px;
    color: $BROWN;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    opacity: 0.6;
  }
</style>
