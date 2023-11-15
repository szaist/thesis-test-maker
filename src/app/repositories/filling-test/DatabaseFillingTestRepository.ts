import { FillingTestRepository } from './FillingTestRepository'
import { FilledTestsResponse } from '~/app/contracts/filling-test/FilledTestsResponse'
import { IHttpService } from '~/app/adapters/services/HttpService/HttpService'
import { SubmitAnswerRequest } from '~/app/contracts/filling-test/SubmitAnswerRequest'
import { TestFilledRequest } from '~/app/contracts/filling-test/TestFilledRequest'
import { StudentGivenAnswerResponse } from '~/app/contracts/filling-test/StudentGivenAnswersReponse'
import { StudentFilledTests } from '~/app/contracts/filling-test/StudentFilledTests'
import { TeacherUpcomingTests } from '~/app/contracts/filling-test/TeacherUpcomingTests'
import { TeacherStudentAnswer } from '~/app/contracts/filling-test/TeacherStudentsAnswer'
import { UserResponse } from 'app/contracts/user/UserResponse'

export class DatabaseFillingTestRepository implements FillingTestRepository {
    private httpService: IHttpService

    constructor(httpService: IHttpService) {
        this.httpService = httpService
    }

    async getTeacherTestInfo(upcomingTestId: number, userId: number): Promise<TeacherUpcomingTests> {
        return await this.httpService.get(`fill/filled-tests/teacher/test-info/${upcomingTestId}/user/${userId}`)
    }

    async listTeacherWhoFilledTheTest(upcomingTestId: number): Promise<UserResponse[]> {
        return await this.httpService.get(`fill/users/upcomingtest/${upcomingTestId}`)
    }

    async getTestInfo(upcomingTestId: number): Promise<TeacherUpcomingTests> {
        return await this.httpService.get(`fill/filled-tests/student/test-info/${upcomingTestId}`)
    }

    async listStudentGivenAnswers(upcomingTestId: number): Promise<StudentGivenAnswerResponse[]> {
        return await this.httpService.get(`fill/filled-tests/student/upcomingtest/${upcomingTestId}`)
    }

    async listStudentFilledTests(courseId: number): Promise<StudentFilledTests[]> {
        return await this.httpService.get(`fill/filled-tests/student/course/${courseId}`)
    }

    async listTeacherUpcomingTestFillers(upcomingTestId: number): Promise<TeacherUpcomingTests[]> {
        return await this.httpService.get(`fill/filled-tests/teacher/upcomingtest/${upcomingTestId}`)
    }

    async listTeacherGetStudentsAnswer(upcomingTestId: number, userId: number): Promise<TeacherStudentAnswer[]> {
        return await this.httpService.get(`fill/filled-tests/teacher/upcomingtest/${upcomingTestId}/user/${userId}`)
    }

    async filledFindById(filledId: number): Promise<FilledTestsResponse> {
        return await this.httpService.get(`fill/filled/${filledId}`)
    }

    async submitAnswer(request: SubmitAnswerRequest): Promise<void> {
        return await this.httpService.post('fill/answer', request)
    }

    async startTest(upcomingTestId: number): Promise<TestFilledRequest> {
        return await this.httpService.post('fill/start-test', { upComingTestId: upcomingTestId })
    }

    async endTest(testFilledId: number): Promise<void> {
        return await this.httpService.post(`fill/end-test/${testFilledId}`, {})
    }
}
