import { defineStore } from 'pinia'
import { useToast } from 'primevue/usetoast'

const toastAutoHideAfter = 5000

export enum ToastType {
    Success = 'success',
    Info = 'info',
    Warn = 'warn',
    Error = 'error',
}

export type ToastMessage = {
    summary: string
    detail: string
    severity: ToastType
    life: number
}

export type ShowToastParams = {
    message: string
    detail?: string
}

export const useToastMessages = defineStore('toast-messages', () => {
    const toast = useToast()

    const addMessage = (message: ToastMessage) => {
        toast.add(message)
    }

    const showInfo = ({ message, detail }: ShowToastParams) => {
        addMessage({
            severity: ToastType.Info,
            life: toastAutoHideAfter,
            summary: message,
            detail: detail ?? '',
        })
    }

    const showSuccess = ({ message, detail }: ShowToastParams) => {
        addMessage({
            severity: ToastType.Success,
            life: toastAutoHideAfter,
            summary: message,
            detail: detail ?? '',
        })
    }

    const showError = ({ message, detail }: ShowToastParams) => {
        addMessage({
            severity: ToastType.Error,
            life: toastAutoHideAfter,
            summary: message,
            detail: detail ?? '',
        })
    }

    const showWarn = ({ message, detail }: ShowToastParams) => {
        addMessage({
            severity: ToastType.Warn,
            life: toastAutoHideAfter,
            summary: message,
            detail: detail ?? '',
        })
    }

    return {
        showInfo,
        showSuccess,
        showWarn,
        showError,
    }
})
