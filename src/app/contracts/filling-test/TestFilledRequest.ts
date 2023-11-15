import { UpcomingTestResponse } from '../upcomingTest/UpcomingTestResponse'
import { UserResponse } from '../user/UserResponse'

export interface TestFilledRequest {
    id: number
    startDate: Date
    user: UserResponse
    upComingTest: UpcomingTestResponse
}
