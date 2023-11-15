import { UserResponse } from '~/app/contracts/user/UserResponse'
import { UserRepository } from '~/app/repositories/user/UserRepository'
import { IHttpService } from '~/app/adapters/services/HttpService/HttpService'

export default class DatabaseUserRepository implements UserRepository {
    private client: IHttpService

    constructor(apiClient: IHttpService) {
        this.client = apiClient
    }

    async me(): Promise<UserResponse> {
        return await this.client.get<UserResponse>('users/me')
    }

    async getStudents(): Promise<UserResponse[]> {
        return await this.client.get<UserResponse[]>('users/students')
    }
}
