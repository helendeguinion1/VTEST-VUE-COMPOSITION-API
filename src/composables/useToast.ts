import { ref, Ref, onUnmounted } from 'vue'
import { Toast, ToastType}  from '../types/Toast'

export function useToast() {
  const toasts: Ref<Toast[]> = ref([]);

  function addToast(type: ToastType, message: string, duration: number) {
    const toast: Toast = { type, message, duration };
    toasts.value.push(toast);
    setTimeout(() => {
      removeToast(toast)
    }, duration);
  }

  // destroy opened toast based on the duration
  const removeToast = (toast: Toast) => {
    // get index of the passed toast
    const toastIndex = toasts.value.indexOf(toast);
    if (toastIndex > -1) {
      toasts.value.splice(toastIndex)
    }
  }
  // destroy all opened toast
  const removeAllToast = () => {
    toasts.value = [];
  }

  onUnmounted(() => removeAllToast())

  return { toasts, addToast, removeToast, removeAllToast }
}