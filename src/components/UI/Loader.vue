<template>
  <div class='vr-loader'>
    <div class='vr-loader-wrapper'>
      <div class='vr-loader-ring'></div>
      <div class='vr-loader-circle'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kursLoader'
}
</script>

<style>
.vr-loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.vr-loader-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  transform-style: preserve-3d;
  animation: vr-loader-rotate 2s infinite linear;
}

.vr-loader-ring,
.vr-loader-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-radius: 50%;
}

.vr-loader-ring {
  border-top-color: #007bff;
  border-bottom-color: #007bff;
  animation: vr-loader-spin 1s infinite ease-in-out;
}

.vr-loader-circle {
  border-left-color: #007bff;
  border-right-color: #007bff;
  animation: vr-loader-spin 2s infinite ease-in-out;
}

@keyframes vr-loader-spin {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

@keyframes vr-loader-rotate {
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
