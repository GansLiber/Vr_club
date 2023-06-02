<template>
  <div class='main'>
    <div>
      <h2 v-if='loginUser' style='color: white'>{{ loginUser.login }}</h2>
      <kurs-button @click='logout'>Выход</kurs-button>
      <router-link to=''>Админ панель</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cabinet',
  components: {},


  data() {
    return {}
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    loginUser() {
      return this.$store.state.auth.currentUser
    }
  }
}
</script>

<style scoped>
.main {
  height: 55em;

}

.main > div {
  margin: 0 auto;
}
</style>