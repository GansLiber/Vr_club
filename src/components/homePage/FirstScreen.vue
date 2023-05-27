<template>
  <div class='main_home_screen'>
    <div class='text_button_block'>
      <div class='main_text'>
        <p>Очань</p>
        <p>крутой клуб.</p>
        <p>Нет причин не прийти!</p>
        <p>Спорим понравится?</p>
      </div>
      <div class='buttons'>
        <kurs-button>Хочу играть</kurs-button>
        <button class='btn btn-secondary' @click='handleSoundButtonClick'>
          <span v-if='isSoundOn'>Выключить звук</span>
          <span v-else>Включить звук</span>
          <img :src='soundIcon' alt='sound' class='logo-img'>
        </button>
        <audio ref='audioPlayer'>
          <source :src='music' type='audio/mpeg'>
        </audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kursFirstScreen',
  data() {
    return {
      isSoundOn: false,
      soundIcon: require('@/assets/home/icons/mute.svg'),
      music: require('@/assets/music/relax.mp3')
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
.main_home_screen {
  background-image: url("@/assets/home/background.png");
  background-size: cover;
  background-position: center;
  height: 55em;
  /*max-width: 95em;*/
  /*margin: 0 auto;*/
  padding: 0 1em;
  display: flex;
  align-items: center;
}


.text_button_block {
  max-width: 60em;
  margin-left: 2em;
}

.main_text {
  font-size: 3em;
  color: #fff;
  margin-bottom: 0.3rem;
  line-height: 1.2;
}

.main_text > p:first-child {
  font-size: 3.9em;
  margin-bottom: 0;
  line-height: 1;
}

.main_text > p:nth-child(2) {
  font-size: 2.2em;
}

.main_text > p:nth-child(3) {
  font-size: 1.22em;
}

.main_text > p:nth-child(4) {
  font-size: 1.3em;
}

.buttons {
  display: flex;
  justify-content: space-around;
  gap: 1em;
}


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
