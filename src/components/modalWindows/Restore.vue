<template>
  <div class='confirm-form'>
    <h2>Восстановление пароля</h2>
    <form>
      <kursInput
        v-model.trim='confirm'
        type='text'
        name='text'
        placehold='Введите Email или номер'></kursInput>
      <kurs-button>Отправить</kurs-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'kursRestor',

  data() {
    return {
      confirm: ''
    }
  }
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