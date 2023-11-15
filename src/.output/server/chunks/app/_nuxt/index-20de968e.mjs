import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, useSSRContext } from 'vue';
import { b as useDependency, C as CourseRepositoryToken, a as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { I as IconCog } from './IconCog-bc2f0151.mjs';
import { I as IconRefresh } from './IconRefresh-42ea03a8.mjs';
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
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const courseRepository = useDependency(CourseRepositoryToken);
    const toastStore = useToastMessages();
    const router = useRouter();
    const isLoading = ref(true);
    const myCourses = ref();
    const getMyCourses = async () => {
      try {
        isLoading.value = true;
        const response = await courseRepository.listOwned();
        myCourses.value = response;
      } catch (error) {
        toastStore.showError({ message: "Nem siker\xFClt bet\xF6lten\xFCnk a kurzusokat" });
      }
      isLoading.value = false;
    };
    const openCourseInfo = (id) => {
      router.push({ path: `/course/my/${id}` });
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
            _push2(`Kurzusaim`);
          } else {
            return [
              createTextVNode("Kurzusaim")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DataTable, {
              value: unref(myCourses),
              "data-key": "id",
              size: "small",
              loading: unref(isLoading)
            }, {
              empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Nincsennek kurzusaid. `);
                } else {
                  return [
                    createTextVNode(" Nincsennek kurzusaid. ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "name",
                    header: "N\xE9v"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "description",
                    header: "Le\xEDr\xE1s"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, {
                    "header-style": "width: 5rem; text-align: center",
                    "body-style": "text-align: center; overflow: visible"
                  }, {
                    header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-end w-full"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          text: "",
                          onClick: getMyCourses
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
                              onClick: getMyCourses
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
                          onClick: () => openCourseInfo(slotProps.data.id)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(IconCog, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(IconCog)
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
                            onClick: () => openCourseInfo(slotProps.data.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(IconCog)
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
                      field: "name",
                      header: "N\xE9v"
                    }),
                    createVNode(_component_Column, {
                      field: "description",
                      header: "Le\xEDr\xE1s"
                    }),
                    createVNode(_component_Column, {
                      "header-style": "width: 5rem; text-align: center",
                      "body-style": "text-align: center; overflow: visible"
                    }, {
                      header: withCtx(() => [
                        createVNode("div", { class: "flex justify-end w-full" }, [
                          createVNode(_component_Button, {
                            text: "",
                            onClick: getMyCourses
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
                          onClick: () => openCourseInfo(slotProps.data.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(IconCog)
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
                value: unref(myCourses),
                "data-key": "id",
                size: "small",
                loading: unref(isLoading)
              }, {
                empty: withCtx(() => [
                  createTextVNode(" Nincsennek kurzusaid. ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_Column, {
                    field: "name",
                    header: "N\xE9v"
                  }),
                  createVNode(_component_Column, {
                    field: "description",
                    header: "Le\xEDr\xE1s"
                  }),
                  createVNode(_component_Column, {
                    "header-style": "width: 5rem; text-align: center",
                    "body-style": "text-align: center; overflow: visible"
                  }, {
                    header: withCtx(() => [
                      createVNode("div", { class: "flex justify-end w-full" }, [
                        createVNode(_component_Button, {
                          text: "",
                          onClick: getMyCourses
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
                        onClick: () => openCourseInfo(slotProps.data.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(IconCog)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/my/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-20de968e.mjs.map
