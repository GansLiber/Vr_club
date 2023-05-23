<template>
  <kurs-topbar />

  <router-view />
</template>

<script>

import KursTopbar from '@/components/Topbar'

export default {
  components: {
    KursTopbar
  }
}

</script>

<style>

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
