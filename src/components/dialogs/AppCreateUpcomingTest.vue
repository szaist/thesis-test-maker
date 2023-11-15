<script setup lang="ts">
import { CourseResponse } from '~/app/contracts/course/CourseResponse'
import { TestResponse } from '~/app/contracts/test/TestResponse'
import { CreateUpcomingTestRequest } from '~/app/contracts/upcomingTest/CreateUpcomingTestRequest'
import { CourseRepositoryToken, TestRepositoryToken, UpcomingTestRepositoryToken, useDependency } from '~/app/di'
import { CourseRepository } from '~/app/repositories/course/CourseRepository'
import { TestRepository } from '~/app/repositories/test/TestRepository'
import { UpcomingTestRepository } from '~/app/repositories/upcomingTest/UpcomingTestRepository'
import { useToastMessages } from '~/store/toast-message'

const dialogRef = inject('dialogRef') as any

const toastStore = useToastMessages()

const testRepository = useDependency<TestRepository>(TestRepositoryToken)
const courseRepository = useDependency<CourseRepository>(CourseRepositoryToken)
const upcomingRepository = useDependency<UpcomingTestRepository>(UpcomingTestRepositoryToken)

const testValues = ref<Number[]>([])
const courseValues = ref<Number[]>([])
const startDateValue = ref(new Date())
const endDateValue = ref(new Date())

const isLoading = ref<boolean>(true)
const myTests = ref<TestResponse[]>()
const myCourses = ref<CourseResponse[]>()

const tests = computed(() => myTests.value ?? [])
const courses = computed(() => myCourses.value ?? [])

const getMyTest = async () => {
    try {
        isLoading.value = true
        const response = await testRepository.listOwned()

        myTests.value = response
    } catch (error) {}

    isLoading.value = false
}

const getMyCourses = async () => {
    try {
        isLoading.value = true
        const response = await courseRepository.listOwned()

        myCourses.value = response
    } catch (error) {}

    isLoading.value = false
}

const addUpcomingTest = async () => {
    try {
        await courseValues.value.forEach(async (cId) => {
            await testValues.value.forEach(async (tId) => {
                await upcomingRepository.create({
                    testId: tId,
                    courseId: cId,
                    lastStartDate: endDateValue.value,
                    startDate: startDateValue.value,
                } as CreateUpcomingTestRequest)
            })
        })

        dialogRef.value.close()
        toastStore.showInfo({ message: 'A tesztek kiírása sikeres!' })
    } catch (error) {
        toastStore.showError({ message: 'Hiba történt a tesztek kiírása során!' })
    }
}

onMounted(() => {
    getMyTest()
    getMyCourses()
})
</script>

<template>
    <div>
        <form class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <label for="courselist">Kurzusok listája</label>
                <MultiSelect
                    id="courselist"
                    v-model="courseValues"
                    :options="courses"
                    option-label="name"
                    option-value="id"
                    empty-message="Nincs elérhető kurzus"
                    empty-selection-message="Nincs kurzus kiválasztva"
                    placeholder="Válassz a kurzusok közül"
                />
            </div>
            <div class="flex flex-col gap-2">
                <label for="testlist">Tesztek listája</label>
                <MultiSelect
                    id="testlist"
                    v-model="testValues"
                    :options="tests"
                    option-label="title"
                    option-value="id"
                    empty-message="Nincs elérhető teszt"
                    empty-selection-message="Nincs teszt kiválasztva"
                    placeholder="Válassz a tesztek közül"
                >
                </MultiSelect>
            </div>
            <div class="flex flex-col gap-2">
                <label for="">Teszt kitöltésének kezdő időpontja</label>
                <Calendar v-model="startDateValue" show-time hour-format="24" show-icon />
            </div>
            <div class="flex flex-col gap-2">
                <label for="">Teszt kitöltésének határideje</label>
                <Calendar v-model="endDateValue" show-time hour-format="24" show-icon />
            </div>
            <div class="flex justify-end mt-2">
                <Button label="Kiírás" @click="addUpcomingTest"></Button>
            </div>
        </form>
    </div>
</template>
