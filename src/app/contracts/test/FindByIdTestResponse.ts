import { QuestionImage } from '../question/QuestionResponse'
import { QuestionTypes } from '~/app/constants/QuestionTypes'

interface Answer {
    id: number
    text: string
    point: number
}

interface Question {
    id: number
    text: string
    type: QuestionTypes
    QuestionImage: QuestionImage
    Answers?: Answer[]
}

export interface FindByIdTestResponse {
    id: number
    title: string
    description: string
    Questions?: Question[]
}
