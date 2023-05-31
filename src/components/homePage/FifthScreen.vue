<template>
  <div class='fifth-screen'>
    <kurs-topic-text :topText='topText' />
    <p class='text-center'>Моментально перезвоним</p>
    <form class='container-form'>
      <kurs-input
        class='inp-form-home'
        v-model.trim='name'
        type=''
        name='name'
        placehold='Ваше имя'
      />
      <input id='tel' class='inp-form-home' type='tel' placeholder='8(9__) '
             v-mask="['8(9##) ###-##-##', '8(9##) ###-##-##']">

      <!--      <kurs-input-->
      <!--        class='inp-form-home'-->
      <!--        v-model.trim='phoneNumber'-->
      <!--        type='number'-->
      <!--        name='phoneNumber'-->
      <!--        placehold='+7(8__)'-->
      <!--      />-->
      <kurs-button>Заказать звонок</kurs-button>
    </form>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'

export default {
  directives: {mask},
  name: 'kursFifthScreen',
  components: {},
  data() {
    return {
      topText: 'Есть вопросы или хотите записаться?',
      name: '',
      phoneNumber: ''
    }
  }

}
</script>

<style scoped>
.fifth-screen {
  max-width: 75%;
  margin: 0 auto;
  height: 20em;
}

.container-form {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.inp-form-home {
  max-width: 18em;
  width: 100%;
  height: 52px;
  margin: 0;
  background: #E4F7FF;
  border-radius: 25px;

  text-indent: 15px;
}

.text-center {
  color: #fff;
  position: relative;
  bottom: 3em;
  font-size: 20px;
}
</style>