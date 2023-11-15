import { CourseResponse } from '~/app/contracts/course/CourseResponse'
import { CreateCourseRequest } from '~/app/contracts/course/CreateCourseRequest'
import { UserResponse } from '~/app/contracts/user/UserResponse'

export interface CourseRepository {
    list(): Promise<CourseResponse[]>
    listConnected(): Promise<CourseResponse[]>
    listOwned(): Promise<CourseResponse[]>
    listUsersInCourse(courseId: number): Promise<UserResponse[]>
    findById(courseId: number): Promise<CourseResponse>
    connect(courseId: number, userId: number): Promise<void>
    disconnect(courseId: number, userId: number): Promise<void>
    add(request: CreateCourseRequest): Promise<CourseResponse>
}
