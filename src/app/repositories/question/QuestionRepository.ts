import { CreateQuestionRequest } from '~/app/contracts/question/CreateQuestionRequest'
import { QuestionImage, QuestionResponse } from '~/app/contracts/question/QuestionResponse'
import { SaveQuestionRequest, SaveQuestionResponse } from '~/app/contracts/question/SaveQuestionRequest'
import { UpdateQuestionRequest } from '~/app/contracts/question/UpdateQuestionRequest'

export interface QuestionRepository {
    save(request: SaveQuestionRequest): Promise<SaveQuestionResponse>
    findByTestId(testId: number): Promise<QuestionResponse[]>
    findById(questionId: number): Promise<QuestionResponse>
    create(request: CreateQuestionRequest): Promise<QuestionResponse>
    delete(questionId: number): Promise<void>
    update(questionId: number, request: UpdateQuestionRequest): Promise<QuestionResponse>
    uploadImage(questionId: number, formData: FormData): Promise<QuestionImage>
}
