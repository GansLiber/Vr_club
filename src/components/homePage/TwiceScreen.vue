<template>
  <div class='twice_home_screen'>

    <div class='icons top-icons'>
      <div class='v-container v-container-1'>
        <kurs-icon :icon-text='"Первый гачи клуб\n"+
        "в России"'
                   :icon-img="require('@/assets/home/icons/twiceHomeScreen/men.svg')" />
      </div>
      <kurs-topic-text :topText='topText' />
      <div class='v-container v-container-5'>
        <kurs-icon :icon-text='"Топовые игры\n"+
      "на рынке"'
                   :icon-img="require('@/assets/home/icons/twiceHomeScreen/head.svg')" />
      </div>
    </div>
    <div class='icons middle-icons'>
      <div class='v-container v-container-2'>
        <kurs-icon :icon-text='"15% скидка при регистрации\n"+
      "+ баллы за посещение клуба"'
                   :icon-img="require('@/assets/home/icons/twiceHomeScreen/sale.svg')" />
      </div>
      <div class='v-container v-container-4'>
        <kurs-icon :icon-text='"Уникальные ощущения \n"+
      "и непередаваемые впечатления"'
                   :icon-img="require('@/assets/home/icons/twiceHomeScreen/joystick.svg')" />
      </div>
    </div>
    <div class='v-container v-container-3'>
      <kurs-icon :icon-text='"Играйте с друзьями!\n"+
      "Более 1000 гачиистов прошло \n"+
      "этот опыт в нашем клубе"'
                 :icon-img="require('@/assets/home/icons/twiceHomeScreen/people.svg')" />
    </div>


  </div>
</template>

<script>
import kursIcon from '@/components/homePage/Icon'

export default {
  name: 'kursTwiceScreen',
  components: {kursIcon},
  data() {
    return {
      topText: 'Почему мы?'
    }
  }
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
  flex-direction: column;

}

.icons {
  display: flex;
  justify-content: space-between;
  padding-bottom: 6em;
}

.v-container {
  display: flex;
  align-items: center;
}

.v-container-1 {
  order: -1; /* Первый блок */
  margin-right: 5em;
}

.v-container-2 {
  order: 0;
  margin-right: 8em;
}

.v-container-3 {
  order: 1; /* Третий блок */
  /*margin-top: 5em;*/
}

.v-container-4 {
  order: 2;
  margin-left: 8em;
}

.v-container-5 {
  order: 3; /* Пятый блок */
  margin-left: 5em;
}

</style>