<template>
  <slot />
</template>

<script setup lang="ts">
  import { onUnmounted, provide } from 'vue'
  import { useToast } from '../composables/useToast'
  import { toastKey } from '../constants/injectionKeys'

  const toastApi = useToast()

  provide(toastKey,  toastApi)

  onUnmounted(() => {
    toastApi.removeAllToast
  })
</script>