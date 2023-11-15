<script setup lang="ts">
import { useToastMessages } from '~/store/toast-message'
import { AuthRepositoryToken, useDependency } from '~/app/di'
import { AuthRepository } from '~/app/repositories/auth/AuthRepository'

definePageMeta({
    middlewares: 'unauthenticated',
})
const route = useRoute()
const router = useRouter()

const token = route.params.authToken.toString()

const authRepository = useDependency<AuthRepository>(AuthRepositoryToken)
const toastStore = useToastMessages()

const form = reactive({
    password: '',
    token,
})

const formSubmit = async () => {
    try {
        await authRepository.changePassword(form)

        toastStore.showInfo({ message: 'Jelszavad sikeresen megváltozott!' })

        router.push({
            path: '/auth/login',
        })
    } catch (error) {
        toastStore.showError({ message: 'Valami hiba történt az email kiküldésekor.' })
    }
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
            <template #title> Új jelszó megadása </template>
            <template #content>
                <form @submit.prevent="formSubmit">
                    <div class="">
                        <div class="flex flex-col gap-2 mt-2">
                            <label for="password">Jelszó</label>
                            <Password id="password" v-model="form.password" type="text" :feedback="false" toggle-mask />
                        </div>
                        <div class="flex justify-between mt-6">
                            <Button type="submit" label="Küldés" />
                        </div>
                    </div>
                </form>
            </template>
        </Card>
    </div>
</template>
