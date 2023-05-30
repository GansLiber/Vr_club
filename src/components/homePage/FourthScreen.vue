<template>
  <div class='fourth_home_screen'>
    <p class='advantage-text'>Видеопредставление нашего раскумара</p>

    <vue-plyr :options='options'>
      <video
        controls
        crossorigin
        playsinline
        :data-poster='options.poster'
      >
        <source
          size='720'
          src='@/assets/home/video/gg.mp4'
          type='video/mp4'
        />
        <source
          size='1080'
          src='@/assets/home/video/gg.mp4'
          type='video/mp4'
        />
      </video>
    </vue-plyr>
  </div>
</template>

<script>
export default {
  name: 'kursFourthScreen',
  data() {
    return {
      options: {
        poster: require('@/assets/home/video/poster.png')
      }
    }
  }
}
</script>

<style scoped>

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
</style>
