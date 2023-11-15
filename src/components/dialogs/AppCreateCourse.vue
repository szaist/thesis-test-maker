<script setup lang="ts">
import { inject } from 'vue'
import { CreateCourseRequest } from '~/app/contracts/course/CreateCourseRequest'
import { CourseRepositoryToken, useDependency } from '~/app/di'
import { CourseRepository } from '~/app/repositories/course/CourseRepository'
import { useToastMessages } from '~/store/toast-message'

const dialogRef = inject('dialogRef') as any
const router = useRouter()

const courseRepository = useDependency<CourseRepository>(CourseRepositoryToken)

const toastStore = useToastMessages()

const form = reactive<CreateCourseRequest>({
    name: '',
    description: '',
})

const addCourse = async () => {
    try {
        const course = await courseRepository.add(form)
        toastStore.showSuccess({ message: 'Kurzus sikeresen hozzáadva.' })
        closeDialog()
        router.push({ path: `/course/my/${course.id}` })
    } catch (error) {
        toastStore.showError({ message: 'Sikertelen kurzus hozzáadás!' })
    }
}

const closeDialog = () => {
    dialogRef.value.close()
}
</script>

<template>
    <div>
        <form class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <label for="courseName">Kurzus neve</label>
                <InputText id="courseName" v-model="form.name" />
            </div>
            <div class="flex flex-col gap-2">
                <label for="courseName">Leírás</label>
                <InputText id="courseName" v-model="form.description" />
            </div>
            <div class="flex justify-end mt-2">
                <Button label="Hozzáadás" @click="addCourse" />
            </div>
        </form>
    </div>
</template>

<style scoped></style>
