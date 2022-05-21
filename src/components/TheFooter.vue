<template>
  <footer :class="[$style.wrapper, {[$style.wrapperMarginTop]: !addMarginTop}]">
    <img
      :class="$style.logo"
      src="../assets/images/logo.png"
      alt="Логотип компании"
    >
    <div :class="$style.linkList">
      <button
        v-for="link in navigationLinks"
        :class="$style.link"
        :key="link.name"
        @click="this.$router.push(link.path)"
      > {{ link.meta.title }}</button>
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
  import { RouteRecordRaw } from 'vue-router';

  export default defineComponent({
    name: 'TheFooter',
    data(){
      return {
        navigationLinks: [] as RouteRecordRaw[],
      }
    },
    mounted(){
      const routerArray = this.$router.options.routes.filter(link => link.meta?.title && !['/', '/favorites', '/cart'].includes(link.path));
      this.navigationLinks = [...routerArray];
    },
    computed:{
      addMarginTop(){
        return this.$router.currentRoute.value.meta.subscription;
      }
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
    &.wrapperMarginTop {
      margin-top: 30px;
    }
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
      color: $BROWN;
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