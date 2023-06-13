<template>
  <div class='error-container'>
    <p>Да что же это такое,<br>какая ошибка?!</p>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped>
.error-container {
  background-image: url('@/assets/error/error2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 55em;
  display: flex;
  justify-content: center;
  align-items: center;

}

p {
  font-size: 90px;
  text-align: center;
  color: #ffffff;
}
</style>
