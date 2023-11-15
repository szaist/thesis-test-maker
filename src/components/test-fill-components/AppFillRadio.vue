<script setup lang="ts">
import { AnswerQuestion, FillCheckboxForm } from '~/app/form/FormData'

const config = useRuntimeConfig()

type Props = {
    modelValue: FillCheckboxForm
}

const emit = defineEmits<{
    (e: 'update:answer', data: AnswerQuestion): void
    (e: 'update:modelValue', data: FillCheckboxForm): void
}>()

const props = defineProps<Props>()

const question = ref(props.modelValue.text)
const answers = ref(props.modelValue.Answers)

const checkedAnswers = ref<number>(-1)

const onUpdate = () => {
    nextTick(() => {
        emit('update:answer', returnData.value)
    })
}

watch(checkedAnswers, () => onUpdate())

const returnData = computed(() => ({
    answerIds: [checkedAnswers.value],
}))
</script>

<template>
    <Card>
        <template #title>
            {{ question }}
        </template>
        <template #content>
            <div class="flex items-center justify-center mb-4">
                <Image
                    v-if="props.modelValue.QuestionImage"
                    :src="`${config.public.API_BASE_URL}question/image/${props.modelValue.QuestionImage?.source}`"
                    width="500"
                />
            </div>
            <Panel header="Válaszok">
                <div class="flex flex-col gap-2">
                    <div v-for="(a, idx) in answers" :key="idx" class="flex items-center">
                        <RadioButton v-model="checkedAnswers" :value="a.id" @change="onUpdate" />
                        <label class="ml-4">{{ answers[idx].text }}</label>
                    </div>
                </div>
            </Panel>
        </template>
    </Card>
</template>
