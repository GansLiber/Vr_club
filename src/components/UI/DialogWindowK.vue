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
export default {
  name: 'DialogWindowK',
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
  }
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
  height: 60px;
}

.close:hover {
  box-shadow: black;
}

.close-img {
  height: 45px;
}

.content {
  margin: auto;
  background-color: rgba(4, 20, 45, 1);
  border-radius: 25px;
  min-width: 300px;
  min-height: 50px;
  width: 500px;
  height: 400px;
  padding: 20px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>