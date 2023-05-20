
<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <!-- Логотип -->
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo1.png" alt="Logo" class="logo-img">
        <span class="logo-text">Three H Bucks</span>
      </a>
      <!-- Вкладки -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Цены</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Акции</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Бронь</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">О нас</a>
        </li>
      </ul>

      <!-- Личный кабинет и социальные сети -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="@/assets/user.svg" alt="user" class="logo-img">
            <span>Личный кабинет</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="@/assets/social_media/icon_vk.svg" alt="user" class="inst-img">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="@/assets/social_media/icon_telegram.svg" alt="user" class="inst-img">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="@/assets/social_media/icon_inst.svg" alt="user" class="inst-img">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Topbar'
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
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.navbar-nav .nav-item {
  margin-right: 15px;
}

.navbar-nav .nav-link {
  color: #fff;
  font-weight: bold;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #f00;
}

.navbar-nav.ml-auto .nav-link i {
  font-size: 20px;
  color: #fff;
  transition: color 0.3s ease;
}

.navbar-nav.ml-auto .nav-link:hover i {
  color: #f00;
}
</style>