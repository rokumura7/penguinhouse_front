<template>
  <div class="h-full w-5/6 max-w-md">
    <div
      style="background-color: #6973a2"
      class="flex rounded-t pl-1 pr-3 py-2 text-4xl items-center justify-center"
    >
      <Logo src="pen.png" />
      <div class="font-bold text-white ml-3">Penguin House</div>
    </div>
    <div
      style="border-color: #6973a2"
      class="px-8 py-5 h-full border border-t-0 rounded-b"
    >
      <div class="mb-6">
        <Input placeholder="email" type="text" />
      </div>
      <div class="mb-6">
        <Input placeholder="password" type="password" />
      </div>
      <div class="w-full flex justify-end">
        <Button
          class="focus:outline-none focus:shadow-outline"
          label="sign in"
          type="primary"
          :on-click="signin"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/atoms/Button.vue'
import Logo from '@/components/atoms/Logo.vue'
import Input from '@/components/atoms/Input.vue'

export default Vue.extend({
  name: 'SigninForm',
  components: { Button, Logo, Input },
  methods: {
    signin() {
      // TODO:
    },
  },
})
</script>
