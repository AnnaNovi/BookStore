<template>
  <footer :class="$style.wrapper">
    <img
      :class="$style.logo"
      src="../assets/images/logo.png"
      alt="Логотип компании"
    >
    <div :class="$style.linkList">
      <button
        v-for="link in NavigationLinks"
        :class="$style.link"
        :key="link.name"
        @click="changeActiveLink(link.name)"
      > {{ link.title }}</button>
    </div>
    <div :class="$style.phoneBlock">
      <svg :class="$style.icon">
        <use href="../assets/sprite.svg#phone"/>
      </svg>
      <a href="tel:+79991400000" :class="$style.phoneNumber">+7 999 140 00 00</a>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions, mapGetters } from 'vuex';

  export default defineComponent({
    name: 'TheFooter',
    computed: {
      ...mapGetters([
        'NavigationLinks'
      ])
    },
    methods: {
      ...mapActions([
        'changeActiveLink'
      ])
    }
  });
</script>

<style lang='scss' module>
  .wrapper {
    display: grid;
    grid-template-columns: 15% 60% 15%;
    justify-content: space-between;
    align-items: center;
    background: #F5F5F5;
    padding: 0 120px;
  }
  .logo {
    margin: 19px 0 33px;
    width: 155px;
    height: 84px;
  }
  .linkList {
    display: flex;
    justify-content: space-between;
  }
  .link {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 22px;
    color: #4F4F4F;
    margin: 25px 10px;
    background: none;
    border: none;
    transition: 0.4s;
    cursor: pointer;
    &:hover {
      color: #887569;
      transition: 0.7s;
    }
  }
  .phoneBlock {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    white-space: nowrap;
    svg {
      width: 16px;
      height: 16px;
      margin-right: 13px;
    }
  }
  .phoneNumber {
    color: #606060;
    cursor: pointer;
  }
</style>