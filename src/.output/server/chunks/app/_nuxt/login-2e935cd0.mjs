import { defineComponent, reactive, ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { b as useDependency, A as AuthRepositoryToken, a as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-c755def0.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const authRepository = useDependency(AuthRepositoryToken);
    const authStore = useAuthStore();
    const toastStore = useToastMessages();
    const router = useRouter();
    const form = reactive({
      email: "",
      password: ""
    });
    const formErrors = ref();
    const formSubmit = async () => {
      try {
        const loginResponse = await authRepository.login(form);
        authStore.token = loginResponse.access_token;
        toastStore.showSuccess({ message: "Sikeres bejelentkez\xE9s!" });
        router.push({ path: "/" });
      } catch (error) {
        const { data } = error;
        formErrors.value = !Array.isArray(data.message) ? [data.message] : data.message;
      }
    };
    const redirectToRegister = () => {
      router.push({ path: "/auth/register" });
    };
    const redirectToForgotPassword = () => {
      router.push({ path: "/auth/forgot-password" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      const _component_InlineMessage = resolveComponent("InlineMessage");
      const _component_InputText = resolveComponent("InputText");
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
            _push2(` Bejelentkez\xE9s `);
          } else {
            return [
              createTextVNode(" Bejelentkez\xE9s ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div${_scopeId}><div class="flex flex-col gap-1 mb-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(formErrors), (err, idx) => {
              _push2(ssrRenderComponent(_component_InlineMessage, {
                key: idx,
                severity: "error"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(err)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(err), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="flex flex-col gap-2"${_scopeId}><label for="email"${_scopeId}>Email</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col gap-2 mt-2"${_scopeId}><label for="password"${_scopeId}>Jelsz\xF3</label>`);
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
              text: "",
              severity: "text",
              label: "Nincs m\xE9g fi\xF3kod?",
              onClick: redirectToRegister
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "submit",
              label: "Bejelentkez\xE9s"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              text: "",
              label: "Elfelejtetted a jelszavad?",
              onClick: redirectToForgotPassword
            }, null, _parent2, _scopeId));
            _push2(`</div></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(formSubmit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode("div", { class: "flex flex-col gap-1 mb-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(formErrors), (err, idx) => {
                      return openBlock(), createBlock(_component_InlineMessage, {
                        key: idx,
                        severity: "error"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(err), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode("label", { for: "email" }, "Email"),
                    createVNode(_component_InputText, {
                      id: "email",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
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
                      text: "",
                      severity: "text",
                      label: "Nincs m\xE9g fi\xF3kod?",
                      onClick: redirectToRegister
                    }),
                    createVNode(_component_Button, {
                      type: "submit",
                      label: "Bejelentkez\xE9s"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_Button, {
                      text: "",
                      label: "Elfelejtetted a jelszavad?",
                      onClick: redirectToForgotPassword
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-2e935cd0.mjs.map
