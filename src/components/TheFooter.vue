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
    grid-template-rows: none;
    justify-content: space-between;
    align-items: center;
    background: #F5F5F5;
    text-align: center;
    padding-top: 19px;
    padding-bottom: 33px;
    @include appPadding;
    &.wrapperMarginTop {
      margin-top: 30px;
    }
    @media (max-width: 1200px) {
      grid-template-rows: repeat(3, auto);
      grid-template-columns: none;
      padding-top: 16px;
      padding-bottom: 20px;
      justify-content: center;
    }
  }
  .logo {
    margin: 19px auto 33px;
    width: 155px;
    height: 84px;
    @media (max-width: 768px) {
      margin: 16px auto 22px;
      width: 100px;
      height: 54px;
    }
  }
  .linkList {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
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
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin: 7px 0;
      font-size: 14px;
      line-height: 17px;
    }
  }
  .phoneBlock {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    white-space: nowrap;
    margin-top: 0;
    svg {
      width: 16px;
      height: 16px;
      margin-right: 13px;
      @media (max-width: 768px) {
        width: 9px;
        height: 9px;
        margin-right: 6px;
      }
    }
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 17px;
      margin-top: 20px;
    }
  }
  .phoneNumber {
    color: #606060;
    cursor: pointer;
  }
</style>