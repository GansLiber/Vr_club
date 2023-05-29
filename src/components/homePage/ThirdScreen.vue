<template>
  <div class='main-third'>
    <!--    <img src='@/assets/home/thirdScreen/slide1.png' alt='img' />-->
    <Swiper
      effect='cube'
      :grab-cursor='true'
      :cube-effect='{
      shadow: true,
      sliderShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
            }'
      :pagination='true'
    >
      <SwiperSlide v-for='photo in photos'>
        <img :src='require(`@/assets/home/thirdScreen/${photo}`)' alt='img' />
      </SwiperSlide>
      <div class='bgcSlider'></div>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import SwiperCore, {EffectCube, Pagination} from 'swiper'

import 'swiper/css/effect-cube'
import 'swiper/css'
import 'swiper/css/pagination'

SwiperCore.use([EffectCube, Pagination])

export default {
  name: 'kursThirdScreen',
  components: {
    Swiper,
    SwiperSlide,
    EffectCube
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

.swiper {
  max-width: 600px;
  width: 100%;
  height: 800px;
  overflow: visible;
  position: relative;
}

.bgcSlider {
  height: 2em;
  width: 3em;
  background-color: #478283;
  position: absolute;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>
