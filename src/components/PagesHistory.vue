<template>
  <div :class="$style.pagesHistory" v-if="ActiveLink.name !== 'home'">
    <button
      :class="$style.pageHistoryLink"
      @click="this.$router.push('/')"
    >
      Главная
    </button>
    <svg :class="$style.icon" >
      <use href="../assets/sprite.svg#arrow-down"/>
    </svg>
    <button
      :class="$style.pageHistoryLink"
    >
      {{ ActiveLink.meta.title }}
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PagesHistory',
    computed: {
      ActiveLink(){
        return this.$router.currentRoute.value;
      }
    }
  });
</script>

<style lang='scss' module>
  .pagesHistory {
    display: flex;
    align-items: center;
    margin: 20px 0 35px;
  }
  .pageHistoryLink {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #A7A7A7;
    background: none;
    border: none;
    cursor: pointer;
  }
  .icon {
    width: 8px;
    height: 8px;
    fill: #A7A7A7;
    transform: rotate(-90deg);
    margin: 0 15px;
  }
</style>