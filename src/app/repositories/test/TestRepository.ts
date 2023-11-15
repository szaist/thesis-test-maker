import { CreateTestRequest } from '~/app/contracts/test/CreateTestRequest'
import { DeleteTestRequest } from '~/app/contracts/test/DeleteTestRequest'
import { FindByIdTestResponse } from '~/app/contracts/test/FindByIdTestResponse'
import { SaveTestWithQuestionsRequest } from '~/app/contracts/test/SaveTestWithQuestionsRequest'
import { TestResponse } from '~/app/contracts/test/TestResponse'
import { UpdateTestRequest } from '~/app/contracts/test/UpdateTestRequest'

export interface TestRepository {
    findById(testId: number): Promise<FindByIdTestResponse>
    findByCourseId(courseId: number): Promise<TestResponse[]>
    list(): Promise<TestResponse[]>
    listOwned(): Promise<TestResponse[]>
    create(request: CreateTestRequest): Promise<TestResponse>
    update(testId: number, request: UpdateTestRequest): Promise<TestResponse>
    delete(request: DeleteTestRequest): Promise<void>
    save(testId: number, request: SaveTestWithQuestionsRequest): Promise<FindByIdTestResponse>
}
