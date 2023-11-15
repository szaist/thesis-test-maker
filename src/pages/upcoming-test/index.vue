<script setup lang="ts">
import { UpcomingTestResponse } from '~/app/contracts/upcomingTest/UpcomingTestResponse'
import { FillTestRepositoryToken, UpcomingTestRepositoryToken, useDependency } from '~/app/di'
import { UpcomingTestRepository } from '~/app/repositories/upcomingTest/UpcomingTestRepository'

import IconRefresh from '~/components/icons/IconRefresh.vue'
import IconPlay from '~/components/icons/IconPlay.vue'
import { FillingTestRepository } from '~/app/repositories/filling-test/FillingTestRepository'

definePageMeta({ middleware: ['auth', 'student'] })

const router = useRouter()

const upcomingTests = ref<UpcomingTestResponse[]>()
const isLoading = ref<boolean>(true)
const fillingTestRepository = useDependency<FillingTestRepository>(FillTestRepositoryToken)
const upcomingTestRepository = useDependency<UpcomingTestRepository>(UpcomingTestRepositoryToken)

const getUpcomingTest = async () => {
    try {
        isLoading.value = true
        const response = await upcomingTestRepository.list()
        upcomingTests.value = response
    } catch (error) {}

    isLoading.value = false
}

const isStartable = (startDate: Date, endDate: Date) => {
    const now = new Date()

    return now >= new Date(startDate) && now <= new Date(endDate)
}

const startTest = async (id: number) => {
    const test = upcomingTests.value?.find((u) => u.id === id)
    if (!test) return

    if (isStartable(test.startDate, test.lastStartDate)) {
        try {
            const response = await fillingTestRepository.startTest(id)

            router.push({
                path: `/test/fill/${response.id}/${test.id}`,
            })
        } catch (error) {}
    }
}

onMounted(() => {
    getUpcomingTest()
})
</script>

<template>
    <div class="max-w-5xl w-full mx-auto mt-4">
        <Card>
            <template #title>Számomra kiírt tesztek</template>
            <template #content>
                <DataTable :value="upcomingTests" data-key="id" :loading="isLoading" size="small">
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
                    <Column header="" body-style="width: 70px">
                        <template #header>
                            <Button text @click="getUpcomingTest"><IconRefresh /></Button>
                        </template>
                        <template #body="slotProps">
                            <div>
                                <Button
                                    :disabled="!isStartable(slotProps.data.startDate, slotProps.data.lastStartDate)"
                                    text
                                    rounded
                                    :pt="{
                                        label: {
                                            class: 'hidden',
                                        },
                                    }"
                                    @click="() => startTest(slotProps.data.id)"
                                >
                                    <IconPlay
                                        :class="{
                                            'text-gray-400': !isStartable(
                                                slotProps.data.startDate,
                                                slotProps.data.lastStartDate,
                                            ),
                                        }"
                                    />
                                </Button>
                            </div>
                        </template>
                    </Column>
                    <template #empty> Nincsennek kiírt tesztjeid. </template>
                </DataTable>
            </template>
        </Card>
    </div>
</template>
