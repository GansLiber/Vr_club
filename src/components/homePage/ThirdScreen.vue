<template>
  <div class='main-third'>
    <p class='advantage-text'>Наши крутые игры</p>
    <div class='swipe-and-bg'>
      <Swiper
        effect='cube'
        :grab-cursor='true'
        :cube-effect='{
          shadow: true,
          sliderShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }'
        :pagination='{ clickable: true }'
      >
        <SwiperSlide v-for='photo in photos' :key='photo'>
          <img :src='requirePhoto(photo)' alt='img' />
        </SwiperSlide>
      </Swiper>
      <div class='bgSlide'></div>
    </div>
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
  name: 'KursThirdScreen',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      photos: ['slide1.png', 'slide2.png', 'slide3.png']
    }
  },
  methods: {
    requirePhoto(photo) {
      return require(`@/assets/home/thirdScreen/${photo}`)
    }
  }
}
</script>

<style scoped>
.main-third {
  height: 60em;
  position: relative;
}

.swipe-and-bg {
  position: relative;
}

.swiper {
  max-width: 600px;
  width: 100%;
  height: 800px;
  overflow: visible;
}

.advantage-text {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 113.19%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  margin: 2em;
}

.bgSlide {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 604px;
  height: 810px;
  background: #26B7E2;
  filter: blur(75px);
  border-radius: 15px;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>