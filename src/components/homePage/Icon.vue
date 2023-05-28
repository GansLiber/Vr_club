<template>
  <div class='container_icon'>
    <div class='bgIcon'></div>
    <div>
      <img :src='iconImg' alt='men' class='gicon'>
      <p class='icon_text' v-html='iconText'></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kursIcon',
  props: {
    iconImg: {},
    iconText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.container_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.bgIcon {
  width: 307px;
  height: 220px;
  background: #26B7E2;
  filter: blur(75px);
  border-radius: 15px;

}

.container_icon > div:nth-child(2) {
  position: absolute;
  text-align: center;
}

.icon_text {
  color: white;
}

.gicon {
  margin-bottom: 10px;
}
</style>
