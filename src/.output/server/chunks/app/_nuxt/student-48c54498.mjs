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

const student = defineNuxtRouteMiddleware(() => {
  var _a;
  const authStore = useAuthStore();
  if (!authStore.token) {
    return navigateTo({ path: "/auth/login" });
  } else if (ROLES.STUDENT !== ((_a = authStore.authUser) == null ? void 0 : _a.role)) {
    return navigateTo({ path: "/" });
  }
});

export { student as default };
//# sourceMappingURL=student-48c54498.mjs.map
