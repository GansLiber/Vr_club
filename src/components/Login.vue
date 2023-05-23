<template>
  <div class='login-form'>
    <h2>Вход</h2>
    <form @submit.prevent='submitForm'>
      <kursInput
        v-model.trim='login'
        type='text'
        name='login'
        placehold='Логин'></kursInput>
      <kurs-input
        v-model.trim='password'
        type='password'
        name='password'
        placehold='Пароль'></kurs-input>
      <kurs-button>Войти</kurs-button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'kursLogin',
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      // Ваша логика обработки отправки формы
      console.log('Login:', this.login)
      console.log('Password:', this.password)

      // Сбросить значения полей формы после отправки
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
h2 {
  color: white;
}

.login-form {
  max-width: 300px;
  margin: 0 auto;
}

</style>
