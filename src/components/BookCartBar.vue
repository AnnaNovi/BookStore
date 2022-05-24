<template>
  <div :class="$style.bookCartBar">
    <div style="text-align:center">
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #343434;
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 17px;
    }
    span:after {
      content: '\20BD';
      margin-left: 3px;
    }
    span:first-child {
      margin-right: 15px;
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
  }
  .quantity {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #353535;
    width: 38px;
  }
  .title {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #373737;
  }
  .author {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #A3A3A3;
  }
  .image {
    height: 75px;
    object-fit: cover;
  }
  .iconClose {
    width: 40px;
    height: 40px;
    fill: $BROWN;
    justify-items: end;
  }
  .bookCartBar {
    display: grid;
    grid-template-columns: 15% 40% 25% 10% 10%;
    padding: 11px 15px;
  }
  .titleBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .quantityBlock {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .closeBlock {
    display: flex;
    justify-content: end;
    align-items: center;
    svg {
      cursor: pointer;
    }
  }
</style>