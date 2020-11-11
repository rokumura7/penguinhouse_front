<template>
  <div
    style="font-family: 'Comic Sans MS'"
    class="flex justify-center items-center min-h-screen"
  >
    <SigninForm />
  </div>
</template>

<script lang="ts">
import SigninForm from '@/components/molecules/SigninForm.vue'

export default {
  components: { SigninForm },
}
</script>
