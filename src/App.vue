<template>
  <Topbar/>
  <Home/>
  <router-view/>
</template>

<script>

import Topbar from "@/components/Topbar";
import Home from "@/views/Home";
export default {
  components:{
    Home,
    Topbar
  }
}

</script>

<style>


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
