<template>
  <div :class="$style.pagesHistory" v-if="ActiveLink.name !== 'home'">
    <button
      :class="$style.pageHistoryLink"
      @click="changePage('home', '/')"
    >
      Главная
    </button>
    <svg :class="$style.icon" >
      <use href="../assets/sprite.svg#arrow-down"/>
    </svg>
    <button
      :class="$style.pageHistoryLink"
      @click="changePage(ActiveLink.name, ActiveLink.path)"
    >
      {{ ActiveLink.title }}
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions, mapGetters } from 'vuex';

  export default defineComponent({
    name: 'PagesHistory',
    computed: {
      ...mapGetters([
        'ActiveLink'
      ])
    },
    methods: {
      ...mapActions([
        'changeActiveLink'
      ]),
      changePage(linkName: string, linkPath: string){
        this.changeActiveLink(linkName);
        this.$router.push(linkPath);
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