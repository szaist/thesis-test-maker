import { AnswerResponse } from '~/app/contracts/answers/AnswerResponse'
import { UpsertAnswerRequest } from '~/app/contracts/answers/UpsertAnswerRequest'

export interface AnswerRepository {
    findByQuestionId(): Promise<AnswerResponse[]>
    add(request: UpsertAnswerRequest): Promise<AnswerResponse>
    update(): Promise<AnswerResponse>
    delete(answerId: number): Promise<void>
}
