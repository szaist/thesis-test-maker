import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, useSSRContext } from 'vue';
import { b as useDependency, T as TestRepositoryToken, a as useRouter, g as useConfirm } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { I as IconCog } from './IconCog-bc2f0151.mjs';
import { I as IconTrash } from './IconTrash-cbe8c635.mjs';
import { u as useToastMessages } from './toast-message-6430ad2e.mjs';
import { I as IconRefresh } from './IconRefresh-42ea03a8.mjs';
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
    const testRepository = useDependency(TestRepositoryToken);
    const router = useRouter();
    const toastStore = useToastMessages();
    const confirm = useConfirm();
    const isLoading = ref(true);
    const myTests = ref();
    const getMyTests = async () => {
      try {
        isLoading.value = true;
        const response = await testRepository.listOwned();
        myTests.value = response;
      } catch (error) {
        toastStore.showError({ message: "Hiba t\xF6rt\xE9nt a tesztek lek\xE9r\xE9se k\xF6zben!" });
      }
      isLoading.value = false;
    };
    const openTestInfo = (id) => {
      router.push({ path: `/test/my/${id}` });
    };
    const deleteTest = (_id) => {
      confirm.require({
        header: "Teszt t\xF6rl\xE9se",
        message: "Biztosan szeretn\xE9d t\xF6r\xF6lni ezt a tesztet?",
        acceptClass: "dialog-red-btn ml-2",
        accept: () => {
          var _a;
          try {
            testRepository.delete({ testId: _id });
            myTests.value = (_a = myTests.value) == null ? void 0 : _a.filter((t) => t.id !== _id);
            toastStore.showSuccess({ message: "Teszt sikeresen t\xF6r\xF6lve!" });
          } catch (error) {
            toastStore.showError({ message: "Hiba t\xF6rt\xE9nt a teszt t\xF6rl\xE9se sor\xE1n!" });
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
            _push2(`Tesztjeim`);
          } else {
            return [
              createTextVNode("Tesztjeim")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DataTable, {
              value: unref(myTests),
              "data-key": "id",
              loading: unref(isLoading),
              size: "small"
            }, {
              empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Nincsennek tesztjeid. `);
                } else {
                  return [
                    createTextVNode(" Nincsennek tesztjeid. ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "title",
                    header: "N\xE9v"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "description",
                    header: "Le\xEDr\xE1s"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, {
                    header: "",
                    "body-style": "width: 200px"
                  }, {
                    header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-end w-full"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          text: "",
                          onClick: getMyTests
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
                              onClick: getMyTests
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
                          onClick: () => openTestInfo(slotProps.data.id)
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
                        _push4(ssrRenderComponent(_component_Button, {
                          text: "",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => deleteTest(slotProps.data.id)
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
                            onClick: () => openTestInfo(slotProps.data.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(IconCog)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_Button, {
                            text: "",
                            rounded: "",
                            pt: {
                              label: {
                                class: "hidden"
                              }
                            },
                            onClick: () => deleteTest(slotProps.data.id)
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
                      field: "title",
                      header: "N\xE9v"
                    }),
                    createVNode(_component_Column, {
                      field: "description",
                      header: "Le\xEDr\xE1s"
                    }),
                    createVNode(_component_Column, {
                      header: "",
                      "body-style": "width: 200px"
                    }, {
                      header: withCtx(() => [
                        createVNode("div", { class: "flex justify-end w-full" }, [
                          createVNode(_component_Button, {
                            text: "",
                            onClick: getMyTests
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
                          onClick: () => openTestInfo(slotProps.data.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(IconCog)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_Button, {
                          text: "",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => deleteTest(slotProps.data.id)
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
                value: unref(myTests),
                "data-key": "id",
                loading: unref(isLoading),
                size: "small"
              }, {
                empty: withCtx(() => [
                  createTextVNode(" Nincsennek tesztjeid. ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_Column, {
                    field: "title",
                    header: "N\xE9v"
                  }),
                  createVNode(_component_Column, {
                    field: "description",
                    header: "Le\xEDr\xE1s"
                  }),
                  createVNode(_component_Column, {
                    header: "",
                    "body-style": "width: 200px"
                  }, {
                    header: withCtx(() => [
                      createVNode("div", { class: "flex justify-end w-full" }, [
                        createVNode(_component_Button, {
                          text: "",
                          onClick: getMyTests
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
                        onClick: () => openTestInfo(slotProps.data.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(IconCog)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_Button, {
                        text: "",
                        rounded: "",
                        pt: {
                          label: {
                            class: "hidden"
                          }
                        },
                        onClick: () => deleteTest(slotProps.data.id)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/my/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-0b017e32.mjs.map
