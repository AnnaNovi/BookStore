<template>
  <div :class="$style.subscription" v-if="activeLink.meta.subscription">
    <h4 :class="$style.title">{{ title }}</h4>
    <h5 :class="$style.subtitle">{{ subtitle }}</h5>
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
        v-if="!eventPage"
      >
      <input
        type="email"
        placeholder="E-mail"
        v-model.lazy="subscription.email"
        v-if="eventPage"
      >
      <ButtonBrown
        :class="$style.button"
        :paddingLR="28"
      >Оставить заявку</ButtonBrown>
    </form>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ButtonBrown from '../ui/ButtonBrown.vue';

  export default defineComponent({
    name: 'TheSubscription',
    data() {
      return {
        subscription: {
          name: '',
          phone: ''
        },
      }
    },
    components: {
      ButtonBrown
    },
    computed: {
      activeLink(){
        return this.$router.currentRoute.value;
      },
      title(): string{
        return (this.activeLink.name === 'events') ? 'Хотите быть в курсе предстоящих мероприятий?' : 'Не можете определиться с выбором?';
      },
      subtitle(): string{
        return (this.activeLink.name === 'events') ? 'Подпишитесь на нашу рассылку и вы узнаете первым о главных событиях ' : 'Закажите бесплатную консультацию с нашим книжным сомелье';
      },
      eventPage(): boolean{
        return (this.activeLink.name === 'events') ? true : false;
      },
    },
    methods: {
      sendForm(){
        this.subscription.name = '';
        this.subscription.phone = '';
        console.log(this.subscription);
      }
    },
  });
</script>

<style lang='scss' module>
  .subscription {
    width: 100%;
    background: #E9E5E0;
    text-align: center;
    padding: 48px 178px;
    margin-top: 30px;
    @media (max-width: 1200px) {
      padding: 48px 138px;
    }
    @media (max-width: 768px) {
      padding: 48px 108px;
      margin-top: 20px;
    }
    @media (max-width: 576px) {
      padding: 48px 78px;
    }
    @media (max-width: 450px) {
      padding: 25px 32px 30px;
    }
    @media (max-width: 375px) {
      padding: 25px 15px 30px;
    }
  }
  .title {
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #373737;
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
  .subtitle {
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin: 12px 0 38px 0;
    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 15px;
      margin: 6px 0 21px 0;
    }
  }
  .form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 20px;
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
        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 17px;
        }
      }
    }
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
  .button {
    @media (max-width: 1200px) {
      grid-column-start: 1;
      grid-column-end: span 2;
    }
    /* @media (max-width: 768px) {
      grid-column-start: none;
      grid-column-end: none;
    } */
  }
</style>