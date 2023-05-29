<template>
  <div class='register-form'>
    <h2>Регистрация</h2>
    <form @submit.prevent='submitForm'>
      <div class='login-link'>
        <router-link to='#' @click='showDialogLoginWindow'>Хотите авторизироваться?</router-link>
      </div>

      <kurs-input
        v-model.trim='name'
        type='text'
        name='name'
        placehold='Имя'></kurs-input>
      <kurs-input
        v-model.trim='surname'
        type='text'
        name='surname'
        placehold='Фамилия'></kurs-input>
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
      <kurs-input
        v-model.trim='email'
        type='email'
        name='email'
        placehold='Почта'></kurs-input>
      <kurs-button :disabled='isSubmitting'>Войти</kurs-button>

    </form>
  </div>
</template>

<script>

export default {
  name: 'kursRegister',
  data() {
    return {
      name: '',
      surname: '',
      login: '',
      password: '',
      email: ''
    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('register', {
        name: this.name,
        surname: this.surname,
        login: this.login,
        password: this.password,
        email: this.email
      })
        .then(user => {
          console.log('user logged', user)
        })
      // Сбросить значения полей формы после отправки
      this.name = ''
      this.surname = ''
      this.login = ''
      this.password = ''
      this.email = ''
    },


    showDialogLoginWindow() {
      this.$store.commit('setSingleDialogVisible', this.dialogLoginVisible.name)
    }

  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    },
    dialogLoginVisible() {
      return this.$store.state.auth.dialogWindows[1]
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

.login-link {
  display: flex;

  right: 0;
}

.register-link > router-link {
  align-items: flex-end;
}

.register-form {
  max-width: 300px;
  min-width: 300px;
  margin: 0 auto;
}

</style>
