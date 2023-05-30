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
        :navigation='{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }'
      >
        <SwiperSlide v-for='photo in photos' :key='photo'>
          <img :src='requirePhoto(photo)' alt='img' />
        </SwiperSlide>
      </Swiper>
      <div class='bgSlide'></div>
      <div class='swiper-button-prev'></div>
      <div class='swiper-button-next'></div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import SwiperCore, {EffectCube, Pagination, Navigation} from 'swiper'

import 'swiper/css/effect-cube'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

SwiperCore.use([EffectCube, Pagination, Navigation])

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

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.swiper-button-prev {
  left: 20px;
}

.swiper-button-next {
  right: 20px;
}
</style>
