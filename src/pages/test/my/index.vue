<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm'
import { TestResponse } from '~/app/contracts/test/TestResponse'
import { TestRepositoryToken, useDependency } from '~/app/di'
import { TestRepository } from '~/app/repositories/test/TestRepository'
import IconCog from '~/components/icons/IconCog.vue'
import IconTrash from '~/components/icons/IconTrash.vue'
import { useToastMessages } from '~/store/toast-message'
import IconRefresh from '~/components/icons/IconRefresh.vue'

definePageMeta({ middleware: ['auth', 'teacher'] })

const testRepository = useDependency<TestRepository>(TestRepositoryToken)

const router = useRouter()
const toastStore = useToastMessages()
const confirm = useConfirm()

const isLoading = ref<boolean>(true)

const myTests = ref<TestResponse[]>()

const getMyTests = async () => {
    try {
        isLoading.value = true
        const response = await testRepository.listOwned()

        myTests.value = response
    } catch (error) {
        toastStore.showError({ message: 'Hiba történt a tesztek lekérése közben!' })
    }

    isLoading.value = false
}

const openTestInfo = (id: number) => {
    router.push({ path: `/test/my/${id}` })
}

const deleteTest = (_id: number) => {
    confirm.require({
        header: 'Teszt törlése',
        message: 'Biztosan szeretnéd törölni ezt a tesztet?',
        acceptClass: 'dialog-red-btn ml-2',
        accept: () => {
            try {
                testRepository.delete({ testId: _id })

                myTests.value = myTests.value?.filter((t) => t.id !== _id)

                toastStore.showSuccess({ message: 'Teszt sikeresen törölve!' })
            } catch (error) {
                toastStore.showError({ message: 'Hiba történt a teszt törlése során!' })
            }
        },
    })
}

onMounted(() => {
    getMyTests()
})
</script>

<template>
    <div class="max-w-5xl w-full mx-auto mt-4">
        <Card>
            <template #title>Tesztjeim</template>
            <template #content>
                <DataTable :value="myTests" data-key="id" :loading="isLoading" size="small">
                    <Column field="title" header="Név"></Column>
                    <Column field="description" header="Leírás"></Column>
                    <Column header="" body-style="width: 200px">
                        <template #header>
                            <div class="flex justify-end w-full">
                                <Button text @click="getMyTests"><IconRefresh /></Button>
                            </div>
                        </template>
                        <template #body="slotProps">
                            <Button
                                text
                                rounded
                                :pt="{
                                    label: {
                                        class: 'hidden',
                                    },
                                }"
                                @click="() => openTestInfo(slotProps.data.id)"
                            >
                                <IconCog />
                            </Button>
                            <Button
                                text
                                rounded
                                :pt="{
                                    label: {
                                        class: 'hidden',
                                    },
                                }"
                                @click="() => deleteTest(slotProps.data.id)"
                            >
                                <IconTrash class="text-red-600" />
                            </Button>
                        </template>
                    </Column>
                    <template #empty> Nincsennek tesztjeid. </template>
                </DataTable>
            </template>
        </Card>
    </div>
</template>
