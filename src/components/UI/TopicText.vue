<template>
  <p class='advantage-text'>{{ topText }}</p>
</template>

<script>
export default {
  props: {
    topText: {
      type: String,
      required: true
    }
  },
  name: 'kursTopicText'
}
</script>

<style scoped>
.advantage-text {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 113.19%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  margin: 2em;
}
</style>