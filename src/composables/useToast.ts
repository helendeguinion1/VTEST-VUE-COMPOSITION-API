import { ref, Ref, onUnmounted } from 'vue'
import { Toast, ToastType}  from '../types/Toast'

export function useToast() {
  const toasts: Ref<Toast[]> = ref([]);

  function addToast(type: ToastType, message: string, duration: number) {
    const toast: Toast = { id: Date.now().toString(), type, message, duration };
    toasts.value.push(toast);
    setTimeout(() => {
      removeToast(toast.id)
    }, duration);
  }

  // destroy opened toast based on the duration
  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter(e => e.id != id);
  }
  // destroy all opened toast
  const removeAllToast = () => {
    toasts.value = [];
  }

  onUnmounted(() => removeAllToast())

  return { toasts, addToast, removeToast, removeAllToast }
}