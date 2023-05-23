<template>
  <header class='navbar navbar-expand-lg navbar-dark bg-dark'>
    <div class='container'>
      <!-- Вкладки -->
      <ul class='navbar-nav mr-auto'>
        <li class='nav-item'>
          <a class='nav-link' href='#'>Цены</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#'>Акции</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#'>Бронь</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#'>О нас</a>
        </li>
      </ul>

      <!-- Логотип -->
      <a class='navbar-brand' href='#'>
        <img src='@/assets/logo1.png' alt='Logo' class='logo-img'>
        <h2 class='logo-text'>Three H Bucks</h2>
      </a>

      <!-- Личный кабинет и социальные сети -->
      <ul class='navbar-nav ml-auto'>
        <li class='nav-item'>
          <a class='nav-link' href='#' @click='showDialog'>
            <img src='@/assets/user.svg' alt='user' class='logo-img'>
            <span>Личный кабинет</span>
          </a>
        </li>
        <li class='social-media'>
          <ul class='social-media-list'>
            <li class='social-media-item'>
              <a class='social-media-link' href='#'>
                <img src='@/assets/header/social_media/icon_vk.svg' alt='VK' class='social-media-img'>
                <i class='fab fa-facebook-f'></i>
              </a>
            </li>
            <li class='social-media-item'>
              <a class='social-media-link' href='#'>
                <img src='@/assets/header/social_media/icon_telegram.svg' alt='Telegram' class='social-media-img'>
                <i class='fab fa-twitter'></i>
              </a>
            </li>
            <li class='social-media-item'>
              <a class='social-media-link' href='#'>
                <img src='@/assets/header/social_media/icon_inst.svg' alt='Instagram' class='social-media-img'>
                <i class='fab fa-instagram'></i>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
  <kurs-dialog-window v-model:show='dialogVisible'>
    <kurs-login />
  </kurs-dialog-window>
</template>
<script>
import KursLogin from '@/components/Login'
import KursDialogWindow from '@/components/UI/DialogWindow'

export default {
  name: 'kursTopbar',

  components: {
    KursDialogWindow,
    KursLogin
  },

  data() {
    return {
      dialogVisible: false
    }
  },

  methods: {
    showDialog() {
      this.dialogVisible = true
    }
  }
}
</script>
<style scoped>
/* Стили для шапки */
.navbar {
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.logo-img {
  max-height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  margin-bottom: 0;
}

.navbar-nav .nav-item {
  margin-right: 15px;
}

.navbar-nav .nav-link {
  color: #fff;
  font-weight: bold;
  transition: color 0.3s ease;
  font-size: 20px;
}

.navbar-nav .nav-link:hover {
  color: #26B7E2;
}

.navbar-nav.ml-auto .nav-link i {
  font-size: 20px;
  color: #fff;
  transition: color 0.3s ease;
}

.navbar-nav.ml-auto .nav-link:hover i {
  color: #f00;
}

.social-media {
  display: flex;
  justify-content: space-between;
}

.social-media-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.social-media-item {
  margin-right: 10px;

}

.social-media-link {
  display: flex;
  align-items: center;
}

.social-media-img {

  margin-right: 5px;
}

</style>