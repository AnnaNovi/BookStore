<template>
  <div :class="$style.bookCartBar">
    <div style="text-align:center" :class="$style.imageBlock">
      <img :src="imageSrc" alt="" :class="$style.image">
    </div>
    <div :class="$style.titleBlock">
      <p :class="$style.author">{{ this.book?.author }}</p>
      <div
        :class="$style.title"
        @click="this.$router.push(`/books/${bookId}`)"
      >{{ this.book?.title }}</div>
    </div>
    <div :class="$style.quantityBlock">
        <button
          :class="$style.quantityButton"
          @click="handleQuantityButton(this.book?.key, 'decrease')"
        >-</button>
        <span :class="$style.quantity">{{ this.book?.quantityInCart }}</span>
        <button
          :class="$style.quantityButton"
          @click="handleQuantityButton(this.book?.key, 'increase')"
        >+</button>
    </div>
    <div :class="$style.price">
      <span
        :class="{[$style.lastPrice]: !!discountPrice}"
      >
        {{ countPrice.toLocaleString('de-DE') }}
      </span>
      <span
        v-if="!!discountPrice"
        
      >{{ discountPrice.toLocaleString('de-DE') }}</span>
    </div>
    <div :class="$style.closeBlock">
      <svg
        :class="$style.iconClose"
        @click="removeCartBook(this.book.key)"
      >
        <use href="../assets/sprite.svg#close"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { PropType } from '@vue/runtime-core';
  import { mapActions, mapGetters } from 'vuex';

  interface bookObject {
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
    name: 'BookCartBar',
    props: {
      book: {
        type: Object as PropType<bookObject>,
      },
      imageSize: {
        type: String,
        default: 'M'
      },
    },
    computed: {
      ...mapGetters([
        'cartBooksList',
        'cartList'
      ]),
      imageSrc(): string{
        return `https://covers.openlibrary.org/b/olid/${this.book?.image}-${this.imageSize}.jpg`
      },
      discountPrice(): number | null{
        const discount = this.book?.discount;
        const price = this.book?.price;
        const quantity = this.book?.quantityInCart;
        return (discount && price && quantity) ? quantity * Math.ceil(price * (100 - discount)/100) : null; 
      },
      countPrice(): number | null{
        const price = this.book?.price;
        const quantity = this.book?.quantityInCart;
        return (price && quantity) ? price * quantity : null;
      },
      bookId(): string{
        const bookIdSeparate = (this.book) ? this.book.key.split('/') : [];
        const bookId = bookIdSeparate[bookIdSeparate.length - 1];
        return bookId;
      }
    },
    watch: {
      cartBooksList(){
        localStorage.setItem('cartList', JSON.stringify([...this.cartList]));
      }
    },
    methods: {
      ...mapActions([
        'removeCartBook',
        'changeCartBookQuantity'
      ]),
      handleQuantityButton(bookKey: number, type: string){
        this.changeCartBookQuantity({bookKey: bookKey, type: type});
        localStorage.setItem('cartList', JSON.stringify([...this.cartList]));
      }
    }
  });
</script>

<style lang='scss' module>
  .price {
    grid-area: D;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #343434;
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
    span:after {
      content: '\20BD';
      margin-left: 3px;
    }
    span:first-child {
      margin-right: 15px;
      @media (max-width: 576px) {
        margin-right: 8px;
      }
    }
    span:last-child {
      margin-right: 0px;
    }
  }
  .lastPrice {
    text-decoration: line-through;
  }
  .quantityButton {
    width: 35px;
    height: 35px;
    font-size: 25px;
    color: $BROWN;
    border: 1px solid $BROWN;
    border-radius: 50%;
    background: none;
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 26px;
      height: 26px;
      font-size: 20px;
    }
  }
  .quantity {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #353535;
    width: 38px;
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
    @media (max-width: 768px) {
      width: 30px;
    }
  }
  .title {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #373737;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
  .author {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #A3A3A3;
    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
  .image {
    height: 75px;
    object-fit: cover;
  }
  .iconClose {
    width: 40px;
    height: 40px;
    fill: $BROWN;
    justify-items: flex-end;
    @media (max-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }
  .bookCartBar {
    display: grid;
    grid-template-areas: 'A B C D E';
    grid-template-columns: 15% 40% 15% 25% 5%;
    column-gap: 20px;
    width: calc(100% - 20px * 4);
    padding: 11px 15px;
    @media (max-width: 1200px) {
      grid-template-areas: 'A B C E'
                            'A B D E';
      grid-template-columns: 15% 50% 25% 10%;
      column-gap: 18px;
      width: calc(100% - 18px * 3);
    }
    @media (max-width: 768px) {
      padding: 7px 6px;
      column-gap: 15px;
      width: calc(100% - 15px * 3);
    }
    @media (max-width: 576px) {
      grid-template-areas: 'A B B E'
                            'A C D E';
      grid-template-columns: 20% 35% 35% 10%;
      column-gap: 12px;
      width: calc(100% - 12px * 3);
    }
  }
  .imageBlock {
    grid-area: A;
  }
  .titleBlock {
    grid-area: B;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .quantityBlock {
    grid-area: C;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 576px) {
      justify-content: start;
    }
  }
  .closeBlock {
    grid-area: E;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
      cursor: pointer;
    }
  }
</style>