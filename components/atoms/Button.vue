<template>
  <button :class="getStyle(type)" @click="onClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
type Type = 'info' | 'warning' | 'danger'

export default Vue.extend({
  name: 'Button',

  props: {
    label: {
      type: String,
      required: true,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'default',
    },
    onClick: {
      type: Function,
      required: false,
      default: undefined,
    },
  },
  computed: {
    getStyle() {
      return function (type: Type): String {
        switch (type) {
          case 'info':
            return 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
          case 'warning':
            return 'bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
          case 'danger':
            return 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          default:
            return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        }
      }
    },
  },
})
</script>
