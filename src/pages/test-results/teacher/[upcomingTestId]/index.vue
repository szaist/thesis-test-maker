<script setup lang="ts">
import { TeacherUpcomingTests } from '~/app/contracts/filling-test/TeacherUpcomingTests'
import { FillingTestRepository } from '~/app/repositories/filling-test/FillingTestRepository'
import { FillTestRepositoryToken, useDependency } from '~/app/di'

import IconRefresh from '~/components/icons/IconRefresh.vue'
import IconBook from '~/components/icons/IconBook.vue'

definePageMeta({ middleware: ['auth', 'teacher'] })

const filledTestRepository = useDependency<FillingTestRepository>(FillTestRepositoryToken)

const router = useRouter()
const route = useRoute()
const isLoading = ref<boolean>(true)

const upcomingTestId = route.params.upcomingTestId

const whoFilled = ref<TeacherUpcomingTests[] | null>(null)

const getWhoFilledTheTest = async () => {
    isLoading.value = true
    const response = await filledTestRepository.listTeacherUpcomingTestFillers(Number(upcomingTestId))

    whoFilled.value = response

    isLoading.value = false
}

const openUpcomingTestResults = (userId: number) => {
    router.push({
        path: `/test-results/teacher/${upcomingTestId}/${userId}`,
    })
}

onMounted(() => {
    getWhoFilledTheTest()
})
</script>

<template>
    <div class="max-w-5xl w-full mx-auto mt-4">
        <Card>
            <template #title>Kiírt tesztjeim</template>
            <template #content>
                <DataTable :value="whoFilled" data-key="id" :loading="isLoading" size="small">
                    <Column field="" header="Kitöltő neve">
                        <template #body="slotProps">
                            {{ `${slotProps.data.user.lastName} ${slotProps.data.user.firstName}` }}
                        </template>
                    </Column>
                    <Column field="upComingTest.course.name" header="Kurzus neve"> </Column>
                    <Column header="Eredmény">
                        <template #body="slotProps">
                            {{ `${slotProps.data.reachedPoints} / ${slotProps.data.maxPoints}` }}
                        </template>
                    </Column>
                    <Column header="">
                        <template #header>
                            <div class="flex justify-end w-full">
                                <Button text @click="getWhoFilledTheTest"><IconRefresh /></Button>
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
                                @click="() => openUpcomingTestResults(slotProps.data.user.id)"
                            >
                                <IconBook />
                            </Button>
                        </template>
                    </Column>
                    <template #empty> Nincsennek tesztkitöltők. </template>
                </DataTable>
            </template>
        </Card>
    </div>
</template>
