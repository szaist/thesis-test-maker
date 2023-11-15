export interface UpsertAnswerRequest {
    id?: number
    questionId: number
    text: string
    point: number
}
