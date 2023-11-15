import { UserResponse } from '~/app/contracts/user/UserResponse'

export interface UserRepository {
    me(): Promise<UserResponse>
    getStudents(): Promise<UserResponse[]>
}
