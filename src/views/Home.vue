<template>
  <div class="deep_back">
    <div class="main_home_screen">
      <div class="text_button_block">
        <div class="main_text">
          <p>Очань</p>
          <p>крутой клуб.</p>
          <p>Нет причин не прийти!</p>
          <p>Спорим понравится?</p>
        </div>
        <div class="buttons">
          <button class="btn btn-primary">Хочу играть</button>
          <button class="btn btn-secondary" @click="toggleSound">
            Выключить звук
            <img :src="soundIcon" alt="sound" class="logo-img">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data(){
    return{
      isSoundOn: true,
      soundIcon: require('@/assets/home/icons/sound.svg'),
      muteIcon: require('@/assets/home/icons/mute.svg')
    }
  },
  methods:{
    toggleSound(){
      this.isSoundOn=!this.isSoundOn;
      this.soundIcon = this.isSoundOn ? require('@/assets/home/icons/sound.svg') : require('@/assets/home/icons/mute.svg')
    }
  }
}
</script>

<style scoped>
.main_home_screen {
  background-image: url("@/assets/home/background.png");
  background-size: cover;
  background-position: center;
  height: 56em;
  max-width: 95em;
  margin: 0 auto;
  padding: 0 1em;
  display: flex; /* Добавили display: flex */
  align-items: center;
}

.deep_back {
  background-color: #000000;
}

.text_button_block{
  max-width: 60em;
  margin-left: 2em;
}

.main_text {
  font-size: 3em;
  color: #fff;
  margin-bottom: 0.3rem;
  line-height: 1.2;
}
.main_text>p:first-child {
  font-size: 3.9em;
  margin-bottom: 0 ;
  line-height: 1;
}

.main_text>p:nth-child(2) {
  font-size: 2.2em;
}

.main_text>p:nth-child(3){
  font-size: 1.22em;
}

.main_text>p:nth-child(4){
  font-size: 1.3em;
}

.buttons {
  display: flex;
  justify-content: space-around;
  gap: 1em;
}

.btn {
  padding: 0.3em 1.3em;
  border-radius: 30px;
  font-size: 1.5em;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #f00;
  color: #fff;
  justify-content: flex-end;
  /*margin-right: 3em;*/
}

.btn-secondary {
  background-color: #333;
  color: #fff;
}

.btn-secondary>img{
  margin-left: 10px;
}

.btn:hover {
  background-color: #c00;
}
</style>
