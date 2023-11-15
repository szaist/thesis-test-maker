import { UserResponse } from 'app/contracts/user/UserResponse'
import { FilledTestsResponse } from '~/app/contracts/filling-test/FilledTestsResponse'
import { StudentFilledTests } from '~/app/contracts/filling-test/StudentFilledTests'
import { StudentGivenAnswerResponse } from '~/app/contracts/filling-test/StudentGivenAnswersReponse'
import { SubmitAnswerRequest } from '~/app/contracts/filling-test/SubmitAnswerRequest'
import { TeacherStudentAnswer } from '~/app/contracts/filling-test/TeacherStudentsAnswer'
import { TeacherUpcomingTests } from '~/app/contracts/filling-test/TeacherUpcomingTests'
import { TestFilledRequest } from '~/app/contracts/filling-test/TestFilledRequest'

export interface FillingTestRepository {
    listStudentGivenAnswers(upcomingTestId: number): Promise<StudentGivenAnswerResponse[]>
    listStudentFilledTests(courseId: number): Promise<StudentFilledTests[]>
    getTestInfo(upcomingTestId: number): Promise<TeacherUpcomingTests>

    listTeacherUpcomingTestFillers(upcomingTestId: number): Promise<TeacherUpcomingTests[]>
    listTeacherGetStudentsAnswer(upcomingTestId: number, userId: number): Promise<TeacherStudentAnswer[]>
    listTeacherWhoFilledTheTest(upcomingTestId: number): Promise<UserResponse[]>
    getTeacherTestInfo(upcomingTestId: number, userId: number): Promise<TeacherUpcomingTests>

    submitAnswer(request: SubmitAnswerRequest): Promise<void>
    startTest(upcomingTestId: number): Promise<TestFilledRequest>
    endTest(upcomingTestId: number): Promise<void>
    filledFindById(filledId: number): Promise<FilledTestsResponse>
}
