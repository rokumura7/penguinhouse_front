<template>
  <span
    class="text-white rounded-full uppercase px-2 py-1 text-xs font-bold"
    :class="getColor"
  >
    {{ label }}
  </span>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Color, getColorSet } from '../../plugins/Colors'

export default Vue.extend({
  name: 'Chip',
  props: {
    label: {
      type: String,
      default: 'info',
    },
    color: {
      type: String,
      default: 'primary',
    } as PropOptions<Color>,
  },
  computed: {
    getColor(): String {
      const colorSet = getColorSet(this.color)
      return colorSet.bg
    },
  },
})
</script>
