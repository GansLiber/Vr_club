<template>
  <div class='main'>
    <div>
      <h1 style='color: white'>Админ Панель</h1>

      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout'
}
</script>

<style scoped>
.main {
  min-height: 55em;
  max-width: 115em;
  background-image: url('@/assets/admin/hack.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

}

.main > div {

}
</style>
