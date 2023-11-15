<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/store/auth'
import IconUser from '~/components/icons/IconUser.vue'

definePageMeta({ middleware: 'auth' })

const authStore = useAuthStore()
const { authUser } = storeToRefs(authStore)

const role = computed(() => (authUser.value?.role === 'TEACHER' ? 'Tanár' : 'Diák'))
</script>
<template>
    <div class="max-w-5xl w-full mx-auto mt-4">
        <Card>
            <template #title>Profil információk</template>
            <template #content>
                <div class="flex items-center flex-col gap-4">
                    <div class="border-2 p-6 rounded-full">
                        <IconUser class="text-[100px]" />
                    </div>
                    <div class="font-bold text-2xl">Név</div>
                    <div class="font-semibold">{{ authUser?.firstName }} {{ authUser?.lastName }}</div>
                    <div class="font-bold text-2xl">Email</div>
                    <div class="font-semibold">{{ authUser?.email }}</div>
                    <div class="font-bold text-2xl">Jogkör</div>
                    <div class="font-semibold">{{ role }}</div>
                </div>
            </template>
        </Card>
    </div>
</template>
