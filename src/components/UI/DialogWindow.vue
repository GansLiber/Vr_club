<template>
  <div class='dialog' v-if='show' @click.stop='hideDialog'>
    <div class='content' @click.stop>
      <div class='close' @click.stop='hideDialog'>
        <img src='@/assets/header/close.svg' alt='close' class='close-img'>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import KursLogin from '@/components/modalWindows/Login'
import KursRegister from '@/components/modalWindows/Register'

export default {
  name: 'kursDialogWindow',

  components: {
    components: {
      KursLogin,
      KursRegister
    }
  },

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  },
  computed: {}
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  position: fixed;
}

.close {
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  transition: transform 0.4s ease;

}


.close:hover {
  transform: rotate(90deg);
}


.close-img {
  height: 45px;
  transition: transform 0.3s ease;
}

.content {
  margin: auto;
  background-color: rgba(4, 20, 45, 1);
  border-radius: 25px;
  min-width: 300px;
  min-height: 50px;
  padding: 50px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>