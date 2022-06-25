<template>
  <section>
    <button></button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'CatalogView',
  computed: {
    ...mapGetters([
      'catalogList'
    ])
  },
});
</script>

<style lang="scss" module>
  
</style>
