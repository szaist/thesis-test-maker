import { CourseRepository } from './CourseRepository'
import { CourseResponse } from '~/app/contracts/course/CourseResponse'
import { CreateCourseRequest } from '~/app/contracts/course/CreateCourseRequest'
import { IHttpService } from '~/app/adapters/services/HttpService/HttpService'
import { UserResponse } from '~/app/contracts/user/UserResponse'

export default class DatabaseCourseRepository implements CourseRepository {
    private httpService: IHttpService

    constructor(httpService: IHttpService) {
        this.httpService = httpService
    }

    async listUsersInCourse(courseId: number): Promise<UserResponse[]> {
        return await this.httpService.get<UserResponse[]>(`course/user/in/${courseId}`)
    }

    async listConnected(): Promise<CourseResponse[]> {
        return await this.httpService.get<CourseResponse[]>('course/connected')
    }

    async list(): Promise<CourseResponse[]> {
        return await this.httpService.get<CourseResponse[]>('course')
    }

    async listOwned(): Promise<CourseResponse[]> {
        return await this.httpService.get<CourseResponse[]>('course/owned')
    }

    async findById(courseId: number): Promise<CourseResponse> {
        return await this.httpService.get<CourseResponse>(`course/${courseId}`)
    }

    async connect(courseId: number, userId: number): Promise<void> {
        return await this.httpService.post(`course/${courseId}/user/${userId}`, {})
    }

    async disconnect(courseId: number, userId: number): Promise<void> {
        return await this.httpService.delete(`course/${courseId}/user/${userId}`)
    }

    async add(request: CreateCourseRequest): Promise<CourseResponse> {
        return await this.httpService.post<CreateCourseRequest, CourseResponse>('course', request)
    }
}
