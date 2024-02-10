import { InjectionKey, Ref } from "vue";
import { ToastType, Toast } from "../types/Toast";

export const toastKey: InjectionKey<{
  toasts: Ref<Toast[]>;
  addToast: (type: ToastType, message: string, duration: number) => void;
  removeToast: (toast: Toast) => void;
  removeAllToast: () => void
}> = Symbol('useToast');