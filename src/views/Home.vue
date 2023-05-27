<template>
  <div class='main'>
    <kurs-first-screen />
  </div>
</template>

<script>
import kursFirstScreen from '@/components/homePage/FirstScreen'

export default {
  name: 'Home',
  components: {
    kursFirstScreen
  },


  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.main {
  max-width: 95em;
  margin: 0 auto;
}
</style>
