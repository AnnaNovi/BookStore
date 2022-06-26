<template>
  <section :class="$style.section">
    <button
      v-for="(item, index) of catalogList"
      :key="index"
      :class="$style.button"
      @click="handleButton(item.commonQuery)"
      >{{ item.title }}</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';

interface catalogSubcategoriesType {
  title: string;
  commonQuery: string;
  subcategories: {subtitle: string; query: string;}[];
}

export default defineComponent({
  name: 'CatalogView',
  computed: {
    ...mapGetters([
      'catalogList'
    ])
  },
  methods: {
    ...mapActions([
      'setActiveCategory'
    ]),
    handleButton(path: string){
      this.setActiveCategory(path);
      this.$router.push(`/catalog/${path}`);
    }
  }
});
</script>

<style lang="scss" module>
  .section {
    display: grid;
    grid-auto-rows: auto;
    row-gap: 20px;
  }
  .button {
    background: rgba($color: $BROWN, $alpha: 0.2);
    color: $BROWN;
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    border-color: $BROWN;
    border-width: 2px;
    border-style: outset;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.1em;
    transition: 0.8s;
    cursor: pointer;
    &:hover {
      background: none;
      transition: 0.4s;
    }
  }
</style>
