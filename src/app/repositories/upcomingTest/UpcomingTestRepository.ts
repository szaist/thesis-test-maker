import { CreateUpcomingTestRequest } from '~/app/contracts/upcomingTest/CreateUpcomingTestRequest'
import { UpcomingTestResponse } from '~/app/contracts/upcomingTest/UpcomingTestResponse'

export interface UpcomingTestRepository {
    list(): Promise<UpcomingTestResponse[]>
    listOwned(): Promise<UpcomingTestResponse[]>
    findById(upcomingTestId: number): Promise<UpcomingTestResponse>
    findByCourseId(courseId: number): Promise<UpcomingTestResponse[]>
    create(request: CreateUpcomingTestRequest): Promise<UpcomingTestResponse>
    delete(upcomingTestId: number): Promise<void>
}
