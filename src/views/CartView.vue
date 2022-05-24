<template>
  <section>
    <h1 :class="$style.title">Корзина</h1>
    <TheLoader v-if="loadContent && !emptyCart"/>
    <div v-if="!loadContent && !emptyCart">
      <div :class="$style.headRow">
        <p style="text-align:center;">фото</p>
        <p>название</p>
        <p style="text-align:center;">количество</p>
        <p style="text-align:center;">цена</p>
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
        <p><span>Итого: </span>{{ totalPrice }}</p>
        <ButtonBrown
          :paddingLR="70"
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

interface booksType {
  author: string,
  authorId: string,
  title: string,
  price: number,
  image: string,
  key: string,
  discount: number | null,
  quantityInCart: number
}

export default defineComponent({
  name: 'FavoritesView',
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
      'cartSize'
    ]),
    totalPrice(){
      let totalPrice = 0;
      this.cartBooksList.forEach((book:booksType) => {
        totalPrice += (book.discount) ? Math.ceil(book.price * book.quantityInCart * (100 - book.discount)/100) : book.price * book.quantityInCart;
      });
      return totalPrice.toLocaleString('de-DE');
    },
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
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #373737;
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
    grid-template-columns: 15% 40% 25% 10% 10%;
    padding: 18px 15px;
    margin-top: 14px;
  }
  .totalPriceBlock {
    margin-top: 26px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: end;
    align-items: center;
    column-gap: 32px;
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
</style>
