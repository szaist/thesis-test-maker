import { QuestionTypes } from '~/app/constants/QuestionTypes'

export interface CreateQuestionRequest {
    testId: number
    text: string
    type: QuestionTypes
}
