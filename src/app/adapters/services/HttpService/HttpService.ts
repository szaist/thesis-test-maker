export interface HttpHeaders {
    [key: string]: string
}

export interface RequestConfig {
    headers: HttpHeaders
}

export interface IHttpService {
    post<TRequest, TResponse>(path: string, object: TRequest, config?: RequestConfig): Promise<TResponse>

    patch<TRequest, TResponse>(path: string, object: TRequest): Promise<TResponse>

    put<TRequest, TResponse>(path: string, object: TRequest): Promise<TResponse>

    get<TResponse>(path: string): Promise<TResponse>

    delete<TResponse>(path: string): Promise<TResponse>

    setToken(token: string): void
}
