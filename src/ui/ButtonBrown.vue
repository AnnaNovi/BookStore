<template>
  <button
    :class="$style.buttonBrown"
    :style="padding"
  >
    <slot></slot>
  </button>
</template>  

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonBrown',
  props: {
    paddingLR: Number
  },
  computed: {
    padding(){
      return `padding: 20px ${this.paddingLR}px;`
    }
  }
})
</script>

<style lang="scss" module>
  .buttonBrown {
    background: $BROWN;
    border: 1px solid $BROWN;
    border-radius: 8px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    text-transform: uppercase;
    transition: 0.8s;
    cursor: pointer;
    &:hover {
      background: none;
      transition: 1s;
      color: $BROWN;
    }
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
</style>