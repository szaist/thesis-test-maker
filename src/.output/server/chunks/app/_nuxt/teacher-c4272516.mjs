import { h as defineNuxtRouteMiddleware, n as navigateTo } from '../server.mjs';
import { R as ROLES } from './Roles-bc1b1c78.mjs';
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

const teacher = defineNuxtRouteMiddleware(() => {
  var _a;
  const authStore = useAuthStore();
  if (!authStore.token) {
    return navigateTo({ path: "/auth/login" });
  } else if (ROLES.TEACHER !== ((_a = authStore.authUser) == null ? void 0 : _a.role)) {
    return navigateTo({ path: "/" });
  }
});

export { teacher as default };
//# sourceMappingURL=teacher-c4272516.mjs.map
