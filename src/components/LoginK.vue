<template>
  <div class='login-form'>
    <h2>Login</h2>
    <form @submit.prevent='submitForm'>
      <InputK
        v-model='login'
        type='text'
        name='login'
        placehold='Логин'></InputK>
      <InputK
        v-model='password'
        type='password'
        name='password'
        placehold='Пароль'></InputK>
      <ButtonK>Войти</ButtonK>
    </form>
  </div>
</template>

<script>

export default {
  name: 'LoginK',
  components: {},
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      // Ваша логика обработки отправки формы
      console.log('Email:', this.email)
      console.log('Password:', this.password)

      // Сбросить значения полей формы после отправки
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
.login-form {
  max-width: 300px;
  margin: 0 auto;
}

</style>
