import { QuestionTypes } from '~/app/constants/QuestionTypes'
import { TestResponse } from '~/app/contracts/test/TestResponse'

export interface QuestionResponse {
    id: number
    testId: number
    test: TestResponse
    text: string
    type: QuestionTypes
}

export interface QuestionImage {
    id: number
    questionId: number
    source: string
    ownerId: number
}
