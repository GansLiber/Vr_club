<template>
  <div class='restore-form'>
    <kurs-change-password v-if='showStart' />
    <kurs-restore v-else />
  </div>
</template>

<script>
import KursChangePassword from '@/components/restorePassword/ChangePassword'
import KursRestore from '@/components/restorePassword/Restore'

export default {
  name: 'kursRestorePassword',
  components: {
    KursChangePassword,
    KursRestore
  },

  data() {
    return {
      showStart: true
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

.restore-form {
  max-width: 300px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
</style>
