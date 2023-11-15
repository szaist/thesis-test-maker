import { ROLES } from '~/app/constants/Roles'

export interface UserResponse {
    id: number
    firstName: string
    lastName: string
    email: string
    role: ROLES
}
