<template>
  <button class='myBtn'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'kursButton'
}
</script>

<style>
.myBtn {
  padding: 0.3em 2.15em;
  font-size: 1.5em;
  transition: background-color 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #26B7E2;
  color: #fff;

  border: 4px solid #FFFFFF;
  border-radius: 35px;
}

.myBtn:hover {
  background-color: #a20000;
  color: #fff;
}

.myBtn:active {

  background: #26B7E2;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.2);

}
</style>