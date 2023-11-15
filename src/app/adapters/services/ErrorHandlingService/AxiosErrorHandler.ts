export class AxiosPostError extends Error {
    public readonly data

    constructor(data: any) {
        super()
        this.data = data
    }
}

export class AxiosGetError extends Error {
    public readonly data

    constructor(data: any) {
        super()
        this.data = data
    }
}

export class AxiosDeleteError extends Error {
    public readonly data

    constructor(data: any) {
        super()
        this.data = data
    }
}

export class AxiosPutError extends Error {
    public readonly data

    constructor(data: any) {
        super()
        this.data = data
    }
}

export class AxiosPatchError extends Error {
    public readonly data

    constructor(data: any) {
        super()
        this.data = data
    }
}
