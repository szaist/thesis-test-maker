<script setup lang="ts">
import { CourseResponse } from '~/app/contracts/course/CourseResponse'
import { CourseRepositoryToken, useDependency } from '~/app/di'
import { CourseRepository } from '~/app/repositories/course/CourseRepository'
import IconCog from '~/components/icons/IconCog.vue'
import IconRefresh from '~/components/icons/IconRefresh.vue'
import { useToastMessages } from '~/store/toast-message'

definePageMeta({ middleware: ['auth', 'teacher'] })

const courseRepository = useDependency<CourseRepository>(CourseRepositoryToken)
const toastStore = useToastMessages()

const router = useRouter()
const isLoading = ref<boolean>(true)

const myCourses = ref<CourseResponse[]>()

const getMyCourses = async () => {
    try {
        isLoading.value = true
        const response = await courseRepository.listOwned()

        myCourses.value = response
    } catch (error) {
        toastStore.showError({ message: 'Nem sikerült betöltenünk a kurzusokat' })
    }

    isLoading.value = false
}

const openCourseInfo = (id: number) => {
    router.push({ path: `/course/my/${id}` })
}

onMounted(() => {
    getMyCourses()
})
</script>

<template>
    <div class="max-w-5xl w-full mx-auto mt-4">
        <Card>
            <template #title>Kurzusaim</template>
            <template #content>
                <DataTable :value="myCourses" data-key="id" size="small" :loading="isLoading">
                    <Column field="name" header="Név"></Column>
                    <Column field="description" header="Leírás"></Column>
                    <Column
                        header-style="width: 5rem; text-align: center"
                        body-style="text-align: center; overflow: visible"
                    >
                        <template #header>
                            <div class="flex justify-end w-full">
                                <Button text @click="getMyCourses"><IconRefresh /></Button>
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
                                @click="() => openCourseInfo(slotProps.data.id)"
                            >
                                <IconCog />
                            </Button>
                        </template>
                    </Column>
                    <template #empty> Nincsennek kurzusaid. </template>
                </DataTable>
            </template>
        </Card>
    </div>
</template>
