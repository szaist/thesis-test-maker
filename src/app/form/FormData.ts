import { QuestionTypes } from '../constants/QuestionTypes'

export type QuestionFormData = {
    question: string
    answers: string[]
    correctAnswers: string[]
}

export type Answer = {
    id: number
    text: string
    point: number
}

export type CheckboxForm = {
    id?: number
    text: string
    type: QuestionTypes
    QuestionImage: {
        id: number
        ownerId: number
        source: string
    }
    Answers: Answer[]
}

export type FillCheckboxForm = {
    text: string
    type: QuestionTypes
    QuestionImage: {
        id: number
        ownerId: number
        source: string
    }
    Answers: Answer[]
}

export type AnswerQuestion = {
    answerIds: number[]
}
