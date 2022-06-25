<template>
  <div :class="$style.wrapper">
    <div :class="$style.hamburger">
      <svg :class="$style.icon">
        <use href="../assets/sprite.svg#hamburger"/>
      </svg>
    </div>
    <div :class="$style.linkList">
      <button :class="[$style.link, $style.active]">
        <span :class="$style.burger"></span>
        Подразделы
      </button>
      <button
        v-for="link in navigationLinks"
        :key="link.name"
        :class="{
          [$style.link]: true,
          [$style.active]: checkActiveLink(link.name)
        }"
        @click="this.$router.push(link.path)"
      > {{ link.meta.title }}</button>
    </div>
    <div :class="$style.socials">
      <svg :class="$style.icon">
        <use href="../assets/sprite.svg#facebook"/>
      </svg>
      <svg :class="$style.icon">
        <use href="../assets/sprite.svg#instagram"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { RouteRecordRaw } from 'vue-router'

  export default defineComponent({
    name: 'TheHeaderNavigation',
    data(){
      return {
        navigationLinks: [] as RouteRecordRaw[],
      }
    },
    methods: {
      checkActiveLink(linkName: string){
        return (linkName === this.$router.currentRoute.value.name) ? true : false;
      }
    },
    mounted(){
      const routerArray = this.$router.options.routes.filter(link => link.meta?.isNavigation);
      this.navigationLinks = [...routerArray];
    }
  });
</script>

<style lang='scss' module>
  .wrapper {
    display: grid;
    grid-template-columns: 85% 10%;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;
    @media (max-width: 576px) {
      display: none;
    }
  }
  .linkList {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 36px;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
    @media (max-width: 1440px) {
      column-gap: 18px;
    }
    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .hamburger {
    fill: $BROWN;
    display: none;
    svg {
      width: 30px;
      height: 30px;
    }
    @media (max-width: 768px) {
      display: block;
    }
  }
  .burger {
    margin-right: 18px;
    cursor: pointer;
    display: block;
    width: 19px;
    height: 2px;
    background: #887569;
    position: relative;
    &::before,
    &::after {
      content: "";
      width: 25px;
      height: 2px;
      background: #887569;
    }
    &::before {
      position: absolute;
      left: 0;
      top: -7px;
    }
    &::after {
      position: absolute;
      left: 0;
      bottom: -7px;
    }
  }
  .link {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 22px;
    color: #4F4F4F;
    background: none;
    border: none;
    transition: 0.4s;
    white-space: nowrap;
    cursor: pointer;
    &.active {
      color: $BROWN;
    }
    &:hover {
      color: $BROWN;
      transition: 0.7s;
    }
  }
  .socials{
    display: flex;
    justify-content: space-around;
  }
  .icon {
    width: 19px;
    height: 19px;
    fill: #7D6C65;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      transition: 0.5s;
      fill: #787878;
    }
  }
</style>