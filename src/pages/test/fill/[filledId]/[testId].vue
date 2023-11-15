<script setup lang="ts">
import { QuestionTypes } from '~/app/constants/QuestionTypes'
import AnswerQuestionRequest from '~/app/contracts/answers/AnswerQuestionRequest'
import { FillTestRepositoryToken, TestRepositoryToken, UpcomingTestRepositoryToken, useDependency } from '~/app/di'
import { FillingTestRepository } from '~/app/repositories/filling-test/FillingTestRepository'
import { TestRepository } from '~/app/repositories/test/TestRepository'
import { UpcomingTestRepository } from '~/app/repositories/upcomingTest/UpcomingTestRepository'

import AppFillCheckbox from '~/components/test-fill-components/AppFillCheckbox.vue'
import AppFillRadio from '~/components/test-fill-components/AppFillRadio.vue'

definePageMeta({ middleware: ['auth', 'student'] })

const route = useRoute()
const router = useRouter()
const fillingTestRepository = useDependency<FillingTestRepository>(FillTestRepositoryToken)
const testRepository = useDependency<TestRepository>(TestRepositoryToken)
const upcomingTestRepository = useDependency<UpcomingTestRepository>(UpcomingTestRepositoryToken)

const test = ref()

const renderQuestions = computed(() => test.value?.Questions ?? [])

const filledId = Number(route.params.filledId)
const upcomingTestId = Number(route.params.testId)
const testId = ref<number>(-1)

const answers = ref<AnswerQuestionRequest[]>([])

const getTest = async () => {
    try {
        const filled = await fillingTestRepository.filledFindById(filledId)

        if (filled.submitted) router.back()

        const upcomingTest = await upcomingTestRepository.findById(upcomingTestId)
        const testResponse = await testRepository.findById(upcomingTest.test.id)

        testId.value = upcomingTest.test.id

        test.value = testResponse
    } catch (error) {
        router.replace({ path: '/upcoming-test' })
    }
}

const editAnswers = (questionId: number, answerIds: number[]) => {
    answers.value = answers.value.filter((a) => a.questionId !== questionId)

    answerIds.forEach((added) => {
        answers.value.push({ answerId: added, questionId, upcomingTestId })
    })
}

const endTest = async () => {
    try {
        for (const ans of answers.value) {
            await fillingTestRepository.submitAnswer(ans)
        }

        await fillingTestRepository.endTest(filledId)

        router.push({ path: '/upcoming-test' })
    } catch (error) {}
}

onMounted(() => {
    getTest()
})
</script>

<template>
    <div class="flex justify-center mt-2">
        <div class="max-w-5xl w-full flex flex-col gap-4">
            <template v-for="(q, indx) in renderQuestions" :key="indx">
                <AppFillCheckbox
                    v-if="q?.type === QuestionTypes.SELECT_MORE"
                    v-model="renderQuestions[indx]"
                    @update:answer="(data) => editAnswers(renderQuestions[indx].id, data.answerIds)"
                />
                <AppFillRadio
                    v-else-if="q?.type === QuestionTypes.SELECT_ONE"
                    v-model="renderQuestions[indx]"
                    @update:answer="(data) => editAnswers(renderQuestions[indx].id, data.answerIds)"
                />
            </template>
            <div>
                <Button label="Teszt befejezése" @click="endTest" />
            </div>
        </div>
    </div>
</template>
