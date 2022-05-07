<template>
  <div>
    <GoToCatalog />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GoToCatalog from '../components/GoToCatalog.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    GoToCatalog
  }
});
</script>
