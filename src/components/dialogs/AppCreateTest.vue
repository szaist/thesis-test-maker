<script setup lang="ts">
import { CreateTestRequest } from '~/app/contracts/test/CreateTestRequest'
import { TestRepositoryToken, useDependency } from '~/app/di'
import { TestRepository } from '~/app/repositories/test/TestRepository'
import { useToastMessages } from '~/store/toast-message'

const dialogRef = inject('dialogRef') as any
const router = useRouter()

const testRepository = useDependency<TestRepository>(TestRepositoryToken)

const toastStore = useToastMessages()

const form = reactive<CreateTestRequest>({
    title: '',
    description: '',
})

const addTest = async () => {
    try {
        const response = await testRepository.create(form)
        toastStore.showSuccess({ message: 'Teszt hozzáadva.' })
        dialogRef.value.close()

        router.push({ path: `/test/my/${response.id}` })
    } catch (error) {
        toastStore.showError({ message: 'Hiba történt a teszt létrehozása közben!' })
    }
}
</script>

<template>
    <div>
        <form class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <label for="courseName">Teszt neve</label>
                <InputText id="courseName" v-model="form.title" />
            </div>
            <div class="flex flex-col gap-2">
                <label for="courseName">Leírás</label>
                <InputText id="courseName" v-model="form.description" />
            </div>
            <div class="flex justify-end mt-2">
                <Button label="Hozzáadás" @click="addTest" />
            </div>
        </form>
    </div>
</template>

<style scoped></style>
