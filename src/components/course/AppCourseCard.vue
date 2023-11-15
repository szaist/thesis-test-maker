<script setup lang="ts">
import { CourseResponse } from '~/app/contracts/course/CourseResponse'

const props = defineProps<CourseResponse>()
</script>

<template>
    <Card>
        <template #title>
            {{ props.name }}
        </template>
        <template #content>
            {{ props.description }}
        </template>
    </Card>
</template>

<style scoped></style>
