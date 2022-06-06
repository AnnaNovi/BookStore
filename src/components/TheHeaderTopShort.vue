<template>
  <div :class="$style.wrapper">
    <div :class="$style.hamburger">
      <svg :class="$style.icon">
        <use href="../assets/sprite.svg#hamburger"/>
      </svg>
    </div>
    <svg :class="$style.icon">
      <use href="../assets/sprite.svg#loupe"/>
    </svg>
    <img
      :class="$style.logo"
      @click="this.$router.push('/')"
      src="../assets/images/logo.png"
      alt="Логотип компании"
    >
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
      :class="[$style.iconButton, $style.cart]"
      :data-cartSize="cartSize"
      @click="this.$router.push('/cart')"
    >
      <svg :class="$style.icon">
        <use href="../assets/sprite.svg#cart"/>
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters } from 'vuex';

  export default defineComponent({
    name: 'TheHeaderTopShort',
    computed: {
      ...mapGetters([
        'favoritesSize',
        'cartSize'
      ])
    },
  });
</script>

<style lang='scss' module>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: space-between;
    align-items: center;
    column-gap: 26px;
  }
  .icon {
    width: 21px;
    height: 21px;
    fill: #7D6C65;
    transition: 0.3s;
    cursor: pointer;
    position: relative;
    &:hover {
      transition: 0.5s;
      transform: scale(120%);
    }
  }
  .iconButton {
    position: relative;
    background: none;
    border: none;
    &::before {
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
  .cart {
    &::before {
      content: attr(data-cartSize);
    }
  }
  .logo {
    margin: 12px 10px 18px;
    width: 96px;
    height: 52px;
    cursor: pointer;
  }
  .hamburger {
    fill: $BROWN;
    svg {
      width: 30px;
      height: 30px;
    }
  }
</style>