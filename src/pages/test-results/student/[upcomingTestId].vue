<script setup lang="ts">
import { TeacherUpcomingTests } from '~/app/contracts/filling-test/TeacherUpcomingTests'
import { StudentGivenAnswerResponse } from '~/app/contracts/filling-test/StudentGivenAnswersReponse'
import { FillTestRepositoryToken, useDependency } from '~/app/di'
import { FillingTestRepository } from '~/app/repositories/filling-test/FillingTestRepository'

definePageMeta({ middleware: ['auth', 'student'] })

const fillTestRepository = useDependency<FillingTestRepository>(FillTestRepositoryToken)
const route = useRoute()

const config = useRuntimeConfig()

const checked = ref(true)
const notChecked = ref(false)

const upcomingTestId = route.params.upcomingTestId

const givenAnswers = ref<StudentGivenAnswerResponse[]>()
const testInfo = ref<TeacherUpcomingTests>()
// const isLoading = ref<boolean>(true)

const getGivenAnswers = async () => {
    const response = await fillTestRepository.listStudentGivenAnswers(Number(upcomingTestId))

    givenAnswers.value = response
}

const getTestInfo = async () => {
    const response = await fillTestRepository.getTestInfo(Number(upcomingTestId))

    testInfo.value = response
}

onMounted(() => {
    getGivenAnswers()
    getTestInfo()
})
</script>

<template>
    <div class="max-w-5xl w-full mx-auto mt-4">
        <Card>
            <template #title>
                <h1 class="text-3xl mb-4 text-center">{{ testInfo?.upComingTest.test.title }}</h1>
                <div class="flex flex-row justify-between">
                    <h2>Leadott válaszaid</h2>
                    <p>{{ testInfo?.reachedPoints }} / {{ testInfo?.maxPoints }} pont</p>
                </div>
            </template>
            <template #content>
                <Panel v-for="(question, idx) in givenAnswers" :key="idx" class="mb-4" :header="question.text">
                    <div class="flex items-center justify-center mb-4">
                        <Image
                            v-if="question.QuestionImage"
                            :src="`${config.public.API_BASE_URL}question/image/${question.QuestionImage?.source}`"
                            width="500"
                        />
                    </div>
                    <div v-for="ans in question.answers" :key="ans.id" class="w-auto">
                        <div
                            class="border-2 p-2 rounded-sm flex flex-row mb-2"
                            :class="[ans.point > 0 ? 'border-green-500' : 'border-red-500']"
                        >
                            <RadioButton v-if="ans.point > 0" v-model="checked" disabled :value="true" />
                            <RadioButton v-else v-model="notChecked" disabled />
                            <div class="flex justify-between flex-1">
                                <label class="ml-2"> {{ ans.text }}</label>
                                <p>{{ ans.point }} pont</p>
                            </div>
                        </div>
                    </div>
                </Panel>
            </template>
        </Card>
    </div>
</template>
