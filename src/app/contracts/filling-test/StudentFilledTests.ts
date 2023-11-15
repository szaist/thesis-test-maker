export interface StudentFilledTests {
    startDate: string
    endDate: string
    submitted: string
    upComingTest: {
        id: number
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
