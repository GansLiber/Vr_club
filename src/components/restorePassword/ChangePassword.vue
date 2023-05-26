<template>
  <div class='login-form'>
    <h2>Смена пароля</h2>
    <form @submit.prevent='submitForm'>
      <kursInput
        v-model.trim='password'
        type='password'
        name='password'
        placehold='Пароль'></kursInput>
      <kurs-input
        v-model.trim='confirmPassword'
        type='password'
        name='confirmPassword'
        placehold='Подтвердите пароль'></kurs-input>
      <kurs-button :disabled='isSubmitting'>Изменить</kurs-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'kursChangePassword',
  data() {
    return {
      confirmPassword: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      // this.$store.dispatch('login', {
      //   login: 'adm',
      //   password: 'QWEasd123'
      // })
      //   .then(user => {
      //     console.log('user logged', user)
      //   })
      // this.login = ''
      // this.password = ''
    }
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
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


</style>
