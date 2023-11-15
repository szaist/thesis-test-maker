import { QuestionImage } from '../question/QuestionResponse'
import { QuestionTypes } from '~/app/constants/QuestionTypes'

export interface TeacherStudentAnswer {
    id: number
    text: string
    type: QuestionTypes
    QuestionImage: QuestionImage
    answers: {
        id: number
        text: string
        point: number
    }[]
}
