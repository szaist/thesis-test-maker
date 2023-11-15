import { QuestionTypes } from '~/app/constants/QuestionTypes'

export interface UpdateQuestionRequest {
    id: number
    testId: number
    text: string
    type: QuestionTypes
}
