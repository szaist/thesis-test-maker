<script setup lang="ts">
import IconTrash from '~/components/icons/IconTrash.vue'
import IconPlus from '~/components/icons/IconPlus.vue'
import { QuestionTypes } from '~/app/constants/QuestionTypes'
import { AnswerRepositoryToken, QuestionRepositoryToken, useDependency } from '~/app/di'
import { QuestionRepository } from '~/app/repositories/question/QuestionRepository'
import { AnswerRepository } from '~/app/repositories/answer/AnswerRepository'
import { CheckboxForm } from '~/app/form/FormData'

const config = useRuntimeConfig()

type Props = {
    modelValue: CheckboxForm
}

const answerRepository = useDependency<AnswerRepository>(AnswerRepositoryToken)
const questionRepository = useDependency<QuestionRepository>(QuestionRepositoryToken)

const emit = defineEmits<{
    (e: 'update:modelValue', data: CheckboxForm): void
    (e: 'deleteQuestion'): void
}>()

const props = defineProps<Props>()

const id = ref<number>(-1)

const question = ref(props.modelValue.text)
const answers = ref(props.modelValue.Answers)
const questionImage = ref(props.modelValue.QuestionImage)
const image = ref()
const correctAnswers = ref(props.modelValue.Answers?.findIndex((a) => a.point === 1) ?? -1)

const addEmptyAnswer = () => {
    answers.value.push({ id: id.value, text: '', point: 0 })
    id.value--
}

const removeAnswer = async (index: number) => {
    const answerId = answers.value[index].id

    if (answerId > 0) {
        await answerRepository.delete(answerId)
    }

    answers.value = answers.value?.filter((_, idx) => index !== idx)
}

const onUpload = async (event: Event) => {
    const target = event.target as HTMLInputElement

    image.value = target.files?.[0]

    if (props.modelValue.id) {
        const form = new FormData()

        form.append('image', image.value)

        const value = await questionRepository.uploadImage(props.modelValue.id, form)

        questionImage.value = value
    }
}

const isDisabled = computed(() => !props.modelValue.id || props.modelValue.id < 0)

watch([...answers.value], () => {
    onUpdate()
})
watch(question, () => {
    onUpdate()
})

const onUpdate = () => {
    nextTick(() => {
        emit('update:modelValue', returnData.value)
    })
}

const returnData = computed(() => ({
    id: props.modelValue.id,
    text: question.value,
    type: QuestionTypes.SELECT_ONE,
    QuestionImage: questionImage.value,
    Answers: answers.value?.map((a, idx) => ({
        id: a.id,
        point: idx === correctAnswers.value ? 1 : 0,
        text: a.text,
    })),
}))
</script>

<template>
    <Card>
        <template #title>
            <InputText v-model="question" placeholder="Kérdés" class="w-full" />
        </template>
        <template #content>
            <div class="flex items-center justify-center mb-4">
                <Image
                    v-if="props.modelValue.QuestionImage"
                    :src="`${config.public.API_BASE_URL}question/image/${props.modelValue.QuestionImage?.source}`"
                    width="500"
                />
            </div>
            <Panel header="Helyes válaszok" class="mb-4">
                <div v-for="(a, idx) in answers" :key="idx" class="mb-3">
                    <RadioButton v-model="correctAnswers" :value="idx" @change="onUpdate" />
                    <label class="ml-4">{{ answers[idx].text.substring(0, 40) }}</label>
                </div>
            </Panel>
            <Panel header="Válaszok">
                <div class="flex flex-col gap-2">
                    <div v-for="(_, idx) in answers" :key="idx" class="flex items-center">
                        <InputText v-model="answers[idx].text" :placeholder="`Válasz ${idx + 1}`" class="w-full" />
                        <Button class="ml-2" severity="danger" rounded text @click="removeAnswer(idx)">
                            <IconTrash />
                        </Button>
                    </div>
                </div>
                <Button rounded class="mt-4" @click="addEmptyAnswer"> <IconPlus /> </Button>
            </Panel>
        </template>
        <template #footer>
            <div class="flex justify-between">
                <div class="flex justify-center items-center flex-col gap-2">
                    <input
                        id="myfile"
                        :disabled="isDisabled"
                        type="file"
                        name="myfile"
                        accept=".png, .jpg, .jpeg"
                        @change="onUpload"
                    />
                    <small>Mielőtt képet adhatnál hozzá kérlek mentsd el a tesztet.</small>
                </div>

                <Button text rounded severity="danger" @click="emit('deleteQuestion')">
                    <IconTrash />
                </Button>
            </div>
        </template>
    </Card>
</template>
