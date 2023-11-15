import { QuestionTypes } from '~/app/constants/QuestionTypes'

interface Answer {
    id: number
    text: string
    point: number
}

interface Question {
    text: string
    type: QuestionTypes
    Answers?: Answer[]
}

export interface SaveTestWithQuestionsRequest {
    Questions?: Question[]
}
