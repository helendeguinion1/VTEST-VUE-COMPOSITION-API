<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen gap-4">
    <button class="bg-indigo-100 rounded-md border border-indigo-500 p-4" >
      SHOW INFO TOAST
    </button>

    <button class="bg-indigo-100 rounded-md border border-indigo-500 p-4" >
      SHOW SUCCESS TOAST
    </button>

    <button class="bg-indigo-100 rounded-md border border-indigo-500 p-4" >
      SHOW ERROR TOAST
    </button>
  </div>
</template>

<script setup lang="ts">
  import { useToast } from './composables/useToast';
  const toastApi = useToast()
</script>