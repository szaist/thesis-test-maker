import { QuestionTypes } from '~/app/constants/QuestionTypes'

interface AnswerDto {
    id?: number
    point: number
    text: string
}

export interface SaveQuestionRequest {
    Answers: AnswerDto[]
    testId: number
    text: string
    type: QuestionTypes
}

export interface SaveQuestionResponse {
    id: number
    text: string
    type: QuestionTypes
    Answers: AnswerDto[]
}
