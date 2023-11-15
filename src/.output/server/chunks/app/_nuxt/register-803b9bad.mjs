import { defineComponent, reactive, ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { b as useDependency, A as AuthRepositoryToken, a as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const authRepository = useDependency(AuthRepositoryToken);
    const toastStore = useToastMessages();
    const router = useRouter();
    const form = reactive({
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    });
    const formErrors = ref();
    const formSubmit = async () => {
      try {
        await authRepository.register(form);
        toastStore.showSuccess({ message: "Sikeres regisztr\xE1ci\xF3!" });
        router.push({
          path: "/auth/login"
        });
      } catch (error) {
        const { data } = error;
        formErrors.value = !Array.isArray(data.message) ? [data.message] : data.message;
      }
    };
    const redirectToLogin = () => {
      router.push({ path: "/auth/login" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      const _component_InlineMessage = resolveComponent("InlineMessage");
      const _component_InputText = resolveComponent("InputText");
      const _component_Password = resolveComponent("Password");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Card, { pt: {
        root: {
          class: [
            "bg-white text-gray-700 shadow-md rounded-md w-[560px]",
            "dark:bg-gray-900 dark:text-white "
          ]
        },
        title: "text-4xl font-bold mb-2"
      } }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Regisztr\xE1ci\xF3 `);
          } else {
            return [
              createTextVNode(" Regisztr\xE1ci\xF3 ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="flex flex-col gap-2"${_scopeId}><div class="flex flex-col gap-1 mb-2"${_scopeId}><!--[-->`);
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
            _push2(`<!--]--></div><div class="flex flex-col gap-2"${_scopeId}><label for="firstName"${_scopeId}>Vezet\xE9kn\xE9v</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              id: "firstName",
              modelValue: unref(form).firstName,
              "onUpdate:modelValue": ($event) => unref(form).firstName = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col gap-2"${_scopeId}><label for="lastName"${_scopeId}>Keresztn\xE9v</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              id: "lastName",
              modelValue: unref(form).lastName,
              "onUpdate:modelValue": ($event) => unref(form).lastName = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col gap-2"${_scopeId}><label for="email"${_scopeId}>Email</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col gap-2"${_scopeId}><label for="password"${_scopeId}>Jelsz\xF3</label>`);
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
              label: "Van m\xE1r fi\xF3kod?",
              onClick: redirectToLogin
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "submit",
              label: "Regisztr\xE1ci\xF3"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(formSubmit, ["prevent"])
              }, [
                createVNode("div", { class: "flex flex-col gap-2" }, [
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
                    createVNode("label", { for: "firstName" }, "Vezet\xE9kn\xE9v"),
                    createVNode(_component_InputText, {
                      id: "firstName",
                      modelValue: unref(form).firstName,
                      "onUpdate:modelValue": ($event) => unref(form).firstName = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode("label", { for: "lastName" }, "Keresztn\xE9v"),
                    createVNode(_component_InputText, {
                      id: "lastName",
                      modelValue: unref(form).lastName,
                      "onUpdate:modelValue": ($event) => unref(form).lastName = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode("label", { for: "email" }, "Email"),
                    createVNode(_component_InputText, {
                      id: "email",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex flex-col gap-2" }, [
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
                      label: "Van m\xE1r fi\xF3kod?",
                      onClick: redirectToLogin
                    }),
                    createVNode(_component_Button, {
                      type: "submit",
                      label: "Regisztr\xE1ci\xF3"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-803b9bad.mjs.map
