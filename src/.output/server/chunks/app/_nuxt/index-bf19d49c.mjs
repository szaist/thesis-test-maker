import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, useSSRContext } from 'vue';
import { b as useDependency, F as FillTestRepositoryToken, a as useRouter, u as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { I as IconRefresh } from './IconRefresh-42ea03a8.mjs';
import { I as IconBook } from './IconBook-7fae1a24.mjs';
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
    const filledTestRepository = useDependency(FillTestRepositoryToken);
    const router = useRouter();
    const route = useRoute();
    const isLoading = ref(true);
    const upcomingTestId = route.params.upcomingTestId;
    const whoFilled = ref(null);
    const getWhoFilledTheTest = async () => {
      isLoading.value = true;
      const response = await filledTestRepository.listTeacherUpcomingTestFillers(Number(upcomingTestId));
      whoFilled.value = response;
      isLoading.value = false;
    };
    const openUpcomingTestResults = (userId) => {
      router.push({
        path: `/test-results/teacher/${upcomingTestId}/${userId}`
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
              value: unref(whoFilled),
              "data-key": "id",
              loading: unref(isLoading),
              size: "small"
            }, {
              empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Nincsennek tesztkit\xF6lt\u0151k. `);
                } else {
                  return [
                    createTextVNode(" Nincsennek tesztkit\xF6lt\u0151k. ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "",
                    header: "Kit\xF6lt\u0151 neve"
                  }, {
                    body: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(`${slotProps.data.user.lastName} ${slotProps.data.user.firstName}`)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(`${slotProps.data.user.lastName} ${slotProps.data.user.firstName}`), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "upComingTest.course.name",
                    header: "Kurzus neve"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, { header: "Eredm\xE9ny" }, {
                    body: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(`${slotProps.data.reachedPoints} / ${slotProps.data.maxPoints}`)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(`${slotProps.data.reachedPoints} / ${slotProps.data.maxPoints}`), 1)
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
                          onClick: getWhoFilledTheTest
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
                              onClick: getWhoFilledTheTest
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
                          onClick: () => openUpcomingTestResults(slotProps.data.user.id)
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
                            onClick: () => openUpcomingTestResults(slotProps.data.user.id)
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
                } else {
                  return [
                    createVNode(_component_Column, {
                      field: "",
                      header: "Kit\xF6lt\u0151 neve"
                    }, {
                      body: withCtx((slotProps) => [
                        createTextVNode(toDisplayString(`${slotProps.data.user.lastName} ${slotProps.data.user.firstName}`), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Column, {
                      field: "upComingTest.course.name",
                      header: "Kurzus neve"
                    }),
                    createVNode(_component_Column, { header: "Eredm\xE9ny" }, {
                      body: withCtx((slotProps) => [
                        createTextVNode(toDisplayString(`${slotProps.data.reachedPoints} / ${slotProps.data.maxPoints}`), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Column, { header: "" }, {
                      header: withCtx(() => [
                        createVNode("div", { class: "flex justify-end w-full" }, [
                          createVNode(_component_Button, {
                            text: "",
                            onClick: getWhoFilledTheTest
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
                          onClick: () => openUpcomingTestResults(slotProps.data.user.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(IconBook)
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
                value: unref(whoFilled),
                "data-key": "id",
                loading: unref(isLoading),
                size: "small"
              }, {
                empty: withCtx(() => [
                  createTextVNode(" Nincsennek tesztkit\xF6lt\u0151k. ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_Column, {
                    field: "",
                    header: "Kit\xF6lt\u0151 neve"
                  }, {
                    body: withCtx((slotProps) => [
                      createTextVNode(toDisplayString(`${slotProps.data.user.lastName} ${slotProps.data.user.firstName}`), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Column, {
                    field: "upComingTest.course.name",
                    header: "Kurzus neve"
                  }),
                  createVNode(_component_Column, { header: "Eredm\xE9ny" }, {
                    body: withCtx((slotProps) => [
                      createTextVNode(toDisplayString(`${slotProps.data.reachedPoints} / ${slotProps.data.maxPoints}`), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Column, { header: "" }, {
                    header: withCtx(() => [
                      createVNode("div", { class: "flex justify-end w-full" }, [
                        createVNode(_component_Button, {
                          text: "",
                          onClick: getWhoFilledTheTest
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
                        onClick: () => openUpcomingTestResults(slotProps.data.user.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(IconBook)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-results/teacher/[upcomingTestId]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-bf19d49c.mjs.map
