import { UpcomingTestRepository } from './UpcomingTestRepository'
import { IHttpService } from '~/app/adapters/services/HttpService/HttpService'
import { CreateUpcomingTestRequest } from '~/app/contracts/upcomingTest/CreateUpcomingTestRequest'
import { UpcomingTestResponse } from '~/app/contracts/upcomingTest/UpcomingTestResponse'

export class DatabaseUpcomingTestRepository implements UpcomingTestRepository {
    private httpService: IHttpService

    constructor(httpService: IHttpService) {
        this.httpService = httpService
    }

    async delete(upcomingTestId: number): Promise<void> {
        return await this.httpService.delete(`upcomingtest/${upcomingTestId}`)
    }

    async listOwned(): Promise<UpcomingTestResponse[]> {
        return await this.httpService.get<UpcomingTestResponse[]>('upcomingtest/owned')
    }

    async list(): Promise<UpcomingTestResponse[]> {
        return await this.httpService.get<UpcomingTestResponse[]>('upcomingtest?simple=true')
    }

    async findById(upcomingTestId: number): Promise<UpcomingTestResponse[]> {
        return await this.httpService.get<UpcomingTestResponse[]>(`upcomingtest/${upcomingTestId}`)
    }

    async findByCourseId(courseId: number): Promise<UpcomingTestResponse[]> {
        return await this.httpService.get<UpcomingTestResponse[]>(`upcomingtest/course/${courseId}`)
    }

    async create(request: CreateUpcomingTestRequest): Promise<UpcomingTestResponse> {
        return await this.httpService.post<CreateUpcomingTestRequest, UpcomingTestResponse>('upcomingtest', request)
    }
}
