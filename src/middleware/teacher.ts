import { ROLES } from '~/app/constants/Roles'
import { useAuthStore } from '~/store/auth'

export default defineNuxtRouteMiddleware(() => {
    const authStore = useAuthStore()

    if (!authStore.token) {
        return navigateTo({ path: '/auth/login' })
    } else if (ROLES.TEACHER !== authStore.authUser?.role) {
        return navigateTo({ path: '/' })
    }
})
