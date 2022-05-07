<template>
  <div :class="$style.wrapper">
    <div :class="$style.phoneBlock">
      <svg :class="$style.icon">
        <use href="../assets/sprite.svg#phone"/>
      </svg>
      <a href="tel:+79991400000" :class="$style.phoneNumber">+7 999 140 00 00</a>
    </div>
    <img
      :class="$style.logo"
      @click="this.$router.push('/')"
      src="../assets/images/logo.png"
      alt="Логотип компании"
    >
    <div :class="$style.iconsBlock">
      <svg :class="$style.icon">
        <use href="../assets/sprite.svg#loupe"/>
      </svg>
      <button
        :class="[$style.iconButton, $style.like]"
        :data-favoritesSize="favoritesSize"
        @click="this.$router.push('/favorites')"
      >
        <svg :class="$style.icon">
          <use href="../assets/sprite.svg#like"/>
        </svg>
      </button>
      <button
        :class="$style.iconButton"
        @click="this.$router.push('/cart')"
      >
        <svg :class="$style.icon">
          <use href="../assets/sprite.svg#cart"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters } from 'vuex';

  export default defineComponent({
    name: 'TheHeaderTop',
    computed: {
      ...mapGetters([
        'favoritesSize'
      ])
    },
  });
</script>

<style lang='scss' module>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 12%);
    justify-content: space-between;
    align-items: baseline;
  }
  .icon {
    width: 30px;
    height: 30px;
    fill: #7D6C65;
    transition: 0.3s;
    cursor: pointer;
    position: relative;
    &:hover {
      transition: 0.5s;
      fill: #787878;
    }
  }
  .iconButton {
    position: relative;
    background: none;
    border: none;
    &::before {
      content: '0';
      width: 22px;
      height: 22px;
      background: #887569;
      border: 2px solid #ffffff;
      border-radius: 50%;
      box-sizing: border-box;
      font-weight: normal;
      font-size: 10px;
      text-align: center;
      padding: 2px;
      color: #ffffff;
      position: absolute;
      bottom: 20px;
      left: 17px;
      z-index: 5;
      @media (max-width: 575px) {
        bottom: 15px;
        left: 12px;
      }
    }
  }
  .like {
    &::before {
      content: attr(data-favoritesSize);
    }
  }
  .logo {
    margin: 12px 0 28px;
    width: 155px;
    height: 84px;
  }
  .iconsBlock {
    display: flex;
    justify-content: space-evenly;
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