<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm'
import IconBook from '~/components/icons/IconBook.vue'
import { UpcomingTestResponse } from '~/app/contracts/upcomingTest/UpcomingTestResponse'
import { UpcomingTestRepositoryToken, useDependency } from '~/app/di'
import { UpcomingTestRepository } from '~/app/repositories/upcomingTest/UpcomingTestRepository'

import IconRefresh from '~/components/icons/IconRefresh.vue'
import IconTrash from '~/components/icons/IconTrash.vue'

definePageMeta({ middleware: ['auth', 'teacher'] })

const router = useRouter()

const upcomingRepository = useDependency<UpcomingTestRepository>(UpcomingTestRepositoryToken)

const isLoading = ref<boolean>(true)
const confirm = useConfirm()

const myUpcomingTests = ref<UpcomingTestResponse[]>()

const getUpcomingTests = async () => {
    try {
        isLoading.value = true
        const response = await upcomingRepository.listOwned()

        myUpcomingTests.value = response
    } catch (error) {}

    isLoading.value = false
}

const openUpcomingTestResults = (_id: number) => {
    router.push({
        path: `/test-results/teacher/${_id}`,
    })
}

const deleteUpcomingTest = (_id: number) => {
    confirm.require({
        header: 'Kiírt teszt törlése',
        message: 'Biztosan kiszeretnéd törölni ezt a kiírt tesztet?',
        acceptClass: 'dialog-red-btn ml-2',
        accept: async () => {
            try {
                await upcomingRepository.delete(_id)

                myUpcomingTests.value = myUpcomingTests.value?.filter((u) => u.id !== _id)
            } catch (error) {}
        },
    })
}

onMounted(() => {
    getUpcomingTests()
})
</script>

<template>
    <div class="max-w-5xl w-full mx-auto mt-4">
        <Card>
            <template #title>Kiírt tesztjeim</template>
            <template #content>
                <DataTable :value="myUpcomingTests" data-key="id" :loading="isLoading" size="small">
                    <Column field="test.title" header="Teszt neve"> </Column>
                    <Column field="course.name" header="Kurzus neve"> </Column>
                    <Column field="startDate" header="Kezdés időpontja">
                        <template #body="slotProps">
                            {{
                                new Date(slotProps.data.startDate).toLocaleDateString('default', {
                                    minute: 'numeric',
                                    hour: 'numeric',
                                })
                            }}
                        </template>
                    </Column>
                    <Column field="lastStartDate" header="Utolsó elindítás időpontja">
                        <template #body="slotProps">
                            {{
                                new Date(slotProps.data.lastStartDate).toLocaleDateString('default', {
                                    minute: 'numeric',
                                    hour: 'numeric',
                                })
                            }}
                        </template></Column
                    >
                    <Column header="">
                        <template #body="slotProps">
                            <Button
                                text
                                rounded
                                :pt="{
                                    label: {
                                        class: 'hidden',
                                    },
                                }"
                                @click="() => openUpcomingTestResults(slotProps.data.id)"
                            >
                                <IconBook />
                            </Button>
                        </template>
                    </Column>
                    <Column header="">
                        <template #header>
                            <div class="flex justify-end w-full">
                                <Button text @click="getUpcomingTests"><IconRefresh /></Button>
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
                                @click="() => deleteUpcomingTest(slotProps.data.id)"
                            >
                                <IconTrash class="text-red-600" />
                            </Button>
                        </template>
                    </Column>
                    <template #empty> Nincsennek kiírt tesztjeid. </template>
                </DataTable>
            </template>
        </Card>
    </div>
</template>
