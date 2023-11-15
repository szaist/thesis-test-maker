import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, useSSRContext } from 'vue';
import { a as useRouter, b as useDependency, F as FillTestRepositoryToken, e as UpcomingTestRepositoryToken } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { I as IconRefresh } from './IconRefresh-42ea03a8.mjs';
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
  _push(`<i${ssrRenderAttrs(mergeProps({ class: "pi pi-play" }, _attrs))}></i>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconPlay.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconPlay = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const upcomingTests = ref();
    const isLoading = ref(true);
    const fillingTestRepository = useDependency(FillTestRepositoryToken);
    const upcomingTestRepository = useDependency(UpcomingTestRepositoryToken);
    const getUpcomingTest = async () => {
      try {
        isLoading.value = true;
        const response = await upcomingTestRepository.list();
        upcomingTests.value = response;
      } catch (error) {
      }
      isLoading.value = false;
    };
    const isStartable = (startDate, endDate) => {
      const now = /* @__PURE__ */ new Date();
      return now >= new Date(startDate) && now <= new Date(endDate);
    };
    const startTest = async (id) => {
      var _a;
      const test = (_a = upcomingTests.value) == null ? void 0 : _a.find((u) => u.id === id);
      if (!test)
        return;
      if (isStartable(test.startDate, test.lastStartDate)) {
        try {
          const response = await fillingTestRepository.startTest(id);
          router.push({
            path: `/test/fill/${response.id}/${test.id}`
          });
        } catch (error) {
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      const _component_DataTable = resolveComponent("DataTable");
      const _component_Column = resolveComponent("Column");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl w-full mx-auto mt-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Card, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sz\xE1momra ki\xEDrt tesztek`);
          } else {
            return [
              createTextVNode("Sz\xE1momra ki\xEDrt tesztek")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DataTable, {
              value: unref(upcomingTests),
              "data-key": "id",
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
                    field: "test.title",
                    header: "Teszt neve"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "course.name",
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
                    field: "lastStartDate",
                    header: "Utols\xF3 elind\xEDt\xE1s id\u0151pontja"
                  }, {
                    body: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(new Date(slotProps.data.lastStartDate).toLocaleDateString("default", {
                          minute: "numeric",
                          hour: "numeric"
                        }))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(new Date(slotProps.data.lastStartDate).toLocaleDateString("default", {
                            minute: "numeric",
                            hour: "numeric"
                          })), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, {
                    header: "",
                    "body-style": "width: 70px"
                  }, {
                    header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          text: "",
                          onClick: getUpcomingTest
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(IconRefresh, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(IconRefresh)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            text: "",
                            onClick: getUpcomingTest
                          }, {
                            default: withCtx(() => [
                              createVNode(IconRefresh)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    body: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          disabled: !isStartable(slotProps.data.startDate, slotProps.data.lastStartDate),
                          text: "",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => startTest(slotProps.data.id)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(IconPlay, {
                                class: {
                                  "text-gray-400": !isStartable(
                                    slotProps.data.startDate,
                                    slotProps.data.lastStartDate
                                  )
                                }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(IconPlay, {
                                  class: {
                                    "text-gray-400": !isStartable(
                                      slotProps.data.startDate,
                                      slotProps.data.lastStartDate
                                    )
                                  }
                                }, null, 8, ["class"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode(_component_Button, {
                              disabled: !isStartable(slotProps.data.startDate, slotProps.data.lastStartDate),
                              text: "",
                              rounded: "",
                              pt: {
                                label: {
                                  class: "hidden"
                                }
                              },
                              onClick: () => startTest(slotProps.data.id)
                            }, {
                              default: withCtx(() => [
                                createVNode(IconPlay, {
                                  class: {
                                    "text-gray-400": !isStartable(
                                      slotProps.data.startDate,
                                      slotProps.data.lastStartDate
                                    )
                                  }
                                }, null, 8, ["class"])
                              ]),
                              _: 2
                            }, 1032, ["disabled", "onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Column, {
                      field: "test.title",
                      header: "Teszt neve"
                    }),
                    createVNode(_component_Column, {
                      field: "course.name",
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
                      field: "lastStartDate",
                      header: "Utols\xF3 elind\xEDt\xE1s id\u0151pontja"
                    }, {
                      body: withCtx((slotProps) => [
                        createTextVNode(toDisplayString(new Date(slotProps.data.lastStartDate).toLocaleDateString("default", {
                          minute: "numeric",
                          hour: "numeric"
                        })), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Column, {
                      header: "",
                      "body-style": "width: 70px"
                    }, {
                      header: withCtx(() => [
                        createVNode(_component_Button, {
                          text: "",
                          onClick: getUpcomingTest
                        }, {
                          default: withCtx(() => [
                            createVNode(IconRefresh)
                          ]),
                          _: 1
                        })
                      ]),
                      body: withCtx((slotProps) => [
                        createVNode("div", null, [
                          createVNode(_component_Button, {
                            disabled: !isStartable(slotProps.data.startDate, slotProps.data.lastStartDate),
                            text: "",
                            rounded: "",
                            pt: {
                              label: {
                                class: "hidden"
                              }
                            },
                            onClick: () => startTest(slotProps.data.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(IconPlay, {
                                class: {
                                  "text-gray-400": !isStartable(
                                    slotProps.data.startDate,
                                    slotProps.data.lastStartDate
                                  )
                                }
                              }, null, 8, ["class"])
                            ]),
                            _: 2
                          }, 1032, ["disabled", "onClick"])
                        ])
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
              createVNode(_component_DataTable, {
                value: unref(upcomingTests),
                "data-key": "id",
                loading: unref(isLoading),
                size: "small"
              }, {
                empty: withCtx(() => [
                  createTextVNode(" Nincsennek ki\xEDrt tesztjeid. ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_Column, {
                    field: "test.title",
                    header: "Teszt neve"
                  }),
                  createVNode(_component_Column, {
                    field: "course.name",
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
                    field: "lastStartDate",
                    header: "Utols\xF3 elind\xEDt\xE1s id\u0151pontja"
                  }, {
                    body: withCtx((slotProps) => [
                      createTextVNode(toDisplayString(new Date(slotProps.data.lastStartDate).toLocaleDateString("default", {
                        minute: "numeric",
                        hour: "numeric"
                      })), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Column, {
                    header: "",
                    "body-style": "width: 70px"
                  }, {
                    header: withCtx(() => [
                      createVNode(_component_Button, {
                        text: "",
                        onClick: getUpcomingTest
                      }, {
                        default: withCtx(() => [
                          createVNode(IconRefresh)
                        ]),
                        _: 1
                      })
                    ]),
                    body: withCtx((slotProps) => [
                      createVNode("div", null, [
                        createVNode(_component_Button, {
                          disabled: !isStartable(slotProps.data.startDate, slotProps.data.lastStartDate),
                          text: "",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => startTest(slotProps.data.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(IconPlay, {
                              class: {
                                "text-gray-400": !isStartable(
                                  slotProps.data.startDate,
                                  slotProps.data.lastStartDate
                                )
                              }
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/upcoming-test/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-63cbb84a.mjs.map
