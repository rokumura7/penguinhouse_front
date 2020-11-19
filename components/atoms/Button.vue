<template>
  <button class="font-semibold" :class="getStyle" @click="onClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Color, getColorSet } from '../../plugins/Colors'
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
    color: {
      type: String,
      required: false,
      default: 'default',
    } as PropOptions<Color>,
    onClick: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  computed: {
    getStyle(): String {
      const classes = []
      const colorSet = getColorSet(this.color)
      classes.push(colorSet.bg)
      classes.push(colorSet.bgHover)
      classes.push('text-white')
      switch (this.size) {
        case 'small':
          classes.push('py-1', 'px-2', 'text-sm')
          break
        default:
          classes.push('py-2', 'px-3')
      }
      classes.push(this.roundFull ? 'rounded-full' : 'rounded')

      return classes.join(' ')
    },
  },
})
</script>
