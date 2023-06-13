<template>
  <div class='captcha'>
    <div class='captcha-image' @click='refreshCaptcha'>
      <img :src='captchaUrl' alt='Captcha Image'>
    </div>
    <input type='text' v-model='userInput' placeholder='Введите текст с картинки'>
    <button @click='validateCaptcha'>Проверить</button>
    <p class='sideText' v-if='captchaValid'>Капча верна!</p>
    <p class='sideText' v-else-if='captchaInvalid'>Капча неверна, попробуйте еще раз.</p>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'kursReCapcha',
  data() {
    return {
      captchaUrl: '',
      captchaText: '',
      userInput: '',
      captchaValid: false,
      captchaInvalid: false
    }
  },
  mounted() {
    this.refreshCaptcha()
  },
  methods: {
    ...mapMutations(['submitCapcha', 'setSingleDialogVisible']),
    refreshCaptcha() {
      // Генерация случайной капчи
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let captchaText = ''
      for (let i = 0; i < 6; i++) {
        captchaText += chars.charAt(Math.floor(Math.random() * chars.length))
      }

      // Создание URL для изображения капчи
      this.captchaUrl = `https://via.placeholder.com/200x80?text=${captchaText}`

      this.captchaText = captchaText
      this.userInput = ''
      this.captchaValid = false
      this.captchaInvalid = false
    },
    validateCaptcha() {
      if (this.userInput === this.captchaText) {
        this.captchaValid = true
        this.captchaInvalid = false
        this.submitCapcha(true)
        this.setSingleDialogVisible(false)
      } else {
        this.captchaValid = false
        this.captchaInvalid = true
        this.submitCapcha(false)
      }
    }
  },
  computed: {}
}
</script>

<style>
.captcha {
  text-align: center;
  margin-top: 20px;
}

.captcha-image {
  margin-bottom: 10px;
}

.captcha input[type="text"] {
  width: 200px;
  margin-bottom: 10px;
}

.sideText {
  color: white;
}

.captcha button {
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

.captcha p {
  margin-top: 10px;
}
</style>
