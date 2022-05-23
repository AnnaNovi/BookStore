<template>
  <section :class="{[$style.wrapper]: !loadContent}">
    <TheLoader v-if="loadContent"/>
    <template
      v-if="!loadContent"
    >
      <div :class="$style.image">
        <img :src="imageSrc" alt="" :class="$style.image">
        <button
          :class="[$style.like, {[$style.active]: this.like}]"
          @click="handleLikeButton(this.activeBook.key)"
        >
          <svg>
            <use href="../assets/sprite.svg#like"/>
          </svg>
        </button>
        <div
            :class="$style.sale"
            v-if="activeBook.discount"
          >{{ activeBook.discount }}%
        </div>
      </div>
      <div :class="$style.description">
        <div :class="$style.author">{{ activeBook.author }}</div>
        <div :class="$style.title">{{ activeBook.title }}</div>
        <div :class="$style.available" v-if="activeBook.available">
          <svg :class="$style.icon" >
            <use href="../assets/sprite.svg#check"/>
          </svg>
          В наличии
        </div>
        <div :class="$style.available" v-else>
          <svg :class="$style.icon" >
            <use href="../assets/sprite.svg#notAvailable"/>
          </svg>
          Нет в наличии
        </div>
        <hr :class="$style.line">
        <div :class="$style.innerWrapper">
          <div :class="$style.price">
            <span
              :class="{[$style.lastPrice]: !!discountPrice}"
            >
              {{ activeBook.price }}
            </span>
            <span
              v-if="!!discountPrice"
              
            >{{ discountPrice }}</span>
          </div>
          <button :class="$style.button">В корзину</button>
        </div>
        <hr :class="$style.line">
        <div :class="$style.featureList">
          <div
            :class="$style.featureItem"
            v-for="(item, index) in featureList"
            :key="index"
          >
            <span>{{ item[0] }}</span>
            <span :class="$style.featureItemValue">{{ item[1] }}</span>
          </div>
        </div>
        <hr :class="$style.line">
        <p
          :class="$style.firstSentence"
          v-if="activeBook.firstSentence"
        >{{ activeBook.firstSentence[0] }}..
        </p>
      </div>
      <BooksSwiper
        title="Похожие продукты"
        type="similar"
        :class="$style.swiper"
      />
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import TheLoader from '../components/TheLoader.vue';
import BooksSwiper from '../components/BooksSwiper.vue';

export default defineComponent({
  name: 'BlogSingleView',
  data(){
    return {
      loadContent: true,
      like: false
    }
  },
  components: {
    TheLoader,
    BooksSwiper
  },
  computed: {
    ...mapGetters([
      'activeBook',
      'favoritesList'
    ]),
    imageSrc(): string{
      return `https://covers.openlibrary.org/b/olid/${this.activeBook?.image}-L.jpg`
    },
    discountPrice(): number | null{
      return (this.activeBook?.discount) ? Math.ceil(this.activeBook?.price * (100 - this.activeBook?.discount)/100) : null; 
    },
    featureList(): Array<Array<string | number>>{
      return [
        ['Издательство', 'BomBora'],
        ['Год публикации', this.activeBook.publisherYear],
        ['Количество страниц', this.activeBook.quantityOfPage],
        ['Размер', '21×36'],
        ['Вес', `${this.activeBook.weight} гр`],
        ['Тип обложки', 'Твёрдый переплёт'],
        ['ISBN', this.activeBook.isbn]
      ]
    }
  },
  watch: {
    activeBook(){
      this.loadContent = false;
      this.checkFavoritesBook(this.activeBook?.key)
      .then(result => {
        this.like = result;
      })
      this.getSimilarBooks(this.activeBook?.subject);
    },
  },
  methods: {
    ...mapActions([
      'getBookById',
      'toggleFavoritesBook',
      'checkFavoritesBook',
      'getSimilarBooks'
    ]),
    handleLikeButton(bookKey: string){
      this.toggleFavoritesBook(bookKey);
      this.like = !this.like;
      localStorage.setItem('favoritesList', JSON.stringify([...this.favoritesList]));
    }
  },
  mounted(){
    const id = this.$router.currentRoute.value.params.id;
    this.getBookById(id);
  }
});
</script>

<style lang="scss" module>
  .wrapper {
    display: grid;
    row-gap: 33px;
    column-gap: 66px;
    grid-template-columns: 426px calc(100% - 426px - 33px);
  }
  .image {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .author {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #A3A3A3;
  }
  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #373737;
    margin: 8px 0 22px 0;
  }
  .available {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #373737;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    svg {
      margin-right: 10px;
    }
  }
  .line {
    width: 100%;
    border: 0.5px solid #CDCDCD;
  }
  .icon {
    width: 25px;
    height: 25px;
    fill: $BROWN;
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
  .like {
    position: absolute;
    top: -25px;
    right: 10px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid $BROWN;
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
  .button {
    background: $BROWN;
    border: 1px solid $BROWN;
    border-radius: 8px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    text-transform: uppercase;
    padding: 17px 39px;
    transition: 0.8s;
    cursor: pointer;
    &:hover {
      background: none;
      transition: 1s;
      color: $BROWN;
    }
  }
  .firstSentence {
    font-weight: 300;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    margin-top: 20px;
    opacity: 0.7;
  }
  .featureItem {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #373737;
    margin-bottom: 16px;
    display: grid;
    grid-template-columns: 160px auto;
    column-gap: 90px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .featureItemValue {
    font-weight: 500;
  }
  .swiper {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .innerWrapper {
    margin: 12px 0;
    display: flex;
    column-gap: 65px;
    align-items: center;
  }
  .featureList {
    margin: 20px 0;
  }
  .sale {
    position: absolute;
    top: -25px;
    left: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    width: 60px;
    height: 60px;
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
