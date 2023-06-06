<template>
  <div class='main'>
    <h1>Админ Панель</h1>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'AdminLayout',

}
</script>

<style scoped>
.main {
  min-height: 55em;
  max-width: 115em;
}
</style>