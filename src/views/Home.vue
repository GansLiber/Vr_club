<template>
  <div class='main'>
    <kurs-first-screen />
    <kurs-twice-screen />
    <kurs-third-screen />
  </div>
</template>

<script>
import kursFirstScreen from '@/components/homePage/FirstScreen'
import kursTwiceScreen from '@/components/homePage/TwiceScreen'
import kursThirdScreen from '@/components/homePage/ThirdScreen'

export default {
  name: 'Home',
  components: {
    kursFirstScreen,
    kursTwiceScreen,
    kursThirdScreen
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
