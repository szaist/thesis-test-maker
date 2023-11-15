<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDialog } from 'primevue/usedialog'
import { useAuthStore } from '~/store/auth'
import { useLogout } from '~/consumables/auth/useLogout'
import { CourseRepositoryToken, useDependency } from '~/app/di'
import { CourseRepository } from '~/app/repositories/course/CourseRepository'
import { ROLES } from '~/app/constants/Roles'

const CreateCourse = defineAsyncComponent(() => import('~/components/dialogs/AppCreateCourse.vue'))
const CreateTest = defineAsyncComponent(() => import('~/components/dialogs/AppCreateTest.vue'))
const CreateUpcomingCourse = defineAsyncComponent(() => import('~/components/dialogs/AppCreateUpcomingTest.vue'))

const dialog = useDialog()

const showCreateCourseDialog = () => {
    dialog.open(CreateCourse, {
        props: {
            modal: true,
            header: 'Kurzus hozzáadás',
        },
        onClose: () => {},
    })
}
const showCreateTestDialog = () => {
    dialog.open(CreateTest, {
        props: {
            modal: true,
            header: 'Teszt létrehozása',
        },
        onClose: () => {},
    })
}

const showCreateUpcomingTestDialog = () => {
    dialog.open(CreateUpcomingCourse, {
        props: {
            modal: true,
            header: 'Teszt kurzushoz rendelése',
        },
        onClose: () => {},
    })
}

const logout = useLogout()

const authStore = useAuthStore()
const { token } = storeToRefs(authStore)
const router = useRouter()

const courseRepository = useDependency<CourseRepository>(CourseRepositoryToken)

type CourseMenuItem = {
    label: string
    command: () => void
}
const courses = reactive<CourseMenuItem[]>([])

const getConnectedCourses = async () => {
    try {
        courses.splice(0)

        const course = await courseRepository.listConnected()

        course.forEach((c) => {
            courses.push({
                label: c.name,
                command: () => {
                    router.push({ path: `/course/${c.id}` })
                },
            })
        })
    } catch (error) {}
}

onMounted(() => {
    if (authStore.token) {
        getConnectedCourses()
    }
})

const loggedInStudentItems = reactive([
    {
        label: 'Profil',
        command: () => {
            router.push({
                path: '/',
            })
        },
    },
    {
        label: 'Kurzus',
        command: () => {
            getConnectedCourses()
        },
        items: [
            {
                label: 'Elérhető kurzusok',
                items: courses,
            },
        ],
    },
    {
        label: 'Tesztek',
        items: [
            {
                label: 'Tesztjeim',
                command: () => {
                    router.push({ path: '/upcoming-test' })
                },
            },
        ],
    },
])

const loggedInTeacherItems = reactive([
    {
        label: 'Profil',
        command: () => {
            router.push({
                path: '/',
            })
        },
    },
    {
        label: 'Kurzus',

        items: [
            {
                label: 'Kurzusaim',
                command: () => {
                    router.push({ path: '/course/my' })
                },
            },
            {
                label: 'Új kurzus hozzáadása',
                command: () => {
                    showCreateCourseDialog()
                },
            },
        ],
    },
    {
        label: 'Tesztek',
        items: [
            {
                label: 'Tesztjeim',
                command: () => {
                    router.push({ path: '/test/my' })
                },
            },
            {
                label: 'Új teszt létrehozása',
                command: () => {
                    showCreateTestDialog()
                },
            },
        ],
    },
    {
        label: 'Kitöltendő tesztek',
        items: [
            {
                label: 'Kiírt tesztek',
                command: () => {
                    router.push({ path: '/upcoming-test/my' })
                },
            },
            {
                label: 'Új teszt kiírása',
                command: () => {
                    showCreateUpcomingTestDialog()
                },
            },
        ],
    },
])

const loggedInMenuItems = computed(() => {
    switch (authStore.authUser?.role) {
        case ROLES.STUDENT:
            return loggedInStudentItems

        case ROLES.TEACHER:
            return loggedInTeacherItems
    }
})

const loggedOutMenuItems = reactive([
    {
        label: 'Bejelentkezés',
        command: () => {
            router.push({ path: '/auth/login' })
        },
    },
    {
        label: 'Regisztráció',
        command: () => {
            router.push({ path: '/auth/register' })
        },
    },
])

const menuItems = computed(() => (token.value ? loggedInMenuItems.value : loggedOutMenuItems))
</script>
<template>
    <div class="max-h-screen">
        <Menubar
            :key="token ?? ''"
            :model="menuItems"
            :pt="{
                end: 'ml-auto',
            }"
            :pt-options="{ mergeSections: true, mergeProps: true }"
        >
            <template #end>
                <Button
                    v-if="token"
                    text
                    label="Kijelentkezés"
                    class="ml-auto"
                    :pt="{
                        label: 'text-white dark:text-white/80 font-normal',
                    }"
                    @click="logout"
                />
            </template>
        </Menubar>
        <slot />
    </div>
</template>
