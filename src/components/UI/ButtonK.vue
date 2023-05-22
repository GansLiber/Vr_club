<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonK"
}
</script>

<style scoped>
.btn {
  padding: 0.3em 1.7em;
  font-size: 1.5em;
  transition: background-color 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f00;
  color: #fff;

  border: 4px solid #FFFFFF;
  border-radius: 25px;
}

.btn:hover {
  background-color: #a20000;
  color: #fff;
}

.btn:active {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>