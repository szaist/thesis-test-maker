<script setup lang="ts">
import { CourseResponse } from '~/app/contracts/course/CourseResponse'
import { StudentFilledTests } from '~/app/contracts/filling-test/StudentFilledTests'
import { TestResponse } from '~/app/contracts/test/TestResponse'
import { CourseRepositoryToken, FillTestRepositoryToken, TestRepositoryToken, useDependency } from '~/app/di'
import { CourseRepository } from '~/app/repositories/course/CourseRepository'
import { FillingTestRepository } from '~/app/repositories/filling-test/FillingTestRepository'
import { TestRepository } from '~/app/repositories/test/TestRepository'

definePageMeta({ middleware: ['auth', 'student'] })

const courseRepository = useDependency<CourseRepository>(CourseRepositoryToken)
const testRepository = useDependency<TestRepository>(TestRepositoryToken)
const fillingTestRepository = useDependency<FillingTestRepository>(FillTestRepositoryToken)

const route = useRoute()
const router = useRouter()
const courseId = ref(route.params.id)

const course = ref<CourseResponse>()
const courseTests = ref<TestResponse[]>()
const allTests = ref<TestResponse[]>()
const filledTests = ref<StudentFilledTests[]>()

const isLoading = ref<boolean>(true)

const getCourseInfo = async () => {
    const id = Number(courseId.value.toString())
    const response = await courseRepository.findById(id)

    course.value = response

    getFilledTest()
}

const getCourseTests = async () => {
    const id = Number(courseId.value.toString())
    const response = await testRepository.findByCourseId(id)

    courseTests.value = response
}

const getAllTests = async () => {
    const response = await testRepository.list()

    allTests.value = response
}

const getFilledTest = async () => {
    const response = await fillingTestRepository.listStudentFilledTests(course.value?.id ?? 0)

    filledTests.value = response
}

const openFilledTest = (upcomingTestId: number) => {
    router.push({ path: `/test-results/student/${upcomingTestId}` })
}

onMounted(() => {
    isLoading.value = true
    getCourseInfo()
    getCourseTests()
    getAllTests()

    isLoading.value = false
})
</script>

<template>
    <div class="max-w-5xl w-full mx-auto mt-4" keep-alive>
        <Card>
            <template #title>{{ course?.name }}</template>
            <template #subtitle>{{ course?.description }}</template>
            <template #content>
                <h2 class="text-3xl font-bold">Kitöltött tesztek</h2>
                <DataTable :value="filledTests" :loading="isLoading" size="small">
                    <Column field="upComingTest.test.title" header="Teszt neve"> </Column>
                    <Column field="upComingTest.course.name" header="Kurzus neve"> </Column>
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
                    <Column field="endDate" header="Befejezés időpontja">
                        <template #body="slotProps">
                            {{
                                new Date(slotProps.data.endDate).toLocaleDateString('default', {
                                    minute: 'numeric',
                                    hour: 'numeric',
                                })
                            }}
                        </template>
                    </Column>
                    <Column
                        header-style="width: 5rem; text-align: center"
                        body-style="text-align: center; overflow: visible"
                    >
                        <template #body="slotProps">
                            <Button
                                text
                                icon="pi pi-book"
                                rounded
                                :pt="{
                                    label: {
                                        class: 'hidden',
                                    },
                                }"
                                @click="() => openFilledTest(slotProps.data.upComingTest.id)"
                            />
                        </template>
                    </Column>
                    <template #empty> Nincsennek kiírt tesztjeid. </template>
                </DataTable>
            </template>
        </Card>
    </div>
</template>
