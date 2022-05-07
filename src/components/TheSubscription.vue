<template>
  <div :class="$style.subscription" v-if="ActiveLink.meta.subscription">
    <h4 :class="$style.title">Не можете определиться с выбором?</h4>
    <h5 :class="$style.subtitle">Закажите бесплатную консультацию с нашим книжным сомелье</h5>
    <form
      :class="$style.form"
      @submit.prevent="sendForm"
    >
      <input
        type="text"
        placeholder="Ваше имя"
        v-model.lazy="subscription.name"
      >
      <input
        type="tel"
        placeholder="Ваш номер"
        v-model.lazy="subscription.phone"
      >
      <button type="submit" :class="$style.submitButton">Оставить заявку</button>
    </form>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'TheSubscription',
    data() {
      return {
        subscription: {
          name: '',
          phone: ''
        }
      }
    },
    computed: {
      ActiveLink(){
        return this.$router.currentRoute.value;
      }
    },
    methods: {
      sendForm(){
        this.subscription.name = '';
        this.subscription.phone = '';
        console.log(this.subscription);
      }
    }
  });
</script>

<style lang='scss' module>
  .subscription {
    width: 100%;
    background: #E9E5E0;
    text-align: center;
    padding: 48px 178px;
  }
  .title {
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #373737;
  }
  .subtitle {
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin: 12px 0 38px 0;
  }
  .form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    input {
      background: #FFFFFF;
      border-radius: 8px;
      padding: 22px 32px;
      border: none;
      &::placeholder {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #9C9C9C;
      }
    }
  }
  .submitButton {
    font-family: 'Montserrat';
    border: none;
    background: #887569;
    border-radius: 8px;
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    text-transform: uppercase;
  }
</style>