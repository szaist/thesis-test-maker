import { LoginRequest } from '~/app/contracts/auth/LoginRequest'
import { LoginResponse } from '~/app/contracts/auth/LoginResponse'
import { RegisterRequest } from '~/app/contracts/auth/RegisterRequest'
import { AuthRepository } from '~/app/repositories/auth/AuthRepository'
import { IHttpService } from '~/app/adapters/services/HttpService/HttpService'
import { ForgotPasswordRequest } from '~/app/contracts/auth/ForgotPasswordRequest'
import { ChangePasswordRequest } from 'app/contracts/auth/ChangePasswordRequest'

export default class DatabaseAuthRepository implements AuthRepository {
    private httpService: IHttpService

    constructor(httpService: IHttpService) {
        this.httpService = httpService
    }

    async changePassword(request: ChangePasswordRequest): Promise<void> {
        return await this.httpService.post('auth/change-password', request)
    }

    async forgotPassword(request: ForgotPasswordRequest): Promise<void> {
        return await this.httpService.post('auth/forgot-password', request)
    }

    async login(request: LoginRequest): Promise<LoginResponse> {
        return await this.httpService.post<LoginRequest, LoginResponse>('auth/signin', request)
    }

    async register(request: RegisterRequest): Promise<void> {
        return await this.httpService.post<RegisterRequest, void>('auth/signup', request)
    }
}
