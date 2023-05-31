<template>
  <footer>
    <div class='info'>
      <div>
        <div class='inInfo'>
          <img src='@/assets/footer/marker.svg' alt=''>
          <p class='footText'>пр.Плюшкина 2, 0 этаж</p>
        </div>
        <div class='inInfo'>
          <img src='@/assets/footer/mail.svg' alt=''>
          <p class='footText'>Magtraher@pes.ru</p>
        </div>
        <div class='inInfo'>
          <img src='@/assets/footer/phone.svg' alt=''>
          <p class='footText'>+7(913)803-34-53</p>
        </div>
        <div class='inInfo'>
          <img src='@/assets/footer/time.svg' alt=''>
          <p class='footText'>ПН–ПТ 12:00–20:00</p>
        </div>
        <div class='inInfo'>
          <img src='@/assets/footer/backTime.svg' alt=''>
          <p class='footText'>СБ–ВС 11:00–21:00</p>
        </div>
      </div>
      <div class='under-text'>
        <p>© Three H bucks, 2021-2022</p>
      </div>
    </div>
    <iframe
      class='map'
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1070.5831038568274!2d84.95011206115078!3d56.46936057947929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4326935795d4e607%3A0x69045303fe283cfd!2sKFC!5e0!3m2!1sru!2sru!4v1685538682853!5m2!1sru!2sru'
      width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy'
      referrerpolicy='no-referrer-when-downgrade'>
    </iframe>
  </footer>
</template>

<script>
export default {
  name: 'kursFooter'
}
</script>

<style scoped>
footer {
  display: flex;
  background-color: #100e5b;
  border-radius: 30px;
}

.info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.inInfo {
  display: flex;
}

.map {
  width: 100%;
  height: 30em;
  border-radius: 0 30px 30px 0;
}

.footText {
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 109.19%;
  /* or 17px */
  letter-spacing: 0.11em;
  color: #FFFFFF;
}

img {
  height: 30px;
  width: 50px;
  /*height: 10%;*/
  /*width: 10%;*/
  padding-right: 10px;
  display: block;
}

.under-text {
  position: absolute;
  bottom: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 109.19%;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.5);
}


</style>