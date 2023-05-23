<template>
  <div class='login-form'>
    <h2>Вход</h2>
    <form @submit.prevent='submitForm'>
      <div class='register-link'>
        <router-link to='#'>Хотите зарегистрироваться?</router-link>
      </div>
      <kursInput
        v-model.trim='login'
        type='text'
        name='login'
        placehold='Логин'></kursInput>
      <!--      <div class='register-link'>-->
      <!--        <router-link to='#'>Забыли пароль?</router-link>-->
      <!--      </div>-->
      <div class='restore-password-link'>
        <router-link to='#'>Забыли пароль?</router-link>
      </div>
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
      this.login = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
h2 {
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

.register-link {
  display: flex;

  right: 0;
}

.register-link > router-link {
  align-items: flex-end;
}

.login-form {
  max-width: 300px;
  min-width: 300px;
  margin: 0 auto;
}

</style>
