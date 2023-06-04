<template>
  <div class='register-form'>
    <h2>Регистрация</h2>
    <div v-if='validationErrors' style='color: red'>
      <div>{{ validationErrors['message'] }}</div>
      <br>
      <div>{{ validationErrors['errors']['login'] }}</div>
      <br>
      <div>{{ validationErrors['message']['password'] }}</div>
    </div>
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
      <kurs-button :disabled='isLoading'>Войти</kurs-button>

    </form>
  </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex'

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
      this.name = ''
      this.surname = ''
      this.login = ''
      this.password = ''
      this.email = ''
    },

    ...mapMutations(['setSingleDialogVisible']),

    showDialogLoginWindow() {
      this.setSingleDialogVisible(this.dialogWindows[1].name)
    }
  },
  computed: {
    ...mapState({
      dialogWindows: state => state.dialogWindow.dialogWindows,
      isLoading: state => state.global.isLoading,
      validationErrors: state => state.auth.validationErrors
    })
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
