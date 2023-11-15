import 'reflect-metadata'
import { useDependencyRegistration } from '~/app/di'

export default defineNuxtPlugin(() => {
    useDependencyRegistration()
})
