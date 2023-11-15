import { defineComponent, ref, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, isRef, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { b as useDependency, F as FillTestRepositoryToken, u as useRoute, d as useRuntimeConfig } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "[upcomingTestId]",
  __ssrInlineRender: true,
  setup(__props) {
    useDependency(FillTestRepositoryToken);
    const route = useRoute();
    const config = useRuntimeConfig();
    const checked = ref(true);
    const notChecked = ref(false);
    route.params.upcomingTestId;
    const givenAnswers = ref();
    const testInfo = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      const _component_Panel = resolveComponent("Panel");
      const _component_Image = resolveComponent("Image");
      const _component_RadioButton = resolveComponent("RadioButton");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl w-full mx-auto mt-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Card, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<h1 class="text-3xl mb-4 text-center"${_scopeId}>${ssrInterpolate((_a = unref(testInfo)) == null ? void 0 : _a.upComingTest.test.title)}</h1><div class="flex flex-row justify-between"${_scopeId}><h2${_scopeId}>Leadott v\xE1laszaid</h2><p${_scopeId}>${ssrInterpolate((_b = unref(testInfo)) == null ? void 0 : _b.reachedPoints)} / ${ssrInterpolate((_c = unref(testInfo)) == null ? void 0 : _c.maxPoints)} pont</p></div>`);
          } else {
            return [
              createVNode("h1", { class: "text-3xl mb-4 text-center" }, toDisplayString((_d = unref(testInfo)) == null ? void 0 : _d.upComingTest.test.title), 1),
              createVNode("div", { class: "flex flex-row justify-between" }, [
                createVNode("h2", null, "Leadott v\xE1laszaid"),
                createVNode("p", null, toDisplayString((_e = unref(testInfo)) == null ? void 0 : _e.reachedPoints) + " / " + toDisplayString((_f = unref(testInfo)) == null ? void 0 : _f.maxPoints) + " pont", 1)
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(givenAnswers), (question, idx) => {
              _push2(ssrRenderComponent(_component_Panel, {
                key: idx,
                class: "mb-4",
                header: question.text
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<div class="flex items-center justify-center mb-4"${_scopeId2}>`);
                    if (question.QuestionImage) {
                      _push3(ssrRenderComponent(_component_Image, {
                        src: `${unref(config).public.API_BASE_URL}question/image/${(_a = question.QuestionImage) == null ? void 0 : _a.source}`,
                        width: "500"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><!--[-->`);
                    ssrRenderList(question.answers, (ans) => {
                      _push3(`<div class="w-auto"${_scopeId2}><div class="${ssrRenderClass([[ans.point > 0 ? "border-green-500" : "border-red-500"], "border-2 p-2 rounded-sm flex flex-row mb-2"])}"${_scopeId2}>`);
                      if (ans.point > 0) {
                        _push3(ssrRenderComponent(_component_RadioButton, {
                          modelValue: unref(checked),
                          "onUpdate:modelValue": ($event) => isRef(checked) ? checked.value = $event : null,
                          disabled: "",
                          value: true
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(ssrRenderComponent(_component_RadioButton, {
                          modelValue: unref(notChecked),
                          "onUpdate:modelValue": ($event) => isRef(notChecked) ? notChecked.value = $event : null,
                          disabled: ""
                        }, null, _parent3, _scopeId2));
                      }
                      _push3(`<div class="flex justify-between flex-1"${_scopeId2}><label class="ml-2"${_scopeId2}>${ssrInterpolate(ans.text)}</label><p${_scopeId2}>${ssrInterpolate(ans.point)} pont</p></div></div></div>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center justify-center mb-4" }, [
                        question.QuestionImage ? (openBlock(), createBlock(_component_Image, {
                          key: 0,
                          src: `${unref(config).public.API_BASE_URL}question/image/${(_b = question.QuestionImage) == null ? void 0 : _b.source}`,
                          width: "500"
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(question.answers, (ans) => {
                        return openBlock(), createBlock("div", {
                          key: ans.id,
                          class: "w-auto"
                        }, [
                          createVNode("div", {
                            class: ["border-2 p-2 rounded-sm flex flex-row mb-2", [ans.point > 0 ? "border-green-500" : "border-red-500"]]
                          }, [
                            ans.point > 0 ? (openBlock(), createBlock(_component_RadioButton, {
                              key: 0,
                              modelValue: unref(checked),
                              "onUpdate:modelValue": ($event) => isRef(checked) ? checked.value = $event : null,
                              disabled: "",
                              value: true
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_RadioButton, {
                              key: 1,
                              modelValue: unref(notChecked),
                              "onUpdate:modelValue": ($event) => isRef(notChecked) ? notChecked.value = $event : null,
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])),
                            createVNode("div", { class: "flex justify-between flex-1" }, [
                              createVNode("label", { class: "ml-2" }, toDisplayString(ans.text), 1),
                              createVNode("p", null, toDisplayString(ans.point) + " pont", 1)
                            ])
                          ], 2)
                        ]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(givenAnswers), (question, idx) => {
                return openBlock(), createBlock(_component_Panel, {
                  key: idx,
                  class: "mb-4",
                  header: question.text
                }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createVNode("div", { class: "flex items-center justify-center mb-4" }, [
                        question.QuestionImage ? (openBlock(), createBlock(_component_Image, {
                          key: 0,
                          src: `${unref(config).public.API_BASE_URL}question/image/${(_a = question.QuestionImage) == null ? void 0 : _a.source}`,
                          width: "500"
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(question.answers, (ans) => {
                        return openBlock(), createBlock("div", {
                          key: ans.id,
                          class: "w-auto"
                        }, [
                          createVNode("div", {
                            class: ["border-2 p-2 rounded-sm flex flex-row mb-2", [ans.point > 0 ? "border-green-500" : "border-red-500"]]
                          }, [
                            ans.point > 0 ? (openBlock(), createBlock(_component_RadioButton, {
                              key: 0,
                              modelValue: unref(checked),
                              "onUpdate:modelValue": ($event) => isRef(checked) ? checked.value = $event : null,
                              disabled: "",
                              value: true
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_RadioButton, {
                              key: 1,
                              modelValue: unref(notChecked),
                              "onUpdate:modelValue": ($event) => isRef(notChecked) ? notChecked.value = $event : null,
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])),
                            createVNode("div", { class: "flex justify-between flex-1" }, [
                              createVNode("label", { class: "ml-2" }, toDisplayString(ans.text), 1),
                              createVNode("p", null, toDisplayString(ans.point) + " pont", 1)
                            ])
                          ], 2)
                        ]);
                      }), 128))
                    ];
                  }),
                  _: 2
                }, 1032, ["header"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-results/student/[upcomingTestId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_upcomingTestId_-69789d26.mjs.map
