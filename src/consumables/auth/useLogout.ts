import { useConfirm } from 'primevue/useconfirm'
import { useAuthStore } from '~/store/auth'
import { useToastMessages } from '~/store/toast-message'

export const useLogout = () => {
    const confirm = useConfirm()
    const authStore = useAuthStore()
    const toastStore = useToastMessages()

    const router = useRouter()

    return () => {
        confirm.require({
            group: 'logout',
            message: 'Biztosan szeretnél kijelentkezni?',
            header: 'Kijelentkezés',
            acceptClass: 'ml-2 dialog-logout-accept-btn',
            accept: () => {
                toastStore.showInfo({ message: 'Sikeresen kijelentkeztél!' })

                authStore.token = null
                authStore.authUser = null

                router.push({ path: '/auth/login' })
            },
            reject: () => {},
        })
    }
}
