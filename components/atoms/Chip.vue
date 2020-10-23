<template>
  <span
    class="text-white rounded-full uppercase px-2 py-1 text-xs font-bold mr-3"
    :class="getColor"
  >
    {{ label }}
  </span>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

type Color = 'primary' | 'warning' | 'danger'

export default Vue.extend({
  name: 'Chip',
  props: {
    label: {
      type: String,
      required: false,
      default: 'info',
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
    } as PropOptions<Color>,
  },
  computed: {
    getColor(): String {
      return this.color === 'danger'
        ? 'bg-red-500 hover:bg-red-600'
        : this.color === 'warning'
        ? 'bg-yellow-500 hover:bg-yellow-600'
        : 'bg-indigo-500 hover:bg-indigo-600'
    },
  },
})
</script>
