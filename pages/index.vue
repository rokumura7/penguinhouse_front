<template>
  <div class="flex items-center text-center min-h-screen h-screen">
    <div class="w-full">
      <div class="flex justify-center">
        <Logo src="logo2.png" size="l" />
      </div>
      <h1 class="title block font-light tracking-widest">Penguin House</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.title {
  font-family: 'Comic Sans MS';
  color: #526488;
}
</style>
