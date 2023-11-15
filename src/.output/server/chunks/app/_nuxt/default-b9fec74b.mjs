import { defineComponent, defineAsyncComponent, reactive, computed, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { i as useDialog, s as storeToRefs, a as useRouter, b as useDependency, C as CourseRepositoryToken, g as useConfirm } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-c755def0.mjs';
import { u as useToastMessages } from './toast-message-6430ad2e.mjs';
import { R as ROLES } from './Roles-bc1b1c78.mjs';
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

const useLogout = () => {
  const confirm = useConfirm();
  const authStore = useAuthStore();
  const toastStore = useToastMessages();
  const router = useRouter();
  return () => {
    confirm.require({
      group: "logout",
      message: "Biztosan szeretn\xE9l kijelentkezni?",
      header: "Kijelentkez\xE9s",
      acceptClass: "ml-2 dialog-logout-accept-btn",
      accept: () => {
        toastStore.showInfo({ message: "Sikeresen kijelentkezt\xE9l!" });
        authStore.token = null;
        authStore.authUser = null;
        router.push({ path: "/auth/login" });
      },
      reject: () => {
      }
    });
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const CreateCourse = defineAsyncComponent(() => import('./AppCreateCourse-c9c317d0.mjs'));
    const CreateTest = defineAsyncComponent(() => import('./AppCreateTest-0b588391.mjs'));
    const CreateUpcomingCourse = defineAsyncComponent(() => import('./AppCreateUpcomingTest-7b49aa36.mjs'));
    const dialog = useDialog();
    const showCreateCourseDialog = () => {
      dialog.open(CreateCourse, {
        props: {
          modal: true,
          header: "Kurzus hozz\xE1ad\xE1s"
        },
        onClose: () => {
        }
      });
    };
    const showCreateTestDialog = () => {
      dialog.open(CreateTest, {
        props: {
          modal: true,
          header: "Teszt l\xE9trehoz\xE1sa"
        },
        onClose: () => {
        }
      });
    };
    const showCreateUpcomingTestDialog = () => {
      dialog.open(CreateUpcomingCourse, {
        props: {
          modal: true,
          header: "Teszt kurzushoz rendel\xE9se"
        },
        onClose: () => {
        }
      });
    };
    const logout = useLogout();
    const authStore = useAuthStore();
    const { token } = storeToRefs(authStore);
    const router = useRouter();
    const courseRepository = useDependency(CourseRepositoryToken);
    const courses = reactive([]);
    const getConnectedCourses = async () => {
      try {
        courses.splice(0);
        const course = await courseRepository.listConnected();
        course.forEach((c) => {
          courses.push({
            label: c.name,
            command: () => {
              router.push({ path: `/course/${c.id}` });
            }
          });
        });
      } catch (error) {
      }
    };
    const loggedInStudentItems = reactive([
      {
        label: "Profil",
        command: () => {
          router.push({
            path: "/"
          });
        }
      },
      {
        label: "Kurzus",
        command: () => {
          getConnectedCourses();
        },
        items: [
          {
            label: "El\xE9rhet\u0151 kurzusok",
            items: courses
          }
        ]
      },
      {
        label: "Tesztek",
        items: [
          {
            label: "Tesztjeim",
            command: () => {
              router.push({ path: "/upcoming-test" });
            }
          }
        ]
      }
    ]);
    const loggedInTeacherItems = reactive([
      {
        label: "Profil",
        command: () => {
          router.push({
            path: "/"
          });
        }
      },
      {
        label: "Kurzus",
        items: [
          {
            label: "Kurzusaim",
            command: () => {
              router.push({ path: "/course/my" });
            }
          },
          {
            label: "\xDAj kurzus hozz\xE1ad\xE1sa",
            command: () => {
              showCreateCourseDialog();
            }
          }
        ]
      },
      {
        label: "Tesztek",
        items: [
          {
            label: "Tesztjeim",
            command: () => {
              router.push({ path: "/test/my" });
            }
          },
          {
            label: "\xDAj teszt l\xE9trehoz\xE1sa",
            command: () => {
              showCreateTestDialog();
            }
          }
        ]
      },
      {
        label: "Kit\xF6ltend\u0151 tesztek",
        items: [
          {
            label: "Ki\xEDrt tesztek",
            command: () => {
              router.push({ path: "/upcoming-test/my" });
            }
          },
          {
            label: "\xDAj teszt ki\xEDr\xE1sa",
            command: () => {
              showCreateUpcomingTestDialog();
            }
          }
        ]
      }
    ]);
    const loggedInMenuItems = computed(() => {
      var _a;
      switch ((_a = authStore.authUser) == null ? void 0 : _a.role) {
        case ROLES.STUDENT:
          return loggedInStudentItems;
        case ROLES.TEACHER:
          return loggedInTeacherItems;
      }
    });
    const loggedOutMenuItems = reactive([
      {
        label: "Bejelentkez\xE9s",
        command: () => {
          router.push({ path: "/auth/login" });
        }
      },
      {
        label: "Regisztr\xE1ci\xF3",
        command: () => {
          router.push({ path: "/auth/register" });
        }
      }
    ]);
    const menuItems = computed(() => token.value ? loggedInMenuItems.value : loggedOutMenuItems);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Menubar = resolveComponent("Menubar");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Menubar, {
        key: (_a = unref(token)) != null ? _a : "",
        model: unref(menuItems),
        pt: {
          end: "ml-auto"
        },
        "pt-options": { mergeSections: true, mergeProps: true }
      }, {
        end: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(token)) {
              _push2(ssrRenderComponent(_component_Button, {
                text: "",
                label: "Kijelentkez\xE9s",
                class: "ml-auto",
                pt: {
                  label: "text-white dark:text-white/80 font-normal"
                },
                onClick: unref(logout)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(token) ? (openBlock(), createBlock(_component_Button, {
                key: 0,
                text: "",
                label: "Kijelentkez\xE9s",
                class: "ml-auto",
                pt: {
                  label: "text-white dark:text-white/80 font-normal"
                },
                onClick: unref(logout)
              }, null, 8, ["onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-b9fec74b.mjs.map
