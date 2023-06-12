<template>
  <kurs-dialog-window v-model:show='showWindow'>
    <kurs-login v-show='dialogWindows[1].value' />
    <kurs-register v-show='dialogWindows[0].value' />

    <kurs-text-multy-modal
      :text-modal='textConfirm'
      v-show='dialogWindows[2].value' />
    <kurs-text-multy-modal
      :text-modal='textProtect'
      v-show='dialogWindows[5].value' />
    <kurs-text-multy-modal :text-modal='textSuccessConfirm' v-show='dialogWindows[3].value' />
    <kurs-text-multy-modal :text-modal='textFailureConfirm' v-show='dialogWindows[4].value' />
    <kurs-text-multy-modal :text-modal='textFailureData' v-show='dialogWindows[6].value' />
    <kurs-text-multy-modal
      :text-modal='textProtectAdmin'
      v-show='dialogWindows[7].value' />
    <kurs-re-capcha v-show='dialogWindows[8].value'></kurs-re-capcha>
  </kurs-dialog-window>
</template>

<script>
import {mapState} from 'vuex'
import KursLogin from '@/components/modalWindows/Login'
import KursRegister from '@/components/modalWindows/Register'
import KursTextMultyModal from '@/components/modalWindows/textMultyModal'

export default {
  name: 'kursMainModal',
  components: {KursTextMultyModal, KursRegister, KursLogin},
  data() {
    return {
      textConfirm: 'Вам отправлено подтверждение на почту',
      textProtect: 'Вам нужно сначала авторизироваться',
      textProtectAdmin: 'Вы не администратор (пока что)',
      textSuccessConfirm: 'Ожидайте, перезвоним сию минуту',
      textFailureConfirm: 'Ошибка, неправильно ввели данные',
      textFailureData: 'Ошибка'
    }
  },
  computed: {
    ...mapState({
      dialogWindows: state => state.dialogWindow.dialogWindows,
      showWindow: state => state.dialogWindow.showWindow
    })
  }
}
</script>

<style scoped>

</style>