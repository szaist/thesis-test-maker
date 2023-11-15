<script setup lang="ts">
import { QuestionRepository } from '~/app/repositories/question/QuestionRepository'
import { QuestionTypes } from '~/app/constants/QuestionTypes'
import { QuestionRepositoryToken, TestRepositoryToken, useDependency } from '~/app/di'
import { TestRepository } from '~/app/repositories/test/TestRepository'
import AppTestCheckbox from '~/components/test-components/AppTestCheckbox.vue'
import AppTestRadio from '~/components/test-components/AppTestRadio.vue'
import { useToastMessages } from '~/store/toast-message'

definePageMeta({ middleware: ['auth', 'teacher'] })

const toast = useToastMessages()

const testRepository = useDependency<TestRepository>(TestRepositoryToken)
const questionRepository = useDependency<QuestionRepository>(QuestionRepositoryToken)
const route = useRoute()

const isLoading = ref<boolean>(true)

const tests = ref()

const getTestInfos = async () => {
    try {
        isLoading.value = true
        const response = await testRepository.findById(Number(route.params.id))

        tests.value = response
    } catch (error) {}
    isLoading.value = false
}

const renderQuestions = computed(() => tests.value?.Questions ?? [])

const addCheckbox = () => {
    tests.value?.Questions.push({
        id: Number(Date.now()) * -1,
        Answers: [],
        text: '',
        type: QuestionTypes.SELECT_MORE,
        QuestionImage: null,
    })
}

const addRadio = () => {
    tests.value?.Questions.push({
        id: Number(Date.now()) * -1,
        Answers: [],
        text: '',
        type: QuestionTypes.SELECT_ONE,
        QuestionImage: null,
    })
}

const deleteQuestion = async (index: number) => {
    const question = tests.value.Questions[index]

    if (question?.id) {
        await questionRepository.delete(question.id)
    }
    tests.value.Questions = tests.value.Questions.filter((_: any, idx: number) => idx !== index)
}

const atLeastEveryWhereOneCorrectAnswer = computed(
    () => tests.value?.Questions?.every((q: any) => q.Answers.some((a: any) => a.point !== 0)) ?? false,
)

const save = async () => {
    try {
        if (atLeastEveryWhereOneCorrectAnswer.value) {
            isLoading.value = true
            const response = await testRepository.save(Number(route.params.id), tests.value)

            tests.value = response

            toast.showSuccess({ message: 'Sikeres mentés!' })
        } else {
            toast.showError({ message: 'Kérlek adj meg minden kérdésnél legalább egy helyes választ.' })
        }
    } catch (error) {
        toast.showError({ message: 'Hiba történt a mentés során!' })
    }
    isLoading.value = false
}

onMounted(() => {
    getTestInfos()
})
</script>

<template>
    <div class="flex justify-center mt-2">
        <div class="max-w-5xl w-full flex flex-col gap-4">
            <div v-if="isLoading" class="flex-1 flex justify-center items-center">
                <ProgressSpinner />
            </div>

            <template v-for="(quest, idx) in renderQuestions" v-else :key="idx">
                <h2 class="text-xl text-white font-bold mt-4">
                    {{ `${idx + 1}. kérdés` }}
                </h2>
                <AppTestCheckbox
                    v-if="quest?.type == QuestionTypes.SELECT_MORE"
                    v-model="renderQuestions[idx]"
                    @delete-question="deleteQuestion(idx)"
                />
                <AppTestRadio
                    v-else-if="quest?.type == QuestionTypes.SELECT_ONE"
                    v-model="renderQuestions[idx]"
                    @delete-question="deleteQuestion(idx)"
                />
            </template>
            <div v-if="!isLoading" class="flex flex-col gap-2">
                <Button label="Több válaszlehetőséges kérdés hozzáadása" icon-class="pi pi-plus" @click="addCheckbox" />
                <Button label="Egy válaszlehetőséges kérdés hozzáadása" @click="addRadio" />
                <Button label="Mentés" class="my-5" @click="save" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
