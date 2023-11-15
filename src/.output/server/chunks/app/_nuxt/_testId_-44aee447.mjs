import { useSSRContext, defineComponent, ref, computed, resolveComponent, mergeProps, unref, watch, withCtx, createTextVNode, toDisplayString, isRef, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, nextTick } from 'vue';
import { u as useRoute, a as useRouter, b as useDependency, F as FillTestRepositoryToken, T as TestRepositoryToken, e as UpcomingTestRepositoryToken, d as useRuntimeConfig } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Q as QuestionTypes } from './QuestionTypes-998277d2.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppFillCheckbox",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:answer", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const config = useRuntimeConfig();
    const emit = __emit;
    const props = __props;
    const question = ref(props.modelValue.text);
    const answers = ref(props.modelValue.Answers);
    const checkedAnswers = ref([]);
    const onUpdate = () => {
      nextTick(() => {
        emit("update:answer", returnData.value);
      });
    };
    watch(checkedAnswers, () => onUpdate());
    const returnData = computed(() => ({
      answerIds: checkedAnswers.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      const _component_Image = resolveComponent("Image");
      const _component_Panel = resolveComponent("Panel");
      const _component_Checkbox = resolveComponent("Checkbox");
      _push(ssrRenderComponent(_component_Card, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(question))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(question)), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="flex items-center justify-center mb-4"${_scopeId}>`);
            if (props.modelValue.QuestionImage) {
              _push2(ssrRenderComponent(_component_Image, {
                src: `${unref(config).public.API_BASE_URL}question/image/${(_a = props.modelValue.QuestionImage) == null ? void 0 : _a.source}`,
                width: "500"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Panel, { header: "V\xE1laszok" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(answers), (a, idx) => {
                    _push3(`<div class="flex items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Checkbox, {
                      modelValue: unref(checkedAnswers),
                      "onUpdate:modelValue": ($event) => isRef(checkedAnswers) ? checkedAnswers.value = $event : null,
                      value: a.id,
                      onChange: onUpdate
                    }, null, _parent3, _scopeId2));
                    _push3(`<label class="ml-4"${_scopeId2}>${ssrInterpolate(unref(answers)[idx].text)}</label></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (a, idx) => {
                        return openBlock(), createBlock("div", {
                          key: idx,
                          class: "flex items-center"
                        }, [
                          createVNode(_component_Checkbox, {
                            modelValue: unref(checkedAnswers),
                            "onUpdate:modelValue": ($event) => isRef(checkedAnswers) ? checkedAnswers.value = $event : null,
                            value: a.id,
                            onChange: onUpdate
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                          createVNode("label", { class: "ml-4" }, toDisplayString(unref(answers)[idx].text), 1)
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center mb-4" }, [
                props.modelValue.QuestionImage ? (openBlock(), createBlock(_component_Image, {
                  key: 0,
                  src: `${unref(config).public.API_BASE_URL}question/image/${(_b = props.modelValue.QuestionImage) == null ? void 0 : _b.source}`,
                  width: "500"
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ]),
              createVNode(_component_Panel, { header: "V\xE1laszok" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (a, idx) => {
                      return openBlock(), createBlock("div", {
                        key: idx,
                        class: "flex items-center"
                      }, [
                        createVNode(_component_Checkbox, {
                          modelValue: unref(checkedAnswers),
                          "onUpdate:modelValue": ($event) => isRef(checkedAnswers) ? checkedAnswers.value = $event : null,
                          value: a.id,
                          onChange: onUpdate
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                        createVNode("label", { class: "ml-4" }, toDisplayString(unref(answers)[idx].text), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test-fill-components/AppFillCheckbox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFillRadio",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:answer", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const config = useRuntimeConfig();
    const emit = __emit;
    const props = __props;
    const question = ref(props.modelValue.text);
    const answers = ref(props.modelValue.Answers);
    const checkedAnswers = ref(-1);
    const onUpdate = () => {
      nextTick(() => {
        emit("update:answer", returnData.value);
      });
    };
    watch(checkedAnswers, () => onUpdate());
    const returnData = computed(() => ({
      answerIds: [checkedAnswers.value]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      const _component_Image = resolveComponent("Image");
      const _component_Panel = resolveComponent("Panel");
      const _component_RadioButton = resolveComponent("RadioButton");
      _push(ssrRenderComponent(_component_Card, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(question))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(question)), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="flex items-center justify-center mb-4"${_scopeId}>`);
            if (props.modelValue.QuestionImage) {
              _push2(ssrRenderComponent(_component_Image, {
                src: `${unref(config).public.API_BASE_URL}question/image/${(_a = props.modelValue.QuestionImage) == null ? void 0 : _a.source}`,
                width: "500"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Panel, { header: "V\xE1laszok" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(answers), (a, idx) => {
                    _push3(`<div class="flex items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_RadioButton, {
                      modelValue: unref(checkedAnswers),
                      "onUpdate:modelValue": ($event) => isRef(checkedAnswers) ? checkedAnswers.value = $event : null,
                      value: a.id,
                      onChange: onUpdate
                    }, null, _parent3, _scopeId2));
                    _push3(`<label class="ml-4"${_scopeId2}>${ssrInterpolate(unref(answers)[idx].text)}</label></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (a, idx) => {
                        return openBlock(), createBlock("div", {
                          key: idx,
                          class: "flex items-center"
                        }, [
                          createVNode(_component_RadioButton, {
                            modelValue: unref(checkedAnswers),
                            "onUpdate:modelValue": ($event) => isRef(checkedAnswers) ? checkedAnswers.value = $event : null,
                            value: a.id,
                            onChange: onUpdate
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                          createVNode("label", { class: "ml-4" }, toDisplayString(unref(answers)[idx].text), 1)
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center mb-4" }, [
                props.modelValue.QuestionImage ? (openBlock(), createBlock(_component_Image, {
                  key: 0,
                  src: `${unref(config).public.API_BASE_URL}question/image/${(_b = props.modelValue.QuestionImage) == null ? void 0 : _b.source}`,
                  width: "500"
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ]),
              createVNode(_component_Panel, { header: "V\xE1laszok" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (a, idx) => {
                      return openBlock(), createBlock("div", {
                        key: idx,
                        class: "flex items-center"
                      }, [
                        createVNode(_component_RadioButton, {
                          modelValue: unref(checkedAnswers),
                          "onUpdate:modelValue": ($event) => isRef(checkedAnswers) ? checkedAnswers.value = $event : null,
                          value: a.id,
                          onChange: onUpdate
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                        createVNode("label", { class: "ml-4" }, toDisplayString(unref(answers)[idx].text), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test-fill-components/AppFillRadio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[testId]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const fillingTestRepository = useDependency(FillTestRepositoryToken);
    useDependency(TestRepositoryToken);
    useDependency(UpcomingTestRepositoryToken);
    const test = ref();
    const renderQuestions = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = test.value) == null ? void 0 : _a.Questions) != null ? _a2 : [];
    });
    const filledId = Number(route.params.filledId);
    const upcomingTestId = Number(route.params.testId);
    ref(-1);
    const answers = ref([]);
    const editAnswers = (questionId, answerIds) => {
      answers.value = answers.value.filter((a) => a.questionId !== questionId);
      answerIds.forEach((added) => {
        answers.value.push({ answerId: added, questionId, upcomingTestId });
      });
    };
    const endTest = async () => {
      try {
        for (const ans of answers.value) {
          await fillingTestRepository.submitAnswer(ans);
        }
        await fillingTestRepository.endTest(filledId);
        router.push({ path: "/upcoming-test" });
      } catch (error) {
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center mt-2" }, _attrs))}><div class="max-w-5xl w-full flex flex-col gap-4"><!--[-->`);
      ssrRenderList(unref(renderQuestions), (q, indx) => {
        _push(`<!--[-->`);
        if ((q == null ? void 0 : q.type) === unref(QuestionTypes).SELECT_MORE) {
          _push(ssrRenderComponent(_sfc_main$2, {
            modelValue: unref(renderQuestions)[indx],
            "onUpdate:modelValue": ($event) => unref(renderQuestions)[indx] = $event,
            "onUpdate:answer": (data) => editAnswers(unref(renderQuestions)[indx].id, data.answerIds)
          }, null, _parent));
        } else if ((q == null ? void 0 : q.type) === unref(QuestionTypes).SELECT_ONE) {
          _push(ssrRenderComponent(_sfc_main$1, {
            modelValue: unref(renderQuestions)[indx],
            "onUpdate:modelValue": ($event) => unref(renderQuestions)[indx] = $event,
            "onUpdate:answer": (data) => editAnswers(unref(renderQuestions)[indx].id, data.answerIds)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><div>`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Teszt befejez\xE9se",
        onClick: endTest
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/fill/[filledId]/[testId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_testId_-44aee447.mjs.map
