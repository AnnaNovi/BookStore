<template>
  <div :class="$style.wrapper">
    <div :class="$style.navigation">
      <div :class="$style.linkList">
        <button :class="[$style.link, $style.active]">
          <span :class="$style.burger"></span>
          Подразделы
        </button>
        <button
          v-for="link in NavigationLinks"
          :key="link.name"
          :class="{[$style.link]: true, [$style.active]: link.active}"
          @click="changePage(link.name, link.path)"
        > {{ link.title }}</button>
      </div>
    </div>
    <div :class="$style.socials">
      <svg :class="$style.icon">
        <use href="../assets/sprite.svg#facebook"/>
      </svg>
      <svg :class="$style.icon">
        <use href="../assets/sprite.svg#instagram"/>
      </svg>
      <select :class="$style.changeLanguage">
        <option selected>
          RU
          <svg>
            <use href="../assets/sprite.svg#arrow-down"/>
          </svg>
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions, mapGetters } from 'vuex';

  export default defineComponent({
    name: 'TheHeaderNavigation',
    computed: {
      ...mapGetters([
        'NavigationLinks'
      ])
    },
    methods: {
      ...mapActions([
        'changeActiveLink'
      ]),
      changePage(linkName: string, linkPath: string){
        this.changeActiveLink(linkName);
        this.$router.push(linkPath);
      }
    }
  });
</script>

<style lang='scss' module>
  .wrapper {
    display: grid;
    grid-template-columns: 80% 10%;
    justify-content: space-between;
    align-items: center;
  }
  .linkList {
    display: flex;
    justify-content: space-between;
  }
  .burger {
    margin-right: 18px;
    cursor: pointer;
    display: block;
    width: 19px;
    height: 2px;
    background: #887569;
    position: relative;
    &::before,
    &::after {
      content: "";
      width: 25px;
      height: 2px;
      background: #887569;
    }
    &::before {
      position: absolute;
      left: 0;
      top: -7px;
    }
    &::after {
      position: absolute;
      left: 0;
      bottom: -7px;
    }
  }
  .link {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 22px;
    color: #4F4F4F;
    margin: 25px 10px;
    background: none;
    border: none;
    transition: 0.4s;
    cursor: pointer;
    &.active {
      color: #887569;
    }
    &:hover {
      color: #887569;
      transition: 0.7s;
    }
  }
  .socials{
    display: flex;
    justify-content: space-around;
  }
  .icon {
    width: 19px;
    height: 19px;
    fill: #7D6C65;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      transition: 0.5s;
      fill: #787878;
    }
  }
  .changeLanguage {
    display: flex;
    justify-content: space-between;
    width: 50px;
    background: none;
    border: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #787878;
    cursor: pointer;
  }
</style>