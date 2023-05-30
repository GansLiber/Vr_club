<template>
  <div class='fourth_home_screen'>
    <p>Видео</p>
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
        poster: '@/assets/home/video/poster.jpg'
      }
    }
  }

}
</script>

<style scoped>

</style>