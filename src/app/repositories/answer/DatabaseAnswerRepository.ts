import { AnswerRepository } from './AnswerRepository'
import { AnswerResponse } from '~/app/contracts/answers/AnswerResponse'
import { IHttpService } from '~/app/adapters/services/HttpService/HttpService'
import { UpsertAnswerRequest } from '~/app/contracts/answers/UpsertAnswerRequest'

export default class DatabaseAnswerRepository implements AnswerRepository {
    private _httpService: IHttpService

    constructor(httpService: IHttpService) {
        this._httpService = httpService
    }

    findByQuestionId(): Promise<AnswerResponse[]> {
        throw new Error('Method not implemented.')
    }

    async add(request: UpsertAnswerRequest): Promise<AnswerResponse> {
        return await this._httpService.post('/answers', request)
    }

    update(): Promise<AnswerResponse> {
        throw new Error('Method not implemented.')
    }

    async delete(answerId: number): Promise<void> {
        return await this._httpService.delete(`/answers/${answerId}`)
    }
}
