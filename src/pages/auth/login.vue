<script setup lang="ts">
import { AxiosPostError } from '~/app/adapters/services/ErrorHandlingService/AxiosErrorHandler'
import { AuthRepositoryToken, useDependency } from '~/app/di'
import { AuthRepository } from '~/app/repositories/auth/AuthRepository'
import { useAuthStore } from '~/store/auth'
import { useToastMessages } from '~/store/toast-message'

definePageMeta({
    middlewares: 'unauthenticated',
})

const authRepository = useDependency<AuthRepository>(AuthRepositoryToken)
const authStore = useAuthStore()
const toastStore = useToastMessages()

const router = useRouter()

const form = reactive({
    email: '',
    password: '',
})

const formErrors = ref<string[]>()

const formSubmit = async () => {
    try {
        const loginResponse = await authRepository.login(form)

        authStore.token = loginResponse.access_token

        toastStore.showSuccess({ message: 'Sikeres bejelentkezés!' })

        router.push({ path: '/' })
    } catch (error) {
        const { data } = error as AxiosPostError

        formErrors.value = !Array.isArray(data.message) ? [data.message] : data.message
    }
}

const redirectToRegister = () => {
    router.push({ path: '/auth/register' })
}

const redirectToForgotPassword = () => {
    router.push({ path: '/auth/forgot-password' })
}
</script>

<template>
    <div class="flex justify-center items-center">
        <Card
            :pt-options="{ mergeProps: true }"
            :pt="{
                root: {
                    class: ['w-[560px]'],
                },
                title: 'text-4xl mb-2',
            }"
        >
            <template #title> Bejelentkezés </template>
            <template #content>
                <form @submit.prevent="formSubmit">
                    <div>
                        <div class="flex flex-col gap-1 mb-2">
                            <InlineMessage v-for="(err, idx) in formErrors" :key="idx" severity="error">
                                {{ err }}
                            </InlineMessage>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="email">Email</label>
                            <InputText id="email" v-model="form.email" />
                        </div>
                        <div class="flex flex-col gap-2 mt-2">
                            <label for="password">Jelszó</label>
                            <Password id="password" v-model="form.password" type="text" :feedback="false" toggle-mask />
                        </div>
                        <div class="flex justify-between mt-6">
                            <Button text severity="text" label="Nincs még fiókod?" @click="redirectToRegister" />
                            <Button type="submit" label="Bejelentkezés" />
                        </div>
                        <div>
                            <Button text label="Elfelejtetted a jelszavad?" @click="redirectToForgotPassword" />
                        </div>
                    </div>
                </form>
            </template>
        </Card>
    </div>
</template>
