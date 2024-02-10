// import { ToastType } from "./ToastType";

export interface Toast {
  type: ToastType
  message: string
  duration: number
}

export interface ToastAPI {
  add: () => void,
  remove: (toast: Toast) => void,
  removeAll: () => void
}

export type ToastType = 'info' | 'success' | 'error'
