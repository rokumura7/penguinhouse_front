<template>
  <div>
    <img :class="getSize" :src="src" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

type Size = 's' | 'm' | 'l'

export default Vue.extend({
  name: 'Logo',
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: 'm',
    } as PropOptions<Size>,
  },
  computed: {
    getSize(): String {
      if (this.size === 's') return 'h-8'
      if (this.size === 'l') return 'h-24'
      return 'h-16'
    },
  },
})
</script>
