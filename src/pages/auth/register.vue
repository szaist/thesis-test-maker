<script setup lang="ts">
import { AxiosPostError } from '~/app/adapters/services/ErrorHandlingService/AxiosErrorHandler'
import { AuthRepositoryToken, useDependency } from '~/app/di'
import { AuthRepository } from '~/app/repositories/auth/AuthRepository'
import { useToastMessages } from '~/store/toast-message'

definePageMeta({
    middlewares: 'unauthenticated',
})

const authRepository = useDependency<AuthRepository>(AuthRepositoryToken)
const toastStore = useToastMessages()

const router = useRouter()

const form = reactive({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
})

const formErrors = ref<string[]>()

const formSubmit = async () => {
    try {
        await authRepository.register(form)

        toastStore.showSuccess({ message: 'Sikeres regisztráció!' })

        router.push({
            path: '/auth/login',
        })
    } catch (error) {
        const { data } = error as AxiosPostError

        formErrors.value = !Array.isArray(data.message) ? [data.message] : data.message
    }
}

const redirectToLogin = () => {
    router.push({ path: '/auth/login' })
}
</script>

<template>
    <div class="flex justify-center items-center">
        <Card
            :pt="{
                root: {
                    class: [
                        'bg-white text-gray-700 shadow-md rounded-md w-[560px]',
                        'dark:bg-gray-900 dark:text-white ',
                    ],
                },
                title: 'text-4xl font-bold mb-2',
            }"
        >
            <template #title> Regisztráció </template>
            <template #content>
                <form @submit.prevent="formSubmit">
                    <div class="flex flex-col gap-2">
                        <div class="flex flex-col gap-1 mb-2">
                            <InlineMessage v-for="(err, idx) in formErrors" :key="idx" severity="error">
                                {{ err }}
                            </InlineMessage>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="firstName">Vezetéknév</label>
                            <InputText id="firstName" v-model="form.firstName" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="lastName">Keresztnév</label>
                            <InputText id="lastName" v-model="form.lastName" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="email">Email</label>
                            <InputText id="email" v-model="form.email" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="password">Jelszó</label>
                            <Password id="password" v-model="form.password" type="text" :feedback="false" toggle-mask />
                        </div>
                        <div class="flex justify-between mt-6">
                            <Button text severity="text" label="Van már fiókod?" @click="redirectToLogin" />
                            <Button type="submit" label="Regisztráció" />
                        </div>
                    </div>
                </form>
            </template>
        </Card>
    </div>
</template>
