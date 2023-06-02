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
        <kurs-button @click='$emit("scroll-to-element")'>Хочу играть</kurs-button>
        <kurs-sound-button :track='track'></kurs-sound-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'kursFirstScreen',
  components: {},

  data() {
    return {
      track: require('@/assets/music/relax.mp3')
    }
  },
  methods: {}
}
</script>

<style scoped>
.main_home_screen {
  background-image: url("@/assets/home/bgiFirst.png");
  background-size: cover;
  background-position: center;
  height: 55em;
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

.btn-secondary > img {
  margin-left: 10px;
}

</style>
