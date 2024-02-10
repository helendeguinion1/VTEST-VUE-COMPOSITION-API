export interface Toast {
  type: ToastType
  message: string
  duration: number
}

export type ToastType = 'info' | 'success' | 'error'
