import 'reflect-metadata'
import { DependencyContainer, InjectionToken, container, instanceCachingFactory } from 'tsyringe'
import { AuthRepository } from './repositories/auth/AuthRepository'
import DatabaseAuthRepository from './repositories/auth/DatabaseAuthRepository'
import { IHttpService } from './adapters/services/HttpService/HttpService'
import { AxiosHttpClient } from './adapters/services/HttpService/AxiosHttpClient'
import { UserRepository } from './repositories/user/UserRepository'
import DatabaseUserRepository from './repositories/user/DatabaseUserRepository'
import { CourseRepository } from './repositories/course/CourseRepository'
import DatabaseCourseRepository from './repositories/course/DatabaseCourseRepository'
import { TestRepository } from './repositories/test/TestRepository'
import DatabaseTestRepository from './repositories/test/DatabaseTestRepository'
import { UpcomingTestRepository } from './repositories/upcomingTest/UpcomingTestRepository'
import { DatabaseUpcomingTestRepository } from './repositories/upcomingTest/DatabaseUpcomingTestRepository'
import { FillingTestRepository } from './repositories/filling-test/FillingTestRepository'
import { DatabaseFillingTestRepository } from './repositories/filling-test/DatabaseFillingTestRepository'
import { QuestionRepository } from './repositories/question/QuestionRepository'
import DatabaseQuestionRepository from './repositories/question/DatabaseQuestionRepository'
import { AnswerRepository } from './repositories/answer/AnswerRepository'
import DatabaseAnswerRepository from './repositories/answer/DatabaseAnswerRepository'

export const HttpServiceToken = Symbol('HttpServiceToken')
export const AuthRepositoryToken = Symbol('AuthRepositoryToken')
export const UserRepositoryToken = Symbol('UserRepositoryToken')
export const CourseRepositoryToken = Symbol('CourseRepositoryToken')
export const TestRepositoryToken = Symbol('TestRepositoryToken')
export const UpcomingTestRepositoryToken = Symbol('UpcomingTestRepositoryToken')
export const FillTestRepositoryToken = Symbol('FillTestRepositoryToken')
export const QuestionRepositoryToken = Symbol('QuestionRepositoryToken')
export const AnswerRepositoryToken = Symbol('AnswerRepositoryToken')

export const useDependencyRegistration = () => {
    container.register<IHttpService>(HttpServiceToken, {
        useFactory: instanceCachingFactory<IHttpService>(() => new AxiosHttpClient()),
    })

    container.register<AuthRepository>(AuthRepositoryToken, {
        useFactory: instanceCachingFactory<DatabaseAuthRepository>(
            (container: DependencyContainer) => new DatabaseAuthRepository(container.resolve(HttpServiceToken)),
        ),
    })

    container.register<UserRepository>(UserRepositoryToken, {
        useFactory: instanceCachingFactory<DatabaseUserRepository>(
            (container: DependencyContainer) => new DatabaseUserRepository(container.resolve(HttpServiceToken)),
        ),
    })

    container.register<CourseRepository>(CourseRepositoryToken, {
        useFactory: instanceCachingFactory<DatabaseCourseRepository>(
            (container: DependencyContainer) => new DatabaseCourseRepository(container.resolve(HttpServiceToken)),
        ),
    })

    container.register<TestRepository>(TestRepositoryToken, {
        useFactory: instanceCachingFactory<DatabaseTestRepository>(
            (container: DependencyContainer) => new DatabaseTestRepository(container.resolve(HttpServiceToken)),
        ),
    })

    container.register<UpcomingTestRepository>(UpcomingTestRepositoryToken, {
        useFactory: instanceCachingFactory<DatabaseUpcomingTestRepository>(
            (container: DependencyContainer) => new DatabaseUpcomingTestRepository(container.resolve(HttpServiceToken)),
        ),
    })

    container.register<FillingTestRepository>(FillTestRepositoryToken, {
        useFactory: instanceCachingFactory<DatabaseFillingTestRepository>(
            (container: DependencyContainer) => new DatabaseFillingTestRepository(container.resolve(HttpServiceToken)),
        ),
    })

    container.register<QuestionRepository>(QuestionRepositoryToken, {
        useFactory: instanceCachingFactory<DatabaseQuestionRepository>(
            (container: DependencyContainer) => new DatabaseQuestionRepository(container.resolve(HttpServiceToken)),
        ),
    })

    container.register<AnswerRepository>(AnswerRepositoryToken, {
        useFactory: instanceCachingFactory<DatabaseAnswerRepository>(
            (container: DependencyContainer) => new DatabaseAnswerRepository(container.resolve(HttpServiceToken)),
        ),
    })
}

export const useDependency = <T>(key: InjectionToken<T>): T => {
    return container.resolve<T>(key)
}
