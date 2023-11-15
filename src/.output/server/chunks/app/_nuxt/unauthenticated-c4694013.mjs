import { h as defineNuxtRouteMiddleware, n as navigateTo } from '../server.mjs';
import { u as useAuthStore } from './auth-c755def0.mjs';
import 'reflect-metadata';
import 'vue';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@unhead/shared';
import 'vue-router';
import 'tsyringe';
import 'axios';
import 'vue/server-renderer';

const unauthenticated = defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();
  if (!["/auth/login", "/auth/register"].includes(to.path) && authStore.token)
    return navigateTo({ path: "/" });
});

export { unauthenticated as default };
//# sourceMappingURL=unauthenticated-c4694013.mjs.map
