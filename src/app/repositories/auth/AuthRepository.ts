import { ChangePasswordRequest } from '~/app/contracts/auth/ChangePasswordRequest'
import { ForgotPasswordRequest } from '~/app/contracts/auth/ForgotPasswordRequest'
import { LoginRequest } from '~/app/contracts/auth/LoginRequest'
import { LoginResponse } from '~/app/contracts/auth/LoginResponse'
import { RegisterRequest } from '~/app/contracts/auth/RegisterRequest'

export interface AuthRepository {
    login(request: LoginRequest): Promise<LoginResponse>
    register(request: RegisterRequest): Promise<void>
    forgotPassword(request: ForgotPasswordRequest): Promise<void>
    changePassword(request: ChangePasswordRequest): Promise<void>
}
