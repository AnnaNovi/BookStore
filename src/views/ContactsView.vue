<template>
  <section :class="$style.section">
    <h1 :class="$style.title">Контакты</h1>
    <div :class="$style.wrapper">
      <div :class="$style.listItem">
        <div :class="$style.item">
          <svg :class="$style.icon">
            <use href="../assets/sprite.svg#phone"/>
          </svg>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </div>
        <div :class="$style.contactsItem">
          <div :class="$style.item">
            <svg :class="$style.icon">
              <use href="../assets/sprite.svg#phone"/>
            </svg>
            <a href="tel:+37369134736">+373 69 13 47 36</a>
          </div>
          <div :class="$style.item">
            <svg :class="$style.icon">
              <use href="../assets/sprite.svg#phone"/>
            </svg>
            <a href="tel:+37369976611">+373 69 97 66 11</a>
          </div>
          <div :class="$style.item">
            <svg :class="$style.icon">
              <use href="../assets/sprite.svg#phone"/>
            </svg>
            <a href="mailto:loremIpsum@gmail.com">loremIpsum@gmail.com</a>
          </div>
        </div>
        <div style="font-weight: 500">
          Мы в соц. сетях
          <div style="margin-top: 13px">
            <svg :class="[$style.icon, $style.iconSocial]">
              <use href="../assets/sprite.svg#facebook"/>
            </svg>
            <svg :class="[$style.icon, $style.iconSocial]">
              <use href="../assets/sprite.svg#instagram"/>
            </svg>
          </div>
        </div>
      </div>
      <GMapMap
        :center="{lat: 51.093048, lng: 6.842120}"
        :zoom="7"
        map-type-id="terrain"
        :class="$style.map"
      >
      </GMapMap>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactsView',
});
</script>

<style lang="scss" module>
  .title {
    @include title;
  }
  .icon {
    width: 16px;
    height: 16px;
    fill: #7D6C65;
    margin-right: 13px;
    @media (max-width: 576px) {
      width: 12px;
      height: 12px;
      margin-right: 6px;
    }
  }
  .iconSocial {
    width: 17px;
    height: 17px;
    margin-right: 16px;
  }
  .item {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #373737;
    a {
      font-weight: 500;
      color: #606060;
    }
    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
  .listItem {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .contactsItem {
    .item {
      margin: 21px 0;
    }
  }
  .map {
    width: 100%;
    height: 321px;
    margin-top: 30px;
  }
</style>
