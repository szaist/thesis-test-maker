import { defineStore } from 'pinia'
import { IHttpService } from '~/app/adapters/services/HttpService/HttpService'
import { UserResponse } from '~/app/contracts/user/UserResponse'
import { HttpServiceToken, UserRepositoryToken, useDependency } from '~/app/di'
import { UserRepository } from '~/app/repositories/user/UserRepository'

type AuthContext = {
    token: string | null
}

export const useAuthStore = defineStore('useAuthStore', () => {
    const httpService = useDependency<IHttpService>(HttpServiceToken)
    const authUser = ref<null | UserResponse>(null)
    const token = useCookie('token', {
        maxAge: 60 * 60 * 24,
    })

    const context = computed<AuthContext>(() => ({ token: token?.value || null }))

    const fetchUser = async () => {
        try {
            const users = useDependency<UserRepository>(UserRepositoryToken)

            if (!token.value) return

            authUser.value = await users.me()
        } catch (error) {
            token.value = null
        }
    }

    watch(
        context,
        (newValue) => {
            if (newValue.token !== null) {
                httpService.setToken(newValue.token!)

                fetchUser()
            }
        },
        { immediate: true },
    )

    return {
        token,
        authUser,
        fetchUser,
    }
})
