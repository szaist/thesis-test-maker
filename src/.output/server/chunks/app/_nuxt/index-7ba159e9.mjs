import { defineComponent, ref, reactive, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, withModifiers, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useToastMessages } from './toast-message-6430ad2e.mjs';
import { b as useDependency, A as AuthRepositoryToken } from '../server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const authRepository = useDependency(AuthRepositoryToken);
    const toastStore = useToastMessages();
    const submitted = ref(false);
    const form = reactive({
      email: ""
    });
    const formSubmit = async () => {
      try {
        await authRepository.forgotPassword(form);
        submitted.value = true;
      } catch (error) {
        toastStore.showError({ message: "Valami hiba t\xF6rt\xE9nt az email kik\xFCld\xE9sekor." });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      const _component_InlineMessage = resolveComponent("InlineMessage");
      const _component_InputText = resolveComponent("InputText");
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
            _push2(` Elfelejtett jelsz\xF3 `);
          } else {
            return [
              createTextVNode(" Elfelejtett jelsz\xF3 ")
            ];
          }
        }),
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add meg az emailed \xE9s k\xFCld\xFCnk neked egy jelsz\xF3eml\xE9keztet\u0151t!`);
          } else {
            return [
              createTextVNode(" Add meg az emailed \xE9s k\xFCld\xFCnk neked egy jelsz\xF3eml\xE9keztet\u0151t!")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class=""${_scopeId}>`);
            if (unref(submitted)) {
              _push2(ssrRenderComponent(_component_InlineMessage, {
                severity: "info",
                class: "w-full mb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Az emailt kik\xFCldt\xFCk az \xE1ltalad megadott email c\xEDmre. `);
                  } else {
                    return [
                      createTextVNode(" Az emailt kik\xFCldt\xFCk az \xE1ltalad megadott email c\xEDmre. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex flex-col gap-2"${_scopeId}><label for="email"${_scopeId}>Email</label>`);
            _push2(ssrRenderComponent(_component_InputText, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event
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
                  unref(submitted) ? (openBlock(), createBlock(_component_InlineMessage, {
                    key: 0,
                    severity: "info",
                    class: "w-full mb-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Az emailt kik\xFCldt\xFCk az \xE1ltalad megadott email c\xEDmre. ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode("label", { for: "email" }, "Email"),
                    createVNode(_component_InputText, {
                      id: "email",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/forgot-password/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-7ba159e9.mjs.map
