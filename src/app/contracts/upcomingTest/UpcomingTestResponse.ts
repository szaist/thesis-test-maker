import { CourseResponse } from '../course/CourseResponse'
import { TestResponse } from '../test/TestResponse'

export interface UpcomingTestResponse {
    id: number
    startDate: Date
    lastStartDate: Date
    course: CourseResponse
    test: TestResponse
}
