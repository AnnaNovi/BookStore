<template>
  <div :class="$style.wrapper">
    <h1>Идет загрузка данных...</h1>
    <svg :class="$style.icon">
      <use href="../assets/sprite.svg#loader"/>
    </svg>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'TheLoader',
  });
</script>

<style lang='scss' module>
  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }
  @-moz-keyframes rotation {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(359deg);
    }
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    color: $BROWN;
    position: relative;
    @media (max-width: 992px) {
      height: 300px;
      font-weight: 600;
      font-size: 28px;
    }
    @media (max-width: 450px) {
      height: 200px;
      font-weight: 400;
      font-size: 21px;
    }
  }
  .icon {
    fill: #7D6C65;
    position: absolute;
    width: 400px;
    height: 400px;
    opacity: 0.2;
    animation: rotation 15s infinite linear;
    @media (max-width: 992px) {
      width: 300px;
      height: 300px;
    }
    @media (max-width: 450px) {
      width: 200px;
      height: 200px;
    }
  }
</style>