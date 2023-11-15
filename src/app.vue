<script setup lang="ts">
import '@/assets/css/main.css'
import 'primeicons/primeicons.css'
</script>
<template>
    <NuxtLayout class="h-screen flex flex-col">
        <DynamicDialog />
        <ConfirmDialog></ConfirmDialog>
        <ConfirmDialog
            group="logout"
            :pt="{
                root: {
                    class: ['w-[576px]'],
                },
                acceptButton: {
                    class: ['bg-red-600 hover:bg-red-600'],
                },
            }"
        ></ConfirmDialog>
        <Toast />
        <NuxtPage class="flex-1" />
    </NuxtLayout>
</template>
