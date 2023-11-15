import { a as useRouter, b as useDependency, C as CourseRepositoryToken } from '../server.mjs';
import { defineComponent, inject, reactive, resolveComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppCreateCourse",
  __ssrInlineRender: true,
  setup(__props) {
    const dialogRef = inject("dialogRef");
    const router = useRouter();
    const courseRepository = useDependency(CourseRepositoryToken);
    const toastStore = useToastMessages();
    const form = reactive({
      name: "",
      description: ""
    });
    const addCourse = async () => {
      try {
        const course = await courseRepository.add(form);
        toastStore.showSuccess({ message: "Kurzus sikeresen hozz\xE1adva." });
        closeDialog();
        router.push({ path: `/course/my/${course.id}` });
      } catch (error) {
        toastStore.showError({ message: "Sikertelen kurzus hozz\xE1ad\xE1s!" });
      }
    };
    const closeDialog = () => {
      dialogRef.value.close();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(_attrs)}><form class="flex flex-col gap-4"><div class="flex flex-col gap-2"><label for="courseName">Kurzus neve</label>`);
      _push(ssrRenderComponent(_component_InputText, {
        id: "courseName",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event
      }, null, _parent));
      _push(`</div><div class="flex flex-col gap-2"><label for="courseName">Le\xEDr\xE1s</label>`);
      _push(ssrRenderComponent(_component_InputText, {
        id: "courseName",
        modelValue: unref(form).description,
        "onUpdate:modelValue": ($event) => unref(form).description = $event
      }, null, _parent));
      _push(`</div><div class="flex justify-end mt-2">`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Hozz\xE1ad\xE1s",
        onClick: addCourse
      }, null, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialogs/AppCreateCourse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AppCreateCourse-c9c317d0.mjs.map
