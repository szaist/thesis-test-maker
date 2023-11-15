import { UserResponse } from '../user/UserResponse'

export interface TestResponse {
    id: number
    ownerId: number
    user: UserResponse
    title: string
    description: string
}
