<template>
  <div class='main-third'>
    <img src='@/assets/home/thirdScreen/slide1.png' alt='img' />
    <Swiper>
      <SwiperSlide v-for='photo in photos'>
        <img :src='`@/assets/home/thirdScreen/${photo}`' alt='img'>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/swiper-bundle.css'

export default {
  name: 'kursThirdScreen',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      photos: [
        'slide1.png',
        'slide2.png',
        'slide3.png'
      ]
    }
  }
  // Другие опции компонента здесь
}
</script>

<style scoped>
.main-third {
  height: 20em;
}
</style>
