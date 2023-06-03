<template>
  <kurs-dialog-window v-model:show='showWindow'>
    <kurs-login />
    <kurs-register />
    <kurs-text-multy-modal :text-modal='textConfirm' />
    <kurs-text-multy-modal :text-modal='textProtect' />
  </kurs-dialog-window>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
import KursLogin from '@/components/modalWindows/Login'
import KursRegister from '@/components/modalWindows/Register'
import KursTextMultyModal from '@/components/modalWindows/textMultyModal'

export default {
  name: 'kursMainModal',
  components: {KursTextMultyModal, KursRegister, KursLogin},
  data() {
    return {
      textConfirm: 'Вам отправлено подтверждение на почту',
      textProtect: 'Вам нужно сначала авторизироваться'
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