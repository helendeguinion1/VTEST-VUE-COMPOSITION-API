<template>
  <div class="flex flex-col">
     <div
      class="absolute h-full
        right-0 max-h-screen
        p-4 max-w-64 flex
        flex-col gap-4
        overflow-y-auto
        overflow-x-hidden">
      <transition-group name="slide-fade">
        <div
          v-for="(toast, i) in toastApi?.toasts.value"
          :key="i" :class="toastClass(toast.type)">
          {{ toast.message }}
        </div>
      </transition-group>
      </div>
    <div class="flex flex-col items-center justify-center w-screen h-screen gap-4">
      <button
      class="bg-indigo-100 rounded-md border border-indigo-500 p-4"
        @click="toastApi?.addToast('info', 'This is an info toast', 3000)">
        SHOW INFO TOAST
      </button>

      <button
        class="bg-indigo-100 rounded-md border border-indigo-500 p-4"
        @click="toastApi?.addToast('success', 'This is an success toast', 3000)">
        SHOW SUCCESS TOAST
      </button>

      <button
        class="bg-indigo-100 rounded-md border border-indigo-500 p-4"
        @click="toastApi?.addToast('error', 'This is an error toast', 3000)">
        SHOW ERROR TOAST
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { inject } from 'vue'
  import { toastKey } from './constants/injectionKeys'
  import { ToastType } from './types/Toast';

  const toastApi = inject(toastKey);

  // toast class based on type
  const toastClass = (type: ToastType): string => {
  switch (type) {
    case 'info':
      return 'p-3 rounded-lg border border-solid border-indigo-500 bg-indigo-100 w-full';
    case 'success':
      return 'p-3 rounded-lg border border-solid border-indigo-500 bg-indigo-100 w-full bg-green-100 border-green-500';
    case 'error':
      return 'p-3 rounded-lg border border-solid border-indigo-500 bg-indigo-100 w-full bg-red-100 border-red-500';
    default:
      return '';
  }
}

</script>
  
<style scoped>
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.1s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

</style>