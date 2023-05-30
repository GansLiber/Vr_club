<template>
  <div class='fourth_home_screen'>
    <kurs-topic-text :topText='topText' />

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
  components: {},

  data() {
    return {
      options: {
        poster: require('@/assets/home/video/poster.png')
      },
      topText: 'Видеопредставление нашего раскумара'
    }
  }
}
</script>

<style scoped>

</style>
