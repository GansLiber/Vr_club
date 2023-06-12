<template>
  <div class='fifth-screen'>
    <kurs-topic-text :topText='topText' />
    <p class='text-center'>Моментально перезвоним</p>
    <form class='container-form' @submit.prevent='onSubmit'>
      <kurs-input
        class='inp-form-home'
        v-model.trim='name'
        type=''
        name='name'
        placehold='Ваше имя'
      />
      <input v-model.trim='phoneNumber' id='tel' class='inp-form-home' type='tel' required placeholder='8(9__) '
             v-mask="['8(9##) ###-##-##', '8(9##) ###-##-##']">

      <kurs-button>Заказать звонок</kurs-button>
    </form>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
import KursTextMultyModal from '@/components/modalWindows/textMultyModal'
import {mapMutations} from 'vuex'

export default {
  directives: {mask},
  name: 'kursFifthScreen',
  components: {KursTextMultyModal},
  data() {
    return {
      topText: 'Есть вопросы или хотите записаться?',
      name: '',
      phoneNumber: ''
    }
  },
  methods: {
    ...mapMutations({
      showCapcha: 'setSingleDialogVisible'
    }),
    onSubmit() {
      this.showCapcha('dialogCapchaVisible')
      // this.$store.dispatch('requestCall', {
      //   name: this.name,
      //   phone_number: this.phoneNumber
      // }).then()
      // this.name = ''
      // this.phoneNumber = ''
    }
  },
  computed: {}
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