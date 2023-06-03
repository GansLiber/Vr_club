<template>
  <div class='categoryIn'>
    <p>Категория {{ $route.params.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'kursAdminCategory'
}
</script>

<style scoped>
.categoryIn {
  height: 55em;
}

p {
  color: white;
}
</style>