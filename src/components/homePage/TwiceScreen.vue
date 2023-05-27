<template>
  <div class='twice_home_screen'>
    <kurs-icon />
  </div>
</template>

<script>
import kursIcon from '@/components/homePage/Icon'

export default {
  name: 'kursTwiceScreen',
  components: {kursIcon}

}
</script>

<style scoped>
.twice_home_screen {
  background-image: url("@/assets/home/bgiTwice.png");
  background-size: cover;
  background-position: center;
  height: 65em;
  padding: 0 1em;
  display: flex;
  align-items: center;
}
</style>