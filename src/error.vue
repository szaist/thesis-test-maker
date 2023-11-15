<script setup lang="ts">
const router = useRouter()

const redirectToHome = () => {
    router.push({
        path: '/',
    })
}
</script>
<template>
    <div class="h-screen flex flex-col justify-center items-center">
        <div class="bg-primary pt-8 p-10 text-center">
            <h1 class="text-white text-[110px] font-bold">404</h1>
            <h2 class="text-white text-[70px] font-bold">Az oldal nem található</h2>
            <Button label="Vissza a főoldalra" raised severity="secondary" class="mt-6" @click="redirectToHome" />
        </div>
    </div>
</template>
