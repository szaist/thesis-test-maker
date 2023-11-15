import { defineComponent, reactive, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, withModifiers, useSSRContext } from 'vue';
import { u as useRoute, a as useRouter, b as useDependency, A as AuthRepositoryToken } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useToastMessages } from './toast-message-6430ad2e.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[authToken]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const token = route.params.authToken.toString();
    const authRepository = useDependency(AuthRepositoryToken);
    const toastStore = useToastMessages();
    const form = reactive({
      password: "",
      token
    });
    const formSubmit = async () => {
      try {
        await authRepository.changePassword(form);
        toastStore.showInfo({ message: "Jelszavad sikeresen megv\xE1ltozott!" });
        router.push({
          path: "/auth/login"
        });
      } catch (error) {
        toastStore.showError({ message: "Valami hiba t\xF6rt\xE9nt az email kik\xFCld\xE9sekor." });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      const _component_Password = resolveComponent("Password");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Card, {
        "pt-options": { mergeProps: true },
        pt: {
          root: {
            class: ["w-[560px]"]
          },
          title: "text-4xl mb-2"
        }
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \xDAj jelsz\xF3 megad\xE1sa `);
          } else {
            return [
              createTextVNode(" \xDAj jelsz\xF3 megad\xE1sa ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class=""${_scopeId}><div class="flex flex-col gap-2 mt-2"${_scopeId}><label for="password"${_scopeId}>Jelsz\xF3</label>`);
            _push2(ssrRenderComponent(_component_Password, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "text",
              feedback: false,
              "toggle-mask": ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-between mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "submit",
              label: "K\xFCld\xE9s"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(formSubmit, ["prevent"])
              }, [
                createVNode("div", { class: "" }, [
                  createVNode("div", { class: "flex flex-col gap-2 mt-2" }, [
                    createVNode("label", { for: "password" }, "Jelsz\xF3"),
                    createVNode(_component_Password, {
                      id: "password",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "text",
                      feedback: false,
                      "toggle-mask": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex justify-between mt-6" }, [
                    createVNode(_component_Button, {
                      type: "submit",
                      label: "K\xFCld\xE9s"
                    })
                  ])
                ])
              ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/forgot-password/[userId]/[authToken].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_authToken_-ab1839f1.mjs.map
