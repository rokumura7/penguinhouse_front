<template>
  <button class="font-semibold" :class="getStyle" @click="onClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
type ButtonType = 'primary' | 'warning' | 'danger' | 'black'
type ButtonSize = 'small' | 'normal'

export default Vue.extend({
  name: 'Button',

  props: {
    label: {
      type: String,
      required: true,
      default: '',
    },
    size: {
      type: String,
      required: false,
      default: undefined,
    } as PropOptions<ButtonSize>,
    roundFull: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: undefined,
    } as PropOptions<ButtonType>,
    onClick: {
      type: Function,
      required: false,
      default: undefined,
    },
  },
  computed: {
    getStyle(): String {
      const classes = []
      switch (this.type) {
        case 'primary':
          classes.push('bg-blue-500', 'text-white')
          break
        case 'warning':
          classes.push('bg-yellow-500', 'text-white')
          break
        case 'danger':
          classes.push('bg-red-500', 'text-white')
          break
        case 'black':
          classes.push('bg-gray-900', 'text-gray-100', 'hover:bg-gray-900')
          break
        default:
          classes.push('bg-white', 'text-gray-800', 'border-gray-400', 'border')
      }
      switch (this.size) {
        case 'small':
          classes.push('py-1 px-2 text-sm')
          break
        default:
          classes.push('py-2 px-3')
      }
      switch (this.roundFull) {
        case true:
          classes.push('rounded-full')
          break
        default:
          classes.push('rounded')
      }
      return classes.join(' ')
    },
  },
})
</script>
