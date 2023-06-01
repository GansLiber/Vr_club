<template>
  <div class='main'>
    <kurs-first-screen @scroll-to-element='scrollToElement' />
    <kurs-twice-screen />
    <kurs-third-screen />
    <kurs-fourth-screen />
    <kurs-fifth-screen id='fifthScreenElement' />
  </div>
</template>

<script>
import kursFirstScreen from '@/components/homePage/FirstScreen'
import kursTwiceScreen from '@/components/homePage/TwiceScreen'
import kursThirdScreen from '@/components/homePage/ThirdScreen'
import kursFourthScreen from '@/components/homePage/FourthScreen'
import kursFifthScreen from '@/components/homePage/FifthScreen'

export default {
  name: 'Home',
  components: {
    kursFirstScreen,
    kursTwiceScreen,
    kursThirdScreen,
    kursFourthScreen,
    kursFifthScreen
  },
  methods: {
    scrollToElement() {
      this.$nextTick(() => {
        const fifthScreenElement = document.getElementById('fifthScreenElement')

        if (fifthScreenElement) {
          window.scrollTo({
            top: fifthScreenElement.offsetTop,
            behavior: 'smooth'
          })
        }
      })
    }
  }
}
</script>
