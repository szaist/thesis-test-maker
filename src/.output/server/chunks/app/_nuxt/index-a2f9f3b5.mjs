import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, useSSRContext } from 'vue';
import { a as useRouter, b as useDependency, e as UpcomingTestRepositoryToken, g as useConfirm } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { I as IconBook } from './IconBook-7fae1a24.mjs';
import { I as IconRefresh } from './IconRefresh-42ea03a8.mjs';
import { I as IconTrash } from './IconTrash-cbe8c635.mjs';
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
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const upcomingRepository = useDependency(UpcomingTestRepositoryToken);
    const isLoading = ref(true);
    const confirm = useConfirm();
    const myUpcomingTests = ref();
    const getUpcomingTests = async () => {
      try {
        isLoading.value = true;
        const response = await upcomingRepository.listOwned();
        myUpcomingTests.value = response;
      } catch (error) {
      }
      isLoading.value = false;
    };
    const openUpcomingTestResults = (_id) => {
      router.push({
        path: `/test-results/teacher/${_id}`
      });
    };
    const deleteUpcomingTest = (_id) => {
      confirm.require({
        header: "Ki\xEDrt teszt t\xF6rl\xE9se",
        message: "Biztosan kiszeretn\xE9d t\xF6r\xF6lni ezt a ki\xEDrt tesztet?",
        acceptClass: "dialog-red-btn ml-2",
        accept: async () => {
          var _a;
          try {
            await upcomingRepository.delete(_id);
            myUpcomingTests.value = (_a = myUpcomingTests.value) == null ? void 0 : _a.filter((u) => u.id !== _id);
          } catch (error) {
          }
        }
      });
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
            _push2(`Ki\xEDrt tesztjeim`);
          } else {
            return [
              createTextVNode("Ki\xEDrt tesztjeim")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DataTable, {
              value: unref(myUpcomingTests),
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
                  _push3(ssrRenderComponent(_component_Column, { header: "" }, {
                    body: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          text: "",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => openUpcomingTestResults(slotProps.data.id)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(IconBook, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(IconBook)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            text: "",
                            rounded: "",
                            pt: {
                              label: {
                                class: "hidden"
                              }
                            },
                            onClick: () => openUpcomingTestResults(slotProps.data.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(IconBook)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, { header: "" }, {
                    header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-end w-full"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          text: "",
                          onClick: getUpcomingTests
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
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-end w-full" }, [
                            createVNode(_component_Button, {
                              text: "",
                              onClick: getUpcomingTests
                            }, {
                              default: withCtx(() => [
                                createVNode(IconRefresh)
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    body: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          text: "",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => deleteUpcomingTest(slotProps.data.id)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(IconTrash, { class: "text-red-600" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(IconTrash, { class: "text-red-600" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            text: "",
                            rounded: "",
                            pt: {
                              label: {
                                class: "hidden"
                              }
                            },
                            onClick: () => deleteUpcomingTest(slotProps.data.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(IconTrash, { class: "text-red-600" })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
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
                    createVNode(_component_Column, { header: "" }, {
                      body: withCtx((slotProps) => [
                        createVNode(_component_Button, {
                          text: "",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => openUpcomingTestResults(slotProps.data.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(IconBook)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Column, { header: "" }, {
                      header: withCtx(() => [
                        createVNode("div", { class: "flex justify-end w-full" }, [
                          createVNode(_component_Button, {
                            text: "",
                            onClick: getUpcomingTests
                          }, {
                            default: withCtx(() => [
                              createVNode(IconRefresh)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      body: withCtx((slotProps) => [
                        createVNode(_component_Button, {
                          text: "",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => deleteUpcomingTest(slotProps.data.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(IconTrash, { class: "text-red-600" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
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
                value: unref(myUpcomingTests),
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
                  createVNode(_component_Column, { header: "" }, {
                    body: withCtx((slotProps) => [
                      createVNode(_component_Button, {
                        text: "",
                        rounded: "",
                        pt: {
                          label: {
                            class: "hidden"
                          }
                        },
                        onClick: () => openUpcomingTestResults(slotProps.data.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(IconBook)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Column, { header: "" }, {
                    header: withCtx(() => [
                      createVNode("div", { class: "flex justify-end w-full" }, [
                        createVNode(_component_Button, {
                          text: "",
                          onClick: getUpcomingTests
                        }, {
                          default: withCtx(() => [
                            createVNode(IconRefresh)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    body: withCtx((slotProps) => [
                      createVNode(_component_Button, {
                        text: "",
                        rounded: "",
                        pt: {
                          label: {
                            class: "hidden"
                          }
                        },
                        onClick: () => deleteUpcomingTest(slotProps.data.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(IconTrash, { class: "text-red-600" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/upcoming-test/my/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-a2f9f3b5.mjs.map
