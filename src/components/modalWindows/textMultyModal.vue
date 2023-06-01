<template>
  <div class='confirm-form'>
    <h2>{{ textModal }}</h2>
  </div>
</template>

<script>
export default {
  name: 'kursTextMultyModal',
  props: {
    textModal: {
      type: String
    }
  },
  data() {
    return {}
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