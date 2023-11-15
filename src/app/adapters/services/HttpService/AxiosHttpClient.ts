import axios, { AxiosInstance } from 'axios'
import {
    AxiosGetError,
    AxiosPostError,
    AxiosDeleteError,
    AxiosPutError,
    AxiosPatchError,
} from '../ErrorHandlingService/AxiosErrorHandler'
import { IHttpService, RequestConfig } from './HttpService'

export class AxiosHttpClient implements IHttpService {
    private client: AxiosInstance
    private token: string | null = null

    protected createAxiosClient(): AxiosInstance {
        const config = useRuntimeConfig()

        return axios.create({
            baseURL: config.public.API_BASE_URL,
            responseType: 'json' as const,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                ...(this.token !== null && {
                    Authorization: `Bearer ${this.token}`,
                }),
            },
        })
    }

    constructor() {
        this.client = this.createAxiosClient()
    }

    setToken(token: string): void {
        this.token = token
        this.client.interceptors.request.clear()
        this.client.interceptors.request.use((config) => {
            config.headers.Authorization = `Bearer ${token}`

            return config
        })
    }

    async post<TRequest, TResponse>(
        path: string,
        payload: TRequest,
        config?: RequestConfig | undefined,
    ): Promise<TResponse> {
        try {
            const response = config
                ? await this.client.post<TResponse>(path, payload, config)
                : await this.client.post(path, payload)

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new AxiosPostError(error.response?.data)
            }
        }

        return {} as TResponse
    }

    async patch<TRequest, TResponse>(path: string, payload: TRequest): Promise<TResponse> {
        try {
            const response = await this.client.patch<TResponse>(path, payload)

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new AxiosPatchError(error.response?.data)
            }
        }

        return {} as TResponse
    }

    async put<TRequest, TResponse>(path: string, payload: TRequest): Promise<TResponse> {
        try {
            const response = await this.client.put<TResponse>(path, payload)

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new AxiosPutError(error.response?.data)
            }
        }

        return {} as TResponse
    }

    async get<TResponse>(path: string): Promise<TResponse> {
        try {
            const response = await this.client.get<TResponse>(path)

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new AxiosGetError(error.response?.data)
            }
        }

        return {} as TResponse
    }

    async delete<TResponse>(path: string): Promise<TResponse> {
        try {
            const response = await this.client.delete<TResponse>(path)

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new AxiosDeleteError(error.response?.data)
            }
        }

        return {} as TResponse
    }
}
