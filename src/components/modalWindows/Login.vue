<template>
  <div class='login-form'>
    <h2>Вход</h2>
    <div v-if='validationErrors' style='color: red'>
      <p>Неверные логин или пароль</p>
    </div>
    <form @submit.prevent='submitForm'>
      <div class='register-link'>
        <router-link to='#' @click='showDialogRegisterWindow'>Хотите зарегистрироваться?</router-link>
      </div>
      <kursInput
        v-model.trim='login'
        type='text'
        name='login'
        placehold='Логин'></kursInput>
      <div class='restore-password-link'>
        <a href='https://spacgun.ru/forgot-password' @click='hideDialogWindow'>Забыли пароль?
        </a>
      </div>
      <kurs-input
        v-model.trim='password'
        type='password'
        name='password'
        placehold='Пароль'></kurs-input>
      <kurs-button :disabled='isSubmitting'>Войти</kurs-button>
    </form>
  </div>
</template>

<script>

import KursRegister from '@/components/modalWindows/Register'

export default {
  name: 'kursLogin',
  components: {KursRegister},
  data() {
    return {
      login: '',
      password: ''

    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('login', {
        login: this.login,
        password: this.password
      })
        .then(user => {
          console.log('user logged', user)
        })
      // Сбросить значения полей формы после отправки
      this.login = ''
      this.password = ''
    },

    showDialogRegisterWindow() {
      this.$store.commit('setSingleDialogVisible', this.dialogRegisterVisible.name)
    },
    hideDialogWindow() {
      this.$store.commit('setSingleDialogVisible', false)
    }
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    },
    dialogRegisterVisible() {
      return this.$store.state.auth.dialogWindows[0]
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors
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
