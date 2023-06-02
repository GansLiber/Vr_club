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
          <router-link class='nav-link' to='about'>О нас</router-link>
        </li>
      </ul>

      <!-- Логотип -->
      <router-link class='navbar-brand' to='/'>
        <img src='@/assets/logo1.png' alt='Logo' class='logo-img'>
        <h2 class='logo-text'>Three H Bucks</h2>
      </router-link>

      <!-- Личный кабинет и социальные сети -->
      <ul class='navbar-nav ml-auto'>
        <li class='nav-item'>
          <a class='nav-link' href='#'>
            <img src='@/assets/header/user.svg' alt='user' class='logo-img'>
            <router-link
              class='nav-link'
              v-if='loggedUser'
              style='display: inline; text-decoration: none'
              to='cabinet'>
              {{ loggedUser.login }}
            </router-link>
            <span v-else @click='showDialogLoginWindow'>Личный кабинет</span>
            <!--            <span  @click='showDialogLoginWindow'>Личный кабинет</span>-->
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
  <kurs-dialog-window v-model:show='dialogLoginVisible.value'>
    <kurs-login />
  </kurs-dialog-window>
  <kurs-dialog-window v-model:show='dialogRegisterVisible.value'>
    <kurs-register />
  </kurs-dialog-window>
  <kurs-dialog-window v-model:show='dialogConfirmVisible.value'>
    <kurs-text-multy-modal :text-modal='textConfirm' />
  </kurs-dialog-window>
  <kurs-dialog-window v-model:show='dialogProtectVisible.value'>
    <kurs-text-multy-modal :text-modal='textProtect' />
  </kurs-dialog-window>
</template>
<script>
import KursLogin from '@/components/modalWindows/Login'
import KursRegister from '@/components/modalWindows/Register'
import KursTextMultyModal from '@/components/modalWindows/textMultyModal'

export default {
  name: 'kursTopbar',

  components: {
    KursTextMultyModal,
    KursLogin,
    KursRegister
  },

  data() {
    return {
      textConfirm: 'Вам отправлено подтверждение на почту',
      textProtect: 'Вам нужно сначала авторизироваться'
    }
  },

  methods: {
    showDialogLoginWindow() {
      this.$store.commit('setSingleDialogVisible', this.dialogLoginVisible.name)
    }

  },

  computed: {
    dialogLoginVisible() {
      return this.$store.state.auth.dialogWindows[1]
    },
    dialogRegisterVisible() {
      return this.$store.state.auth.dialogWindows[0]
    },
    dialogConfirmVisible() {
      return this.$store.state.auth.dialogWindows[2]
    },
    dialogProtectVisible() {
      return this.$store.state.auth.dialogWindows[5]
    },
    loggedUser() {
      return this.$store.state.auth.currentUser
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
