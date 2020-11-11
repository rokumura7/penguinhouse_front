<template>
  <input
    class="shadow border rounded w-full px-2 py-1 focus:outline-none focus:shadow-outline"
    :placeholder="placeholder"
    :type="type"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: true,
    },
  },
})
</script>
