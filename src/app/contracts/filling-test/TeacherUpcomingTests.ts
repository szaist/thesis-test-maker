import { ROLES } from '~/app/constants/Roles'

export interface TeacherUpcomingTests {
    user: {
        id: number
        firstName: string
        lastName: string
        email: string
        role: ROLES
    }
    id: number
    submitted: boolean
    upComingTest: {
        course: {
            id: number
            name: string
            description: string
        }
        test: {
            id: number
            title: string
            description: string
        }
    }
    maxPoints: number
    reachedPoints: number
}
