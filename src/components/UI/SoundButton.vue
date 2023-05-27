<template>
  <button class='btn btn-secondary' @click='handleSoundButtonClick'>
    <span v-if='isSoundOn'>Выключить звук</span>
    <span v-else>Включить звук</span>
    <img :src='soundIcon' alt='sound' class='logo-img'>
  </button>
  <audio ref='audioPlayer'>
    <source :src='track' type='audio/mpeg'>
  </audio>
</template>

<script>
export default {
  name: 'kursSoundButton',

  props: {
    track: {}
  },

  data() {
    return {
      isSoundOn: false,
      soundIcon: require('@/assets/home/icons/mute.svg')
    }
  },
  methods: {
    handleSoundButtonClick() {
      this.toggleSound()
      this.playMusic()
    },
    toggleSound() {
      this.isSoundOn = !this.isSoundOn
      this.soundIcon = this.isSoundOn ? require('@/assets/home/icons/sound.svg') : require('@/assets/home/icons/mute.svg')
    },
    playMusic() {
      const audioElement = this.$refs.audioPlayer
      this.isSoundOn ? audioElement.play() : audioElement.pause()
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 0.3em 1.7em;
  border-radius: 30px;
  font-size: 1.5em;
  transition: background-color 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-secondary {
  background-color: #333;
  color: #fff;
  width: 314px;

  /* Rectangle 189 */

  box-sizing: border-box;


  background: radial-gradient(50% 50% at 50% 50%, rgba(3, 15, 33, 0.5) 0%, rgba(2, 17, 42, 0) 100%);
  border: 4px solid #FFFFFF;
  border-radius: 25px;

}

.btn-secondary > img {
  margin-left: 10px;
}

.btn:hover {
  background-color: #a20000;
}

.btn:active {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>