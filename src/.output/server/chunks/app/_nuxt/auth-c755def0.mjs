import { ref, computed, watch } from 'vue';
import { r as parse, t as getRequestHeader, v as destr, x as isEqual, y as setCookie, z as getCookie, A as deleteCookie } from '../../nitro/node-server.mjs';
import { j as defineStore, b as useDependency, H as HttpServiceToken, U as UserRepositoryToken, l as useNuxtApp } from '../server.mjs';

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = hasExpired ? void 0 : (_a2 = cookies[name]) != null ? _a2 : (_a = opts.default) == null ? void 0 : _a.call(opts);
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const useAuthStore = defineStore("useAuthStore", () => {
  const httpService = useDependency(HttpServiceToken);
  const authUser = ref(null);
  const token = useCookie("token", {
    maxAge: 60 * 60 * 24
  });
  const context = computed(() => ({ token: (token == null ? void 0 : token.value) || null }));
  const fetchUser = async () => {
    try {
      const users = useDependency(UserRepositoryToken);
      if (!token.value)
        return;
      authUser.value = await users.me();
    } catch (error) {
      token.value = null;
    }
  };
  watch(
    context,
    (newValue) => {
      if (newValue.token !== null) {
        httpService.setToken(newValue.token);
        fetchUser();
      }
    },
    { immediate: true }
  );
  return {
    token,
    authUser,
    fetchUser
  };
});

export { useAuthStore as u };
//# sourceMappingURL=auth-c755def0.mjs.map
