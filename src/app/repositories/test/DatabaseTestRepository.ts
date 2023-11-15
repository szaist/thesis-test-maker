import { TestRepository } from './TestRepository'
import { IHttpService } from '~/app/adapters/services/HttpService/HttpService'
import { CreateTestRequest } from '~/app/contracts/test/CreateTestRequest'
import { DeleteTestRequest } from '~/app/contracts/test/DeleteTestRequest'
import { FindByIdTestResponse } from '~/app/contracts/test/FindByIdTestResponse'
import { SaveTestWithQuestionsRequest } from '~/app/contracts/test/SaveTestWithQuestionsRequest'
import { TestResponse } from '~/app/contracts/test/TestResponse'
import { UpdateTestRequest } from '~/app/contracts/test/UpdateTestRequest'

export default class DatabaseTestRepository implements TestRepository {
    private httpService: IHttpService

    constructor(httpService: IHttpService) {
        this.httpService = httpService
    }

    async save(testId: number, request: SaveTestWithQuestionsRequest): Promise<FindByIdTestResponse> {
        return await this.httpService.post(`/test/save/${testId}`, request)
    }

    async findById(testId: number): Promise<FindByIdTestResponse> {
        return await this.httpService.get<FindByIdTestResponse>(`test/${testId}`)
    }

    async findByCourseId(courseId: number): Promise<TestResponse[]> {
        return await this.httpService.get<TestResponse[]>(`test/course/${courseId}`)
    }

    async list(): Promise<TestResponse[]> {
        return await this.httpService.get<TestResponse[]>('test')
    }

    async listOwned(): Promise<TestResponse[]> {
        return await this.httpService.get<TestResponse[]>('test/owned')
    }

    async create(request: CreateTestRequest): Promise<TestResponse> {
        return await this.httpService.post<CreateTestRequest, TestResponse>('test', request)
    }

    async update(testId: number, request: UpdateTestRequest): Promise<TestResponse> {
        return await this.httpService.patch(`test/${testId}`, request)
    }

    async delete(request: DeleteTestRequest): Promise<void> {
        return await this.httpService.delete(`test/${request.testId}`)
    }
}
