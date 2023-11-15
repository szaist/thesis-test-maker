import { QuestionRepository } from './QuestionRepository'
import { CreateQuestionRequest } from '~/app/contracts/question/CreateQuestionRequest'
import { QuestionImage, QuestionResponse } from '~/app/contracts/question/QuestionResponse'
import { UpdateQuestionRequest } from '~/app/contracts/question/UpdateQuestionRequest'
import { IHttpService } from '~/app/adapters/services/HttpService/HttpService'
import { SaveQuestionRequest, SaveQuestionResponse } from '~/app/contracts/question/SaveQuestionRequest'

export default class DatabsaeQuestionRepository implements QuestionRepository {
    private httpService: IHttpService

    constructor(httpService: IHttpService) {
        this.httpService = httpService
    }

    async uploadImage(questionId: number, formData: FormData): Promise<QuestionImage> {
        return await this.httpService.post(`question/image/${questionId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }

    async save(request: SaveQuestionRequest): Promise<SaveQuestionResponse> {
        return await this.httpService.post('question/save', request)
    }

    findByTestId(testId: number): Promise<QuestionResponse[]> {
        throw new Error('Method not implemented.')
    }

    findById(questionId: number): Promise<QuestionResponse> {
        throw new Error('Method not implemented.')
    }

    create(request: CreateQuestionRequest): Promise<QuestionResponse> {
        throw new Error('Method not implemented.')
    }

    async delete(questionId: number): Promise<void> {
        return await this.httpService.delete(`question/${questionId}`)
    }

    update(questionId: number, request: UpdateQuestionRequest): Promise<QuestionResponse> {
        throw new Error('Method not implemented.')
    }
}
