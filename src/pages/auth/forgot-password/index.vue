<script setup lang="ts">
import { useToastMessages } from '~/store/toast-message'
import { AuthRepositoryToken, useDependency } from '~/app/di'
import { AuthRepository } from '~/app/repositories/auth/AuthRepository'

definePageMeta({
    middlewares: 'unauthenticated',
})

const authRepository = useDependency<AuthRepository>(AuthRepositoryToken)
const toastStore = useToastMessages()

const submitted = ref<boolean>(false)

const form = reactive({
    email: '',
})

const formSubmit = async () => {
    try {
        await authRepository.forgotPassword(form)
        submitted.value = true
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
            <template #title> Elfelejtett jelszó </template>
            <template #subtitle> Add meg az emailed és küldünk neked egy jelszóemlékeztetőt!</template>
            <template #content>
                <form @submit.prevent="formSubmit">
                    <div class="">
                        <InlineMessage v-if="submitted" severity="info" class="w-full mb-4">
                            Az emailt kiküldtük az általad megadott email címre.
                        </InlineMessage>
                        <div class="flex flex-col gap-2">
                            <label for="email">Email</label>
                            <InputText id="email" v-model="form.email" />
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
