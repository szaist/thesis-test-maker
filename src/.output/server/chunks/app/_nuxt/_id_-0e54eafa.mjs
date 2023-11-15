import { useSSRContext, defineComponent, ref, computed, resolveComponent, mergeProps, unref, watch, nextTick, withCtx, isRef, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode } from 'vue';
import { b as useDependency, T as TestRepositoryToken, Q as QuestionRepositoryToken, u as useRoute, f as AnswerRepositoryToken, d as useRuntimeConfig } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { Q as QuestionTypes } from './QuestionTypes-998277d2.mjs';
import { I as IconTrash } from './IconTrash-cbe8c635.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<i${ssrRenderAttrs(mergeProps({ class: "pi pi-plus" }, _attrs))}></i>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconPlus.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppTestCheckbox",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "deleteQuestion"],
  setup(__props, { emit: __emit }) {
    var _a2;
    var _a;
    const config = useRuntimeConfig();
    const answerRepository = useDependency(AnswerRepositoryToken);
    const questionRepository = useDependency(QuestionRepositoryToken);
    const emit = __emit;
    const props = __props;
    const id = ref(-1);
    const question = ref(props.modelValue.text);
    const answers = ref(props.modelValue.Answers);
    const questionImage = ref(props.modelValue.QuestionImage);
    const image = ref();
    const correctAnswers = ref((_a2 = (_a = props.modelValue.Answers) == null ? void 0 : _a.filter((a) => a.point === 1).map((a) => a.id)) != null ? _a2 : []);
    const addEmptyAnswer = () => {
      answers.value.push({ id: id.value, text: "", point: 0 });
      id.value--;
    };
    const removeAnswer = async (index) => {
      var _a22;
      const answerId = answers.value[index].id;
      if (answerId > 0) {
        await answerRepository.delete(answerId);
      }
      answers.value = (_a22 = answers.value) == null ? void 0 : _a22.filter((_, idx) => index !== idx);
    };
    const onUpload = async (event) => {
      var _a22;
      const target = event.target;
      image.value = (_a22 = target.files) == null ? void 0 : _a22[0];
      if (props.modelValue.id) {
        const form = new FormData();
        form.append("image", image.value);
        const value = await questionRepository.uploadImage(props.modelValue.id, form);
        questionImage.value = value;
      }
    };
    const isDisabled = computed(() => !props.modelValue.id || props.modelValue.id < 0);
    watch(answers, () => {
      onUpdate();
    });
    watch(question, () => {
      onUpdate();
    });
    const onUpdate = () => {
      nextTick(() => {
        emit("update:modelValue", returnData.value);
      });
    };
    const returnData = computed(() => {
      var _a22;
      return {
        id: props.modelValue.id,
        text: question.value,
        type: props.modelValue.type,
        QuestionImage: questionImage.value,
        Answers: (_a22 = answers.value) == null ? void 0 : _a22.map((a) => ({
          id: a.id,
          point: Number(correctAnswers.value.includes(a.id)),
          text: a.text
        }))
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      const _component_InputText = resolveComponent("InputText");
      const _component_Image = resolveComponent("Image");
      const _component_Panel = resolveComponent("Panel");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_Card, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputText, {
              modelValue: unref(question),
              "onUpdate:modelValue": ($event) => isRef(question) ? question.value = $event : null,
              placeholder: "K\xE9rd\xE9s",
              class: "w-full"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputText, {
                modelValue: unref(question),
                "onUpdate:modelValue": ($event) => isRef(question) ? question.value = $event : null,
                placeholder: "K\xE9rd\xE9s",
                class: "w-full"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a22, _b;
          if (_push2) {
            _push2(`<div class="flex items-center justify-center mb-4"${_scopeId}>`);
            if (props.modelValue.QuestionImage) {
              _push2(ssrRenderComponent(_component_Image, {
                src: `${unref(config).public.API_BASE_URL}question/image/${(_a22 = props.modelValue.QuestionImage) == null ? void 0 : _a22.source}`,
                width: "500"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Panel, {
              header: "Helyes v\xE1laszok",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(answers), (a, idx) => {
                    _push3(`<div class="mb-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Checkbox, {
                      modelValue: unref(correctAnswers),
                      "onUpdate:modelValue": ($event) => isRef(correctAnswers) ? correctAnswers.value = $event : null,
                      value: a.id,
                      onChange: onUpdate
                    }, null, _parent3, _scopeId2));
                    _push3(`<label class="ml-4"${_scopeId2}>${ssrInterpolate(unref(answers)[idx].text.substring(0, 40))}</label></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (a, idx) => {
                      return openBlock(), createBlock("div", {
                        key: idx,
                        class: "mb-3"
                      }, [
                        createVNode(_component_Checkbox, {
                          modelValue: unref(correctAnswers),
                          "onUpdate:modelValue": ($event) => isRef(correctAnswers) ? correctAnswers.value = $event : null,
                          value: a.id,
                          onChange: onUpdate
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                        createVNode("label", { class: "ml-4" }, toDisplayString(unref(answers)[idx].text.substring(0, 40)), 1)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Panel, { header: "V\xE1laszok" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(answers), (_3, idx) => {
                    _push3(`<div class="flex items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_InputText, {
                      modelValue: unref(answers)[idx].text,
                      "onUpdate:modelValue": ($event) => unref(answers)[idx].text = $event,
                      placeholder: `V\xE1lasz ${idx + 1}`,
                      class: "w-full",
                      onChange: onUpdate
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Button, {
                      class: "ml-2",
                      severity: "danger",
                      rounded: "",
                      text: "",
                      onClick: ($event) => removeAnswer(idx)
                    }, {
                      default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(IconTrash, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(IconTrash)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    rounded: "",
                    class: "mt-4",
                    onClick: addEmptyAnswer
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(IconPlus, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(IconPlus)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (_3, idx) => {
                        return openBlock(), createBlock("div", {
                          key: idx,
                          class: "flex items-center"
                        }, [
                          createVNode(_component_InputText, {
                            modelValue: unref(answers)[idx].text,
                            "onUpdate:modelValue": ($event) => unref(answers)[idx].text = $event,
                            placeholder: `V\xE1lasz ${idx + 1}`,
                            class: "w-full",
                            onChange: onUpdate
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                          createVNode(_component_Button, {
                            class: "ml-2",
                            severity: "danger",
                            rounded: "",
                            text: "",
                            onClick: ($event) => removeAnswer(idx)
                          }, {
                            default: withCtx(() => [
                              createVNode(IconTrash)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]);
                      }), 128))
                    ]),
                    createVNode(_component_Button, {
                      rounded: "",
                      class: "mt-4",
                      onClick: addEmptyAnswer
                    }, {
                      default: withCtx(() => [
                        createVNode(IconPlus)
                      ]),
                      _: 1
                    })
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
              createVNode(_component_Panel, {
                header: "Helyes v\xE1laszok",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (a, idx) => {
                    return openBlock(), createBlock("div", {
                      key: idx,
                      class: "mb-3"
                    }, [
                      createVNode(_component_Checkbox, {
                        modelValue: unref(correctAnswers),
                        "onUpdate:modelValue": ($event) => isRef(correctAnswers) ? correctAnswers.value = $event : null,
                        value: a.id,
                        onChange: onUpdate
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                      createVNode("label", { class: "ml-4" }, toDisplayString(unref(answers)[idx].text.substring(0, 40)), 1)
                    ]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_Panel, { header: "V\xE1laszok" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (_2, idx) => {
                      return openBlock(), createBlock("div", {
                        key: idx,
                        class: "flex items-center"
                      }, [
                        createVNode(_component_InputText, {
                          modelValue: unref(answers)[idx].text,
                          "onUpdate:modelValue": ($event) => unref(answers)[idx].text = $event,
                          placeholder: `V\xE1lasz ${idx + 1}`,
                          class: "w-full",
                          onChange: onUpdate
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                        createVNode(_component_Button, {
                          class: "ml-2",
                          severity: "danger",
                          rounded: "",
                          text: "",
                          onClick: ($event) => removeAnswer(idx)
                        }, {
                          default: withCtx(() => [
                            createVNode(IconTrash)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]);
                    }), 128))
                  ]),
                  createVNode(_component_Button, {
                    rounded: "",
                    class: "mt-4",
                    onClick: addEmptyAnswer
                  }, {
                    default: withCtx(() => [
                      createVNode(IconPlus)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between"${_scopeId}><div class="flex justify-center items-center flex-col gap-2"${_scopeId}><input id="myfile"${ssrIncludeBooleanAttr(unref(isDisabled)) ? " disabled" : ""} type="file" name="myfile" accept=".png, .jpg, .jpeg"${_scopeId}><small${_scopeId}>Miel\u0151tt k\xE9pet adhatn\xE1l hozz\xE1 k\xE9rlek mentsd el a tesztet.</small></div>`);
            _push2(ssrRenderComponent(_component_Button, {
              text: "",
              rounded: "",
              severity: "danger",
              onClick: ($event) => emit("deleteQuestion")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(IconTrash, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(IconTrash)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between" }, [
                createVNode("div", { class: "flex justify-center items-center flex-col gap-2" }, [
                  createVNode("input", {
                    id: "myfile",
                    disabled: unref(isDisabled),
                    type: "file",
                    name: "myfile",
                    accept: ".png, .jpg, .jpeg",
                    onChange: onUpload
                  }, null, 40, ["disabled"]),
                  createVNode("small", null, "Miel\u0151tt k\xE9pet adhatn\xE1l hozz\xE1 k\xE9rlek mentsd el a tesztet.")
                ]),
                createVNode(_component_Button, {
                  text: "",
                  rounded: "",
                  severity: "danger",
                  onClick: ($event) => emit("deleteQuestion")
                }, {
                  default: withCtx(() => [
                    createVNode(IconTrash)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test-components/AppTestCheckbox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppTestRadio",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "deleteQuestion"],
  setup(__props, { emit: __emit }) {
    var _a2;
    var _a;
    const config = useRuntimeConfig();
    const answerRepository = useDependency(AnswerRepositoryToken);
    const questionRepository = useDependency(QuestionRepositoryToken);
    const emit = __emit;
    const props = __props;
    const id = ref(-1);
    const question = ref(props.modelValue.text);
    const answers = ref(props.modelValue.Answers);
    const questionImage = ref(props.modelValue.QuestionImage);
    const image = ref();
    const correctAnswers = ref((_a2 = (_a = props.modelValue.Answers) == null ? void 0 : _a.findIndex((a) => a.point === 1)) != null ? _a2 : -1);
    const addEmptyAnswer = () => {
      answers.value.push({ id: id.value, text: "", point: 0 });
      id.value--;
    };
    const removeAnswer = async (index) => {
      var _a22;
      const answerId = answers.value[index].id;
      if (answerId > 0) {
        await answerRepository.delete(answerId);
      }
      answers.value = (_a22 = answers.value) == null ? void 0 : _a22.filter((_, idx) => index !== idx);
    };
    const onUpload = async (event) => {
      var _a22;
      const target = event.target;
      image.value = (_a22 = target.files) == null ? void 0 : _a22[0];
      if (props.modelValue.id) {
        const form = new FormData();
        form.append("image", image.value);
        const value = await questionRepository.uploadImage(props.modelValue.id, form);
        questionImage.value = value;
      }
    };
    const isDisabled = computed(() => !props.modelValue.id || props.modelValue.id < 0);
    watch([...answers.value], () => {
      onUpdate();
    });
    watch(question, () => {
      onUpdate();
    });
    const onUpdate = () => {
      nextTick(() => {
        emit("update:modelValue", returnData.value);
      });
    };
    const returnData = computed(() => {
      var _a22;
      return {
        id: props.modelValue.id,
        text: question.value,
        type: QuestionTypes.SELECT_ONE,
        QuestionImage: questionImage.value,
        Answers: (_a22 = answers.value) == null ? void 0 : _a22.map((a, idx) => ({
          id: a.id,
          point: idx === correctAnswers.value ? 1 : 0,
          text: a.text
        }))
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      const _component_InputText = resolveComponent("InputText");
      const _component_Image = resolveComponent("Image");
      const _component_Panel = resolveComponent("Panel");
      const _component_RadioButton = resolveComponent("RadioButton");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_Card, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputText, {
              modelValue: unref(question),
              "onUpdate:modelValue": ($event) => isRef(question) ? question.value = $event : null,
              placeholder: "K\xE9rd\xE9s",
              class: "w-full"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputText, {
                modelValue: unref(question),
                "onUpdate:modelValue": ($event) => isRef(question) ? question.value = $event : null,
                placeholder: "K\xE9rd\xE9s",
                class: "w-full"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a22, _b;
          if (_push2) {
            _push2(`<div class="flex items-center justify-center mb-4"${_scopeId}>`);
            if (props.modelValue.QuestionImage) {
              _push2(ssrRenderComponent(_component_Image, {
                src: `${unref(config).public.API_BASE_URL}question/image/${(_a22 = props.modelValue.QuestionImage) == null ? void 0 : _a22.source}`,
                width: "500"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Panel, {
              header: "Helyes v\xE1laszok",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(answers), (a, idx) => {
                    _push3(`<div class="mb-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_RadioButton, {
                      modelValue: unref(correctAnswers),
                      "onUpdate:modelValue": ($event) => isRef(correctAnswers) ? correctAnswers.value = $event : null,
                      value: idx,
                      onChange: onUpdate
                    }, null, _parent3, _scopeId2));
                    _push3(`<label class="ml-4"${_scopeId2}>${ssrInterpolate(unref(answers)[idx].text.substring(0, 40))}</label></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (a, idx) => {
                      return openBlock(), createBlock("div", {
                        key: idx,
                        class: "mb-3"
                      }, [
                        createVNode(_component_RadioButton, {
                          modelValue: unref(correctAnswers),
                          "onUpdate:modelValue": ($event) => isRef(correctAnswers) ? correctAnswers.value = $event : null,
                          value: idx,
                          onChange: onUpdate
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                        createVNode("label", { class: "ml-4" }, toDisplayString(unref(answers)[idx].text.substring(0, 40)), 1)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Panel, { header: "V\xE1laszok" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(answers), (_3, idx) => {
                    _push3(`<div class="flex items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_InputText, {
                      modelValue: unref(answers)[idx].text,
                      "onUpdate:modelValue": ($event) => unref(answers)[idx].text = $event,
                      placeholder: `V\xE1lasz ${idx + 1}`,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Button, {
                      class: "ml-2",
                      severity: "danger",
                      rounded: "",
                      text: "",
                      onClick: ($event) => removeAnswer(idx)
                    }, {
                      default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(IconTrash, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(IconTrash)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    rounded: "",
                    class: "mt-4",
                    onClick: addEmptyAnswer
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(IconPlus, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(IconPlus)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (_3, idx) => {
                        return openBlock(), createBlock("div", {
                          key: idx,
                          class: "flex items-center"
                        }, [
                          createVNode(_component_InputText, {
                            modelValue: unref(answers)[idx].text,
                            "onUpdate:modelValue": ($event) => unref(answers)[idx].text = $event,
                            placeholder: `V\xE1lasz ${idx + 1}`,
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                          createVNode(_component_Button, {
                            class: "ml-2",
                            severity: "danger",
                            rounded: "",
                            text: "",
                            onClick: ($event) => removeAnswer(idx)
                          }, {
                            default: withCtx(() => [
                              createVNode(IconTrash)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]);
                      }), 128))
                    ]),
                    createVNode(_component_Button, {
                      rounded: "",
                      class: "mt-4",
                      onClick: addEmptyAnswer
                    }, {
                      default: withCtx(() => [
                        createVNode(IconPlus)
                      ]),
                      _: 1
                    })
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
              createVNode(_component_Panel, {
                header: "Helyes v\xE1laszok",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (a, idx) => {
                    return openBlock(), createBlock("div", {
                      key: idx,
                      class: "mb-3"
                    }, [
                      createVNode(_component_RadioButton, {
                        modelValue: unref(correctAnswers),
                        "onUpdate:modelValue": ($event) => isRef(correctAnswers) ? correctAnswers.value = $event : null,
                        value: idx,
                        onChange: onUpdate
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                      createVNode("label", { class: "ml-4" }, toDisplayString(unref(answers)[idx].text.substring(0, 40)), 1)
                    ]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_Panel, { header: "V\xE1laszok" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(answers), (_2, idx) => {
                      return openBlock(), createBlock("div", {
                        key: idx,
                        class: "flex items-center"
                      }, [
                        createVNode(_component_InputText, {
                          modelValue: unref(answers)[idx].text,
                          "onUpdate:modelValue": ($event) => unref(answers)[idx].text = $event,
                          placeholder: `V\xE1lasz ${idx + 1}`,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                        createVNode(_component_Button, {
                          class: "ml-2",
                          severity: "danger",
                          rounded: "",
                          text: "",
                          onClick: ($event) => removeAnswer(idx)
                        }, {
                          default: withCtx(() => [
                            createVNode(IconTrash)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]);
                    }), 128))
                  ]),
                  createVNode(_component_Button, {
                    rounded: "",
                    class: "mt-4",
                    onClick: addEmptyAnswer
                  }, {
                    default: withCtx(() => [
                      createVNode(IconPlus)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between"${_scopeId}><div class="flex justify-center items-center flex-col gap-2"${_scopeId}><input id="myfile"${ssrIncludeBooleanAttr(unref(isDisabled)) ? " disabled" : ""} type="file" name="myfile" accept=".png, .jpg, .jpeg"${_scopeId}><small${_scopeId}>Miel\u0151tt k\xE9pet adhatn\xE1l hozz\xE1 k\xE9rlek mentsd el a tesztet.</small></div>`);
            _push2(ssrRenderComponent(_component_Button, {
              text: "",
              rounded: "",
              severity: "danger",
              onClick: ($event) => emit("deleteQuestion")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(IconTrash, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(IconTrash)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between" }, [
                createVNode("div", { class: "flex justify-center items-center flex-col gap-2" }, [
                  createVNode("input", {
                    id: "myfile",
                    disabled: unref(isDisabled),
                    type: "file",
                    name: "myfile",
                    accept: ".png, .jpg, .jpeg",
                    onChange: onUpload
                  }, null, 40, ["disabled"]),
                  createVNode("small", null, "Miel\u0151tt k\xE9pet adhatn\xE1l hozz\xE1 k\xE9rlek mentsd el a tesztet.")
                ]),
                createVNode(_component_Button, {
                  text: "",
                  rounded: "",
                  severity: "danger",
                  onClick: ($event) => emit("deleteQuestion")
                }, {
                  default: withCtx(() => [
                    createVNode(IconTrash)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test-components/AppTestRadio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToastMessages();
    const testRepository = useDependency(TestRepositoryToken);
    const questionRepository = useDependency(QuestionRepositoryToken);
    const route = useRoute();
    const isLoading = ref(true);
    const tests = ref();
    const renderQuestions = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = tests.value) == null ? void 0 : _a.Questions) != null ? _a2 : [];
    });
    const addCheckbox = () => {
      var _a;
      (_a = tests.value) == null ? void 0 : _a.Questions.push({
        id: Number(Date.now()) * -1,
        Answers: [],
        text: "",
        type: QuestionTypes.SELECT_MORE,
        QuestionImage: null
      });
    };
    const addRadio = () => {
      var _a;
      (_a = tests.value) == null ? void 0 : _a.Questions.push({
        id: Number(Date.now()) * -1,
        Answers: [],
        text: "",
        type: QuestionTypes.SELECT_ONE,
        QuestionImage: null
      });
    };
    const deleteQuestion = async (index) => {
      const question = tests.value.Questions[index];
      if (question == null ? void 0 : question.id) {
        await questionRepository.delete(question.id);
      }
      tests.value.Questions = tests.value.Questions.filter((_, idx) => idx !== index);
    };
    const atLeastEveryWhereOneCorrectAnswer = computed(
      () => {
        var _a2;
        var _a, _b;
        return (_a2 = (_b = (_a = tests.value) == null ? void 0 : _a.Questions) == null ? void 0 : _b.every((q) => q.Answers.some((a) => a.point !== 0))) != null ? _a2 : false;
      }
    );
    const save = async () => {
      try {
        if (atLeastEveryWhereOneCorrectAnswer.value) {
          isLoading.value = true;
          const response = await testRepository.save(Number(route.params.id), tests.value);
          tests.value = response;
          toast.showSuccess({ message: "Sikeres ment\xE9s!" });
        } else {
          toast.showError({ message: "K\xE9rlek adj meg minden k\xE9rd\xE9sn\xE9l legal\xE1bb egy helyes v\xE1laszt." });
        }
      } catch (error) {
        toast.showError({ message: "Hiba t\xF6rt\xE9nt a ment\xE9s sor\xE1n!" });
      }
      isLoading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProgressSpinner = resolveComponent("ProgressSpinner");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center mt-2" }, _attrs))}><div class="max-w-5xl w-full flex flex-col gap-4">`);
      if (unref(isLoading)) {
        _push(`<div class="flex-1 flex justify-center items-center">`);
        _push(ssrRenderComponent(_component_ProgressSpinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(renderQuestions), (quest, idx) => {
          _push(`<!--[--><h2 class="text-xl text-white font-bold mt-4">${ssrInterpolate(`${idx + 1}. k\xE9rd\xE9s`)}</h2>`);
          if ((quest == null ? void 0 : quest.type) == unref(QuestionTypes).SELECT_MORE) {
            _push(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(renderQuestions)[idx],
              "onUpdate:modelValue": ($event) => unref(renderQuestions)[idx] = $event,
              onDeleteQuestion: ($event) => deleteQuestion(idx)
            }, null, _parent));
          } else if ((quest == null ? void 0 : quest.type) == unref(QuestionTypes).SELECT_ONE) {
            _push(ssrRenderComponent(_sfc_main$1, {
              modelValue: unref(renderQuestions)[idx],
              "onUpdate:modelValue": ($event) => unref(renderQuestions)[idx] = $event,
              onDeleteQuestion: ($event) => deleteQuestion(idx)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]-->`);
      }
      if (!unref(isLoading)) {
        _push(`<div class="flex flex-col gap-2">`);
        _push(ssrRenderComponent(_component_Button, {
          label: "T\xF6bb v\xE1laszlehet\u0151s\xE9ges k\xE9rd\xE9s hozz\xE1ad\xE1sa",
          "icon-class": "pi pi-plus",
          onClick: addCheckbox
        }, null, _parent));
        _push(ssrRenderComponent(_component_Button, {
          label: "Egy v\xE1laszlehet\u0151s\xE9ges k\xE9rd\xE9s hozz\xE1ad\xE1sa",
          onClick: addRadio
        }, null, _parent));
        _push(ssrRenderComponent(_component_Button, {
          label: "Ment\xE9s",
          class: "my-5",
          onClick: save
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/my/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-0e54eafa.mjs.map
