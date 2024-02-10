export interface Toast {
  id: string
  type: ToastType
  message: string
  duration: number
}

export type ToastType = 'info' | 'success' | 'error'
