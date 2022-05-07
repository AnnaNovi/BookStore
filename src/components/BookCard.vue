<template>
  <div :class="$style.bookCard">
    <div :class="$style.image">
      <img :src="imageSrc" :alt="this.book.title">
    </div>
    <div :class="$style.author">{{ this.book.author }}</div>
    <div :class="$style.title">{{ this.book.title }}</div>
    <div :class="$style.price">{{ this.book.price }}</div>
    <button
      :class="[$style.like, {[$style.active]: this.like}]"
      @click="handleLikeButton(this.book.key)"
    >
      <svg>
        <use href="../assets/sprite.svg#like"/>
      </svg>
    </button>
    <button
      :class="$style.cart"
    >
      <svg>
        <use href="../assets/sprite.svg#cart"/>
      </svg>
    </button>
    <div
      :class="$style.sale"
      v-if="discount"
    >{{ this.discountValue }}%</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import { PropType } from '@vue/runtime-core';

  interface bookObject {
    author: string,
    authorId: string,
    title: string,
    price: number,
    image: string,
    key: string
  }

  export default defineComponent({
    name: 'BookCard',
    data() {
      return {
        like: false
      }
    },
    props: {
      book: {
        type: Object as PropType<bookObject>,
      },
      imageSize: {
        type: String,
        default: 'M'
      },
      discount: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapGetters([
        'favoritesList',
        'discountValue'
      ]),
      imageSrc(){
        return `https://covers.openlibrary.org/b/olid/${this.book?.image}-${this.imageSize}.jpg`
      }
    },
    methods: {
      ...mapActions([
        'toggleFavoritesBook',
        'checkFavoritesBook'
      ]),
      handleLikeButton(bookKey: string){
        this.toggleFavoritesBook(bookKey);
        this.like = !this.like;
        localStorage.setItem('_favoritesList', JSON.stringify([...this.favoritesList]));
      }
    },
    mounted(){
      this.checkFavoritesBook(this.book?.key)
        .then(result => {
          this.like = result;
        })
    }
  });
</script>

<style lang='scss' module>
  .bookCard {
    background: #faf8f6;
    border-radius: 5px;
    padding: 31px 30px 13px 30px;
    position: relative;
    @media (max-width: 575px) {
      padding: 5px 19px 8px 19px;
    }
  }
  .image {
    margin-bottom: 10px;
    width: 219px;
    height: 285px;
    @media (max-width: 575px) {
      margin-bottom: 6px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .author {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #606060;
    @media (max-width: 575px) {
      font-size: 10px;
      line-height: 12px;
    }
  }
  .title {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #181818;
    margin: 10px 0;
    @media (max-width: 575px) {
      font-size: 13px;
      line-height: 16px;
    }
  }
  .price {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #343434;
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 17px;
    }
    &:after {
      content: '\20BD';
      margin-left: 3px;
    }
  }
  .like {
    position: absolute;
    top: 14px;
    right: 19px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f3e4de;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    @media (max-width: 575px) {
      width: 29px;
      height: 29px;
      top: 7px;
      right: 7px;
    }
    svg{
      width: 50%;
      height: 50%;
      fill: #675B56;
    }
  }
  .like:hover {
    svg{
      transition: 0.5s;
      fill: red;
    }
  }
  .like.active {
    svg{
      fill: red;
    }
  }
  .cart {
    cursor: pointer;
    position: absolute;
    bottom: 13px;
    right: 18px;
    width: 26px;
    height: 26px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    @media (max-width: 575px) {
      width: 17px;
      height: 17px;
      bottom: 8px;
      right: 13px;
    }
    svg {
      width: 100%;
      height: 100%;
      fill: #675B56;
    }
  }
  .sale {
    position: absolute;
    top: -18px;
    left: 12px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    width: 49px;
    height: 49px;
    background: #887569;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 575px) {
      width: 32px;
      height: 32px;
      top: -13px;
      font-size: 12px;
      line-height: 15px;
    }
  }
</style>