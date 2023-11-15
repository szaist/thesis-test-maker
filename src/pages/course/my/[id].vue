<script setup lang="ts">
import { CourseResponse } from '~/app/contracts/course/CourseResponse'
import { UserResponse } from '~/app/contracts/user/UserResponse'
import { CourseRepositoryToken, UserRepositoryToken, useDependency } from '~/app/di'
import { CourseRepository } from '~/app/repositories/course/CourseRepository'
import { UserRepository } from '~/app/repositories/user/UserRepository'

definePageMeta({ middleware: ['auth', 'teacher'] })

const courseRepository = useDependency<CourseRepository>(CourseRepositoryToken)
const userRepository = useDependency<UserRepository>(UserRepositoryToken)

const route = useRoute()
const courseId = Number(route.params.id)

const selectedCourse = ref<CourseResponse>()
const studentsInCourse = ref<UserResponse[]>()
const students = ref<UserResponse[]>()

const studentsNotInCourse = computed(
    () => students.value?.filter((s) => studentsInCourse.value?.findIndex((f) => f.id === s.id) === -1),
)

const getCourse = async () => {
    const response = await courseRepository.findById(courseId)

    selectedCourse.value = response
}

const getStudentsInCourse = async () => {
    const response = await courseRepository.listUsersInCourse(courseId)

    studentsInCourse.value = response
}

const getStudents = async () => {
    const response = await userRepository.getStudents()

    students.value = response
}

const removeStudentFromCourse = async (id: number) => {
    await courseRepository.disconnect(courseId, id)

    getStudentsInCourse()
}

const addStudentToCourse = async (id: number) => {
    await courseRepository.connect(courseId, id)

    const user = students.value?.find((u) => u.id === id)

    if (user) {
        studentsInCourse.value?.push(user)
    }
}

onMounted(() => {
    getCourse()
    getStudentsInCourse()
    getStudents()
})
</script>

<template>
    <div class="max-w-5xl w-full mx-auto mt-4">
        <Card>
            <template #title>Kurzus: {{ selectedCourse?.name }}</template>
            <template #content>
                <DataTable :value="studentsInCourse" data-key="id">
                    <Column field="email" header="Email"></Column>
                    <Column header="Név">
                        <template #body="slotProps">
                            {{ `${slotProps.data.firstName ?? ''} ${slotProps.data.lastName ?? ''}` }}
                        </template>
                    </Column>

                    <Column
                        header-style="width: 5rem; text-align: center"
                        body-style="text-align: center; overflow: visible"
                    >
                        <template #body="slotProps">
                            <Button
                                text
                                icon="pi pi-minus text-red-500"
                                rounded
                                :pt="{
                                    label: {
                                        class: 'hidden',
                                    },
                                }"
                                @click="() => removeStudentFromCourse(slotProps.data.id)"
                            />
                        </template>
                    </Column>
                    <template #empty> Nincsennek diákok hozzárendelve ehhez a kurzushoz. </template>
                </DataTable>
            </template>
        </Card>
        <Card class="mt-4">
            <template #title>Diákok</template>
            <template #content>
                <DataTable :value="studentsNotInCourse" data-key="id">
                    <Column field="email" header="Email"></Column>
                    <Column header="Név">
                        <template #body="slotProps">
                            {{ `${slotProps.data.firstName ?? ''} ${slotProps.data.lastName ?? ''}` }}
                        </template>
                    </Column>

                    <Column
                        header-style="width: 5rem; text-align: center"
                        body-style="text-align: center; overflow: visible"
                    >
                        <template #body="slotProps">
                            <Button
                                text
                                icon="pi pi-plus"
                                rounded
                                :pt="{
                                    label: {
                                        class: 'hidden',
                                    },
                                }"
                                @click="() => addStudentToCourse(slotProps.data.id)"
                            />
                        </template>
                    </Column>
                    <template #empty> Nincsennek diákok.</template>
                </DataTable>
            </template>
        </Card>
    </div>
</template>
