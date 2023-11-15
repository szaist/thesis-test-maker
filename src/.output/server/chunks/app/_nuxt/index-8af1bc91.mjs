import { defineComponent, computed, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { s as storeToRefs } from '../server.mjs';
import { u as useAuthStore } from './auth-c755def0.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'reflect-metadata';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<i${ssrRenderAttrs(mergeProps({ class: "pi pi-user" }, _attrs))}></i>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconUser = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const { authUser } = storeToRefs(authStore);
    const role = computed(() => {
      var _a;
      return ((_a = authUser.value) == null ? void 0 : _a.role) === "TEACHER" ? "Tan\xE1r" : "Di\xE1k";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl w-full mx-auto mt-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Card, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Profil inform\xE1ci\xF3k`);
          } else {
            return [
              createTextVNode("Profil inform\xE1ci\xF3k")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="flex items-center flex-col gap-4"${_scopeId}><div class="border-2 p-6 rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(IconUser, { class: "text-[100px]" }, null, _parent2, _scopeId));
            _push2(`</div><div class="font-bold text-2xl"${_scopeId}>N\xE9v</div><div class="font-semibold"${_scopeId}>${ssrInterpolate((_a = unref(authUser)) == null ? void 0 : _a.firstName)} ${ssrInterpolate((_b = unref(authUser)) == null ? void 0 : _b.lastName)}</div><div class="font-bold text-2xl"${_scopeId}>Email</div><div class="font-semibold"${_scopeId}>${ssrInterpolate((_c = unref(authUser)) == null ? void 0 : _c.email)}</div><div class="font-bold text-2xl"${_scopeId}>Jogk\xF6r</div><div class="font-semibold"${_scopeId}>${ssrInterpolate(unref(role))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center flex-col gap-4" }, [
                createVNode("div", { class: "border-2 p-6 rounded-full" }, [
                  createVNode(IconUser, { class: "text-[100px]" })
                ]),
                createVNode("div", { class: "font-bold text-2xl" }, "N\xE9v"),
                createVNode("div", { class: "font-semibold" }, toDisplayString((_d = unref(authUser)) == null ? void 0 : _d.firstName) + " " + toDisplayString((_e = unref(authUser)) == null ? void 0 : _e.lastName), 1),
                createVNode("div", { class: "font-bold text-2xl" }, "Email"),
                createVNode("div", { class: "font-semibold" }, toDisplayString((_f = unref(authUser)) == null ? void 0 : _f.email), 1),
                createVNode("div", { class: "font-bold text-2xl" }, "Jogk\xF6r"),
                createVNode("div", { class: "font-semibold" }, toDisplayString(unref(role)), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-8af1bc91.mjs.map
