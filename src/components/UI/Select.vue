<template>
  <select
    :value='modelValue'
    @input='updateInput'
    class='select form-group'
    :required='required'>
    <slot></slot>
  </select>
</template>
<script>
export default {
  name: 'kursSelect',

  props: {
    modelValue: [String, Number],
    required: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
<style scoped>
.select {
  width: 100%;
  height: 52px;
  background: #E4F7FF;
  border-radius: 25px;
  padding: 0 12px;
  font-size: 16px;
  outline: none;
  border: 2px solid #2a2020; /* Добавленная граница */
}

.form-group {
  margin-bottom: 1rem;
}
</style>