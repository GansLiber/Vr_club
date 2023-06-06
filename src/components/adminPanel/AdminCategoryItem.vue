<template>
  <div class='main'>
    <p>{{ this.$route.params }}</p>
  </div>
</template>

<script>
export default {
  name: 'kursAdminCategoryItem'
}
</script>

<style scoped>
.main {
  min-width: 20em;
  min-height: 20em;
  background-color: #fff;
}
</style>