<template>
  <div class='main'>
    <div>
      <h2 v-if='loginUser' style='color: white'>{{ loginUser.login }}</h2>
      <div v-if='isAdmin===1'>
        <router-link to='admin'>Админ панель</router-link>
      </div>
      <kurs-button @click='logout'>Выход</kurs-button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

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
    ...mapState({
      isAdmin: state => state.auth.isAdmin
    }),
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