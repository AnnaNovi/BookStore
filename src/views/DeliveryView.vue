<template>
  <section :class="$style.section">
    <h1 :class="$style.title">Доставка и оплата</h1>
    <div :class="$style.wrapper">
      <div :class="$style.listItem">
        <div :class="$style.item">
          <div :class="$style.itemTitle">Как сделать заказ на сайте?</div>
          <p>Процесс заказа очень прост: добавьте товары в корзину, выберите способ доставки и оплаты и подтвердите заказ. Чтобы добавить продукт в корзину, все, что вам нужно сделать, это нажать кнопку «Добавить в корзину» рядом с продуктом. Если вы хотите больше штук одного и того же продукта, перейдите в область корзины и отрегулируйте количество в соответствии с вашими предпочтениями.Когда у вас есть все желаемые продукты в корзине, нажмите кнопку в области корзины - «Заказать». Введите адрес доставки или выберите существующий адрес в своем аккаунте, выберите способ доставки и способ оплаты и нажмите кнопку завершения заказа - «Отправить заказ». На экране вашего браузера система отобразит: номер счета / заказа, сумму к оплате / оплате и список приобретенных товаров.</p>
        </div>
        <div :class="$style.item">
          <div :class="$style.itemTitle">Есть несколько способов оплаты, в зависимости от ваших предпочтений. Таким образом, вы можете сделать выбор в пользу:</div>
          <div :class="$style.paymentMethod">
            <div
              :class="$style.paymentMethodItem"
              v-for="(paymentMethod, index) in paymentMethods"
              :key="index"
            >
              <FeauterBlock
                :feature="paymentMethod"
                :class="$style.feature"
              ></FeauterBlock>
              <p>{{ paymentMethod.description }}</p>
            </div>
          </div>
        </div>
        <div :class="$style.item">
          <div :class="$style.itemTitle">Доставка по городам Кишинёв и Бэлць бесплатная, если стоимость заказа превышает 499 лей</div>
          <p>Срок доставки 1-2 рабочих дня.</p>
        </div>
        <div :class="$style.item">
          <div :class="$style.itemTitle">Национальная доставка :</div>
          <p>Доставка на национальном уровне осуществляется в течение 1-3 рабочих дней с момента оформления заказа.</p>
        </div>
        <div :class="$style.item">
          <div :class="$style.itemTitle">Международная доставка :</div>
          <p>Стоимость международной доставки зависит от нескольких факторов, таких как вес, страна назначения и способ оплаты.</p>
          <p style="margin-top: 20px">*** Каждый заказ принимают менеджеры компании и вместе с вами устанавливают сроки доставки. Наши курьеры доставят заказ по адресу и в согласованные с вами сроки.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FeauterBlock from '../components/FeauterBlock.vue';

export default defineComponent({
  name: 'DeliveryView',
  data(){
    return {
      paymentMethods: [
        {
          id: 1,
          value: 'Оплата продукции наложенным платежом',
          description: '(наличными), на основании накладной, сопровождающей посылку (доставка курьером), способ доступен только в городе. Кишинев и его окрестности.'
        },
        {
          id: 2,
          value: 'По перечислению',
          description: 'при оплате по перечислению, после оформления заказа юридическим лицам будет выслан счет для оплаты. Для этого отправьте фискальные и банковские реквизиты вашей компании на адрес электронной почты: office@bookville.md.'
        },
        {
          id: 3,
          value: 'Кредитная / дебетовая карта',
          description: 'если вы выбрали кредитную / дебетовую карту в качестве способа оплаты, вам необходимо заполнить форму с подробными сведениями о ней. Если транзакция по карте прошла успешно, следующий экран благодарит вас за заказ и предоставляет вам соответствующую информацию о заказе. Вы также получите эту информацию по электронной почте. Оплата производится банковскими картами Visa и MasterCard.. Если вы выберете этот способ оплаты, вы будете автоматически перенаправлены на безопасную платежную страницу банка, где вам нужно будет ввести данные своей платежной карты. За эти платежи дополнительная плата не взимается. Оплата производится в леях по курсу банка, выпустившего карту, и основана на безопасной системе обработки онлайн-платежей, которая обеспечивает конфиденциальность и безопасность операций. Обработка данных карты осуществляется исключительно банком, наш магазин не запрашивает и не хранит никакой информации о карте.'
        }
      ]
    }
  },
  components: {
    FeauterBlock
  }
});
</script>

<style lang="scss" module>
  .title {
    @include title;
  }
  .item {
    margin-top: 32px;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #373737;
    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 140%;
    }
  }
  .itemTitle {
    font-weight: 500;
    font-size: 23px;
    line-height: 29px;
    color: #373737;
    margin-bottom: 13px;
    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 17px;
    }
  }
  .paymentMethod {
    padding: 45px 45px 0;
    @media (max-width: 992px) {
      padding: 0;
    }
  }
  .paymentMethodItem {
    display: grid;
    grid-template-columns: 305px auto;
    column-gap: 40px;
    margin-bottom: 47px;
    @media (max-width: 992px) {
      display: block;
      margin-bottom: 0;
    }
  }
  .paymentMethodItem:last-child {
    margin-bottom: 0;
  }
  .feature {
    margin: 0;
    @media (max-width: 992px) {
      margin: 17px 0 19px;
    }
  }
</style>
