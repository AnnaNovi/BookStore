<template>
  <section :class="$style.section">
    <h1 :class="$style.title">Контакты</h1>
    <div :class="$style.wrapper">
      <div :class="$style.listItem">
        <div :class="$style.item">
          <svg :class="$style.icon">
            <use href="../assets/sprite.svg#phone"/>
          </svg>
          Shopping MallDova - Moldova, Chisinau, str. Arborilor 21
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
            <a href="mailto:bookville@gmail.com">bookville@gmail.com</a>
          </div>
        </div>
        <div style="font-weight: 500">
          Мы в соц. сетях
          <div style="margin-top: 13px">
            <svg :class="$style.icon">
              <use href="../assets/sprite.svg#facebook"/>
            </svg>
            <svg :class="$style.icon">
              <use href="../assets/sprite.svg#instagram"/>
            </svg>
          </div>
        </div>
      </div>
      <GMapMap
        :center="{lat: 51.093048, lng: 6.842120}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 50vw; height: 321px"
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
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #373737;
  }
  .icon {
    width: 16px;
    height: 16px;
    fill: #7D6C65;
    margin-right: 13px;
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
  }
  .wrapper {
    display: grid;
    grid-template-columns: auto 2fr;
    column-gap: 50px;
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
</style>
