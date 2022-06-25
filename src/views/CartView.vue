<template>
  <section>
    <h1 :class="$style.title">Корзина</h1>
    <TheLoader v-if="loadContent && !emptyCart"/>
    <div v-if="!loadContent && !emptyCart">
      <div :class="$style.headRow">
        <p>фото</p>
        <p style="text-align: start;">название</p>
        <p>количество<span :class="$style.priceWithQuantity">/цена</span></p>
        <p :class="$style.price">цена</p>
        <p></p> 
      </div>
      <hr :class="$style.line">
      <template
        v-for="(book, index) in cartBooksList"
        :key="index"
      >
        <BookCartBar :book="book"/>
        <hr :class="$style.line">
      </template>
      <div :class="$style.totalPriceBlock">
        <p><span>Итого: </span>{{ totalCartPrice }}</p>
        <ButtonBrown
          :paddingLR="70"
          @click="$router.push('/order')"
        >Перейти к оформлению</ButtonBrown>
      </div>
    </div>
    <div
      v-if="emptyCart"
      :class="$style.emptyCart"
    >
      <p>Ваша корзина пуста</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import BookCartBar from '../components/BookCartBar.vue';
import TheLoader from '../components/TheLoader.vue';
import ButtonBrown from '../ui/ButtonBrown.vue';

export default defineComponent({
  name: 'CartView',
  data(){
    return {
      loadContent: true
    }
  },
  components: {
    TheLoader,
    BookCartBar,
    ButtonBrown
  },
  computed: {
    ...mapGetters([
      'cartBooksList',
      'cartSize',
      'totalCartPrice'
    ]),
    emptyCart(){
      return !this.cartSize;
    }
  },
  watch: {
    cartBooksList(){
      this.loadContent = false;
    },
  },
  methods: {
    ...mapActions([
      'getCartBooks'
    ])
  },
  mounted(){
    if(!this.cartSize){
      this.loadContent = false;
    } else {
      this.getCartBooks();
    }
  }
});
</script>

<style lang="scss" module>
  .title {
    @include title;
  }
  .line {
    width: 100%;
    border: 0.5px solid #CDCDCD;
    opacity: 0.5;
  }
  .headRow {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #373737;
    text-transform: lowercase;
    display: grid;
    align-items: center;
    grid-template-columns: 15% 40% 15% 25% 5%;
    column-gap: 20px;
    width: calc(100% - 20px * 4);
    padding: 18px 15px;
    margin-top: 14px;
    p {
      text-align: center;
    }
    @media (max-width: 1200px) {
      grid-template-columns: 15% 50% 25% 10%;
      column-gap: 18px;
      width: calc(100% - 18px * 4);
    }
    @media (max-width: 768px) {
      display: none;
      column-gap: 15px;
      width: calc(100% - 15px * 4);
    }
    @media (max-width: 576px) {
      column-gap: 12px;
      width: calc(100% - 12px * 4);
    }
  }
  .totalPriceBlock {
    margin-top: 26px;
    display: grid;
    grid-template-areas: 'A B';
    justify-content: end;
    align-items: center;
    column-gap: 32px;
    row-gap: 10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #373737;
    span {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }
    p:after {
      content: '\20BD';
      margin-left: 3px;
    }
    p {
      grid-area: A;
      text-align: end;
    }
    button {
      grid-area: B;
    }
    @media (max-width: 768px) {
      grid-template-areas: 'A'
                            'B';
    }
  }
  .emptyCart {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    font-weight: 700;
    font-size: 36px;
    color: $BROWN;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    opacity: 0.6;
  }
  .price {
    display: block;
    @media (max-width: 1200px) {
      display: none;
    }
  }
  .priceWithQuantity {
    display: none;
    @media (max-width: 1200px) {
      display: block;
    }
  }
</style>
