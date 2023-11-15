import { useAuthStore } from '~/store/auth'

export default defineNuxtRouteMiddleware((to) => {
    const authStore = useAuthStore()

    if (!['/auth/login', '/auth/register'].includes(to.path) && authStore.token) return navigateTo({ path: '/' })
})
