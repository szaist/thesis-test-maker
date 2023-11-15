import { defineComponent, ref, computed, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { b as useDependency, C as CourseRepositoryToken, U as UserRepositoryToken, u as useRoute } from '../server.mjs';
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
    const courseRepository = useDependency(CourseRepositoryToken);
    useDependency(UserRepositoryToken);
    const route = useRoute();
    const courseId = Number(route.params.id);
    const selectedCourse = ref();
    const studentsInCourse = ref();
    const students = ref();
    const studentsNotInCourse = computed(
      () => {
        var _a;
        return (_a = students.value) == null ? void 0 : _a.filter((s) => {
          var _a2;
          return ((_a2 = studentsInCourse.value) == null ? void 0 : _a2.findIndex((f) => f.id === s.id)) === -1;
        });
      }
    );
    const getStudentsInCourse = async () => {
      const response = await courseRepository.listUsersInCourse(courseId);
      studentsInCourse.value = response;
    };
    const removeStudentFromCourse = async (id) => {
      await courseRepository.disconnect(courseId, id);
      getStudentsInCourse();
    };
    const addStudentToCourse = async (id) => {
      var _a, _b;
      await courseRepository.connect(courseId, id);
      const user = (_a = students.value) == null ? void 0 : _a.find((u) => u.id === id);
      if (user) {
        (_b = studentsInCourse.value) == null ? void 0 : _b.push(user);
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
          var _a, _b;
          if (_push2) {
            _push2(`Kurzus: ${ssrInterpolate((_a = unref(selectedCourse)) == null ? void 0 : _a.name)}`);
          } else {
            return [
              createTextVNode("Kurzus: " + toDisplayString((_b = unref(selectedCourse)) == null ? void 0 : _b.name), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DataTable, {
              value: unref(studentsInCourse),
              "data-key": "id"
            }, {
              empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Nincsennek di\xE1kok hozz\xE1rendelve ehhez a kurzushoz. `);
                } else {
                  return [
                    createTextVNode(" Nincsennek di\xE1kok hozz\xE1rendelve ehhez a kurzushoz. ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "email",
                    header: "Email"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, { header: "N\xE9v" }, {
                    body: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d;
                      if (_push4) {
                        _push4(`${ssrInterpolate(`${(_a = slotProps.data.firstName) != null ? _a : ""} ${(_b = slotProps.data.lastName) != null ? _b : ""}`)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(`${(_c = slotProps.data.firstName) != null ? _c : ""} ${(_d = slotProps.data.lastName) != null ? _d : ""}`), 1)
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
                          icon: "pi pi-minus text-red-500",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => removeStudentFromCourse(slotProps.data.id)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            text: "",
                            icon: "pi pi-minus text-red-500",
                            rounded: "",
                            pt: {
                              label: {
                                class: "hidden"
                              }
                            },
                            onClick: () => removeStudentFromCourse(slotProps.data.id)
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Column, {
                      field: "email",
                      header: "Email"
                    }),
                    createVNode(_component_Column, { header: "N\xE9v" }, {
                      body: withCtx((slotProps) => {
                        var _a, _b;
                        return [
                          createTextVNode(toDisplayString(`${(_a = slotProps.data.firstName) != null ? _a : ""} ${(_b = slotProps.data.lastName) != null ? _b : ""}`), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_Column, {
                      "header-style": "width: 5rem; text-align: center",
                      "body-style": "text-align: center; overflow: visible"
                    }, {
                      body: withCtx((slotProps) => [
                        createVNode(_component_Button, {
                          text: "",
                          icon: "pi pi-minus text-red-500",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => removeStudentFromCourse(slotProps.data.id)
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
              createVNode(_component_DataTable, {
                value: unref(studentsInCourse),
                "data-key": "id"
              }, {
                empty: withCtx(() => [
                  createTextVNode(" Nincsennek di\xE1kok hozz\xE1rendelve ehhez a kurzushoz. ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_Column, {
                    field: "email",
                    header: "Email"
                  }),
                  createVNode(_component_Column, { header: "N\xE9v" }, {
                    body: withCtx((slotProps) => {
                      var _a, _b;
                      return [
                        createTextVNode(toDisplayString(`${(_a = slotProps.data.firstName) != null ? _a : ""} ${(_b = slotProps.data.lastName) != null ? _b : ""}`), 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_Column, {
                    "header-style": "width: 5rem; text-align: center",
                    "body-style": "text-align: center; overflow: visible"
                  }, {
                    body: withCtx((slotProps) => [
                      createVNode(_component_Button, {
                        text: "",
                        icon: "pi pi-minus text-red-500",
                        rounded: "",
                        pt: {
                          label: {
                            class: "hidden"
                          }
                        },
                        onClick: () => removeStudentFromCourse(slotProps.data.id)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, { class: "mt-4" }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Di\xE1kok`);
          } else {
            return [
              createTextVNode("Di\xE1kok")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DataTable, {
              value: unref(studentsNotInCourse),
              "data-key": "id"
            }, {
              empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Nincsennek di\xE1kok.`);
                } else {
                  return [
                    createTextVNode(" Nincsennek di\xE1kok.")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Column, {
                    field: "email",
                    header: "Email"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Column, { header: "N\xE9v" }, {
                    body: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d;
                      if (_push4) {
                        _push4(`${ssrInterpolate(`${(_a = slotProps.data.firstName) != null ? _a : ""} ${(_b = slotProps.data.lastName) != null ? _b : ""}`)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(`${(_c = slotProps.data.firstName) != null ? _c : ""} ${(_d = slotProps.data.lastName) != null ? _d : ""}`), 1)
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
                          icon: "pi pi-plus",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => addStudentToCourse(slotProps.data.id)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            text: "",
                            icon: "pi pi-plus",
                            rounded: "",
                            pt: {
                              label: {
                                class: "hidden"
                              }
                            },
                            onClick: () => addStudentToCourse(slotProps.data.id)
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Column, {
                      field: "email",
                      header: "Email"
                    }),
                    createVNode(_component_Column, { header: "N\xE9v" }, {
                      body: withCtx((slotProps) => {
                        var _a, _b;
                        return [
                          createTextVNode(toDisplayString(`${(_a = slotProps.data.firstName) != null ? _a : ""} ${(_b = slotProps.data.lastName) != null ? _b : ""}`), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_Column, {
                      "header-style": "width: 5rem; text-align: center",
                      "body-style": "text-align: center; overflow: visible"
                    }, {
                      body: withCtx((slotProps) => [
                        createVNode(_component_Button, {
                          text: "",
                          icon: "pi pi-plus",
                          rounded: "",
                          pt: {
                            label: {
                              class: "hidden"
                            }
                          },
                          onClick: () => addStudentToCourse(slotProps.data.id)
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
              createVNode(_component_DataTable, {
                value: unref(studentsNotInCourse),
                "data-key": "id"
              }, {
                empty: withCtx(() => [
                  createTextVNode(" Nincsennek di\xE1kok.")
                ]),
                default: withCtx(() => [
                  createVNode(_component_Column, {
                    field: "email",
                    header: "Email"
                  }),
                  createVNode(_component_Column, { header: "N\xE9v" }, {
                    body: withCtx((slotProps) => {
                      var _a, _b;
                      return [
                        createTextVNode(toDisplayString(`${(_a = slotProps.data.firstName) != null ? _a : ""} ${(_b = slotProps.data.lastName) != null ? _b : ""}`), 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_Column, {
                    "header-style": "width: 5rem; text-align: center",
                    "body-style": "text-align: center; overflow: visible"
                  }, {
                    body: withCtx((slotProps) => [
                      createVNode(_component_Button, {
                        text: "",
                        icon: "pi pi-plus",
                        rounded: "",
                        pt: {
                          label: {
                            class: "hidden"
                          }
                        },
                        onClick: () => addStudentToCourse(slotProps.data.id)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/my/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-c909f5ce.mjs.map
