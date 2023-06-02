<template>
  <div class='main'>
    <h2 style='color: white'>{{ loginUser.login }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Cabinet',

  data() {
    return {}
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
</style>