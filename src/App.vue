<template>
  <kurs-loader v-if='isLoading' />
  <kurs-topbar />
  <div class='main'>
    <router-view />
  </div>
  <div class='foot'>
    <kurs-footer />
  </div>

</template>

<script>

import KursTopbar from '@/components/Topbar'
import KursFooter from '@/components/Footer'

export default {
  components: {
    KursTopbar,
    KursFooter
  },
  computed: {
    isLoading() {
      return this.$store.state.global.isLoading
    }
  },
  mounted() {
    this.$store.dispatch('loginAgain')
  }
}

</script>

<style>
.main {
  max-width: 95em;
  margin: 0 auto;
}

.foot {
  max-width: 75em;
  margin: 0 auto;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
