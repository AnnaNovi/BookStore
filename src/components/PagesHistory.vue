<template>
  <div :class="$style.pagesHistory" v-if="activeLink.name !== 'home'">
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
      v-if="!blogPage"
    >
      {{ activeLink?.meta.title }}
    </button>
    <div v-if="blogPage">
      <button
        :class="$style.pageHistoryLink"
        @click="this.$router.push('/blog')"
      >Блог</button>
      <svg :class="$style.icon" >
        <use href="../assets/sprite.svg#arrow-down"/>
      </svg>
      <button :class="$style.pageHistoryLink">{{ activePost?.title }}</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters } from 'vuex';

  export default defineComponent({
    name: 'PagesHistory',
    computed: {
      ...mapGetters([
        'activePost'
      ]),
      activeLink(){
        return this.$router.currentRoute.value;
      },
      blogPage(){
        const pageName = this.$router.currentRoute.value?.name;
        return (pageName === 'post');
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