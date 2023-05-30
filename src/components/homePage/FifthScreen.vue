<template>
  <div class='fifth-screen'>
    <kurs-topic-text :topText='topText' />
    <p class='text-center'>Моментально перезвоним</p>
    <form class='container-form'>
      <kurs-input
        class='inp-form-home'
        v-model.trim='name'
        type='text'
        name='name'
        placehold='Ваше имя'
      />
      <kurs-input
        class='inp-form-home'
        v-model.trim='phoneNumber'
        type='number'
        name='phoneNumber'
        placehold='+7(8__)'
      />
      <kurs-button>Заказать звонок</kurs-button>
    </form>
  </div>
</template>

<script>
export default {
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
}

.container-form {
  display: flex;
  justify-content: space-around;
}

.inp-form-home {
  max-width: 18em;
}

.text-center {
  color: #fff;
  position: relative;
  bottom: 3em;
  font-size: 20px;
}
</style>