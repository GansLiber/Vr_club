<template>
  <div class='twice_home_screen'>
    <div class='v-container v-container-1'>
      <kurs-icon :icon-text='"Первый гачи клуб <br> в России"'
                 :icon-img="require('@/assets/home/icons/twiceHomeScreen/men.svg')" />
    </div>
    <div class='v-container v-container-2'>
      <kurs-icon :icon-text='"15% скидка при регистрации\n"+
      "+ баллы за посещение клуба"'
                 :icon-img="require('@/assets/home/icons/twiceHomeScreen/sale.svg')" />
    </div>
    <div class='v-container v-container-3'>
      <kurs-icon :icon-text='"Играйте с друзьями!\n"+
      "Более 1000 гачиистов прошло \n"+
      "этот опыт в нашем клубе"'
                 :icon-img="require('@/assets/home/icons/twiceHomeScreen/people.svg')" />
    </div>
    <div class='v-container v-container-4'>
      <kurs-icon :icon-text='"Уникальные ощущения \n"+
      "и непередаваемые впечатления"'
                 :icon-img="require('@/assets/home/icons/twiceHomeScreen/joystick.svg')" />
    </div>
    <div class='v-container v-container-5'>
      <kurs-icon :icon-text='"Топовые игры\n"+
      "на рынке"'
                 :icon-img="require('@/assets/home/icons/twiceHomeScreen/head.svg')" />
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
}

.v-container-1 {
  order: -1; /* Первый блок */
}

.v-container-2 {
  order: 0;
}

.v-container-3 {
  order: 1; /* Третий блок */
}

.v-container-4 {
  order: 2;
}

.v-container-5 {
  order: 3; /* Пятый блок */
}
</style>