<template>
  <section>
    <h1 :class="$style.title">{{ activeCategory.title }}</h1>
    <TheLoader v-if="loadContent"/>
    <div :class="$style.bookCardsBlock">
      <BookCard
        v-for="(book, index) in catalogBooksList"
        :key="index"
        :book="book"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import BookCard from '../components/BookCard.vue';
import TheLoader from '../components/TheLoader.vue';

export default defineComponent({
  name: 'CatalogSingleView',
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
      'activeCategory',
      'catalogBooksList'
    ])
  },
  methods: {
    ...mapActions([
      'getCatalogBooks',
      'setActiveCategory'
    ])
  },
  watch: {
    catalogBooksList(){
      this.loadContent = false;
    }
  },
  mounted() {
    const chosenCategory = this.$route.params.category;
    this.setActiveCategory(chosenCategory);
    this.getCatalogBooks(chosenCategory);
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
