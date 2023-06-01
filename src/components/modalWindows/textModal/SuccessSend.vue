<template>
  <div class='confirm-form'>
    <h2>Ожидайте, перезвоним через секунду</h2>
  </div>
</template>

<script>
export default {
  name: 'kursSuccessSend'
}
</script>

<style scoped>
h2 {
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

.register-link > router-link {
  align-items: flex-end;
}

.confirm-form {
  max-width: 300px;
  min-width: 300px;
  margin: 0 auto;
}
</style>