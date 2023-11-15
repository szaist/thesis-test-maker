import { defineComponent, ref, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { b as useDependency, C as CourseRepositoryToken, T as TestRepositoryToken, F as FillTestRepositoryToken, u as useRoute, a as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useDependency(CourseRepositoryToken);
    useDependency(TestRepositoryToken);
    useDependency(FillTestRepositoryToken);
    const route = useRoute();
    const router = useRouter();
    ref(route.params.id);
    const course = ref();
    ref();
    ref();
    const filledTests = ref();
    const isLoading = ref(true);
    const openFilledTest = (upcomingTestId) => {
      router.push({ path: `/test-results/student/${upcomingTestId}` });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      const _component_DataTable = resolveComponent("DataTable");
      const _component_Column = resolveComponent("Column");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "max-w-5xl w-full mx-auto mt-4",
        "keep-alive": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Card, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`${ssrInterpolate((_a = unref(course)) == null ? void 0 : _a.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b = unref(course)) == null ? void 0 : _b.name), 1)
            ];
          }
        }),
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`${ssrInterpolate((_a = unref(course)) == null ? void 0 : _a.description)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b = unref(course)) == null ? void 0 : _b.description), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-3xl font-bold"${_scopeId}>Kit\xF6lt\xF6tt tesztek</h2>`);
            _push2(ssrRenderComponent(_component_DataTable, {
              value: unref(filledTests),
              loading: unref(isLoading),
              size: "small"
            }, {
              empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Nincsennek ki\xEDrt tesztjeid. `);
                } else {
                  return [
                    createTextVNode(" Nincsennek ki\xEDrt tesztjeid. ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "upComingTest.test.title",
                    header: "Teszt neve"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "upComingTest.course.name",
                    header: "Kurzus neve"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "startDate",
                    header: "Kezd\xE9s id\u0151pontja"
                  }, {
                    body: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(new Date(slotProps.data.startDate).toLocaleDateString("default", {
                          minute: "numeric",
                          hour: "numeric"
                        }))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(new Date(slotProps.data.startDate).toLocaleDateString("default", {
                            minute: "numeric",
                            hour: "numeric"
                          })), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "endDate",
                    header: "Befejez\xE9s id\u0151pontja"
                  }, {
                    body: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(new Date(slotProps.data.endDate).toLocaleDateString("default", {
                          minute: "numeric",
                          hour: "numeric"
                        }))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(new Date(slotProps.data.endDate).toLocaleDateString("default", {
                            minute: "numeric",
                            hour: "numeric"
                          })), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, {
                    "header-style": "width: 5rem; text-align: center",
                    "body-style": "text-align: center; overflow: visible"
                  }, {
                    body: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          text: "",
                          icon: "pi pi-book",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => openFilledTest(slotProps.data.upComingTest.id)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            text: "",
                            icon: "pi pi-book",
                            rounded: "",
                            pt: {
                              label: {
                                class: "hidden"
                              }
                            },
                            onClick: () => openFilledTest(slotProps.data.upComingTest.id)
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Column, {
                      field: "upComingTest.test.title",
                      header: "Teszt neve"
                    }),
                    createVNode(_component_Column, {
                      field: "upComingTest.course.name",
                      header: "Kurzus neve"
                    }),
                    createVNode(_component_Column, {
                      field: "startDate",
                      header: "Kezd\xE9s id\u0151pontja"
                    }, {
                      body: withCtx((slotProps) => [
                        createTextVNode(toDisplayString(new Date(slotProps.data.startDate).toLocaleDateString("default", {
                          minute: "numeric",
                          hour: "numeric"
                        })), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Column, {
                      field: "endDate",
                      header: "Befejez\xE9s id\u0151pontja"
                    }, {
                      body: withCtx((slotProps) => [
                        createTextVNode(toDisplayString(new Date(slotProps.data.endDate).toLocaleDateString("default", {
                          minute: "numeric",
                          hour: "numeric"
                        })), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Column, {
                      "header-style": "width: 5rem; text-align: center",
                      "body-style": "text-align: center; overflow: visible"
                    }, {
                      body: withCtx((slotProps) => [
                        createVNode(_component_Button, {
                          text: "",
                          icon: "pi pi-book",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => openFilledTest(slotProps.data.upComingTest.id)
                        }, null, 8, ["onClick"])
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
              createVNode("h2", { class: "text-3xl font-bold" }, "Kit\xF6lt\xF6tt tesztek"),
              createVNode(_component_DataTable, {
                value: unref(filledTests),
                loading: unref(isLoading),
                size: "small"
              }, {
                empty: withCtx(() => [
                  createTextVNode(" Nincsennek ki\xEDrt tesztjeid. ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_Column, {
                    field: "upComingTest.test.title",
                    header: "Teszt neve"
                  }),
                  createVNode(_component_Column, {
                    field: "upComingTest.course.name",
                    header: "Kurzus neve"
                  }),
                  createVNode(_component_Column, {
                    field: "startDate",
                    header: "Kezd\xE9s id\u0151pontja"
                  }, {
                    body: withCtx((slotProps) => [
                      createTextVNode(toDisplayString(new Date(slotProps.data.startDate).toLocaleDateString("default", {
                        minute: "numeric",
                        hour: "numeric"
                      })), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Column, {
                    field: "endDate",
                    header: "Befejez\xE9s id\u0151pontja"
                  }, {
                    body: withCtx((slotProps) => [
                      createTextVNode(toDisplayString(new Date(slotProps.data.endDate).toLocaleDateString("default", {
                        minute: "numeric",
                        hour: "numeric"
                      })), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Column, {
                    "header-style": "width: 5rem; text-align: center",
                    "body-style": "text-align: center; overflow: visible"
                  }, {
                    body: withCtx((slotProps) => [
                      createVNode(_component_Button, {
                        text: "",
                        icon: "pi pi-book",
                        rounded: "",
                        pt: {
                          label: {
                            class: "hidden"
                          }
                        },
                        onClick: () => openFilledTest(slotProps.data.upComingTest.id)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-27bb530f.mjs.map
