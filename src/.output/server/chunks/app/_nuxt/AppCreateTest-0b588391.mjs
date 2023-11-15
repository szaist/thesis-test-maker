import { defineComponent, inject, reactive, resolveComponent, unref, useSSRContext } from 'vue';
import { a as useRouter, b as useDependency, T as TestRepositoryToken } from '../server.mjs';
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
  __name: "AppCreateTest",
  __ssrInlineRender: true,
  setup(__props) {
    const dialogRef = inject("dialogRef");
    const router = useRouter();
    const testRepository = useDependency(TestRepositoryToken);
    const toastStore = useToastMessages();
    const form = reactive({
      title: "",
      description: ""
    });
    const addTest = async () => {
      try {
        const response = await testRepository.create(form);
        toastStore.showSuccess({ message: "Teszt hozz\xE1adva." });
        dialogRef.value.close();
        router.push({ path: `/test/my/${response.id}` });
      } catch (error) {
        toastStore.showError({ message: "Hiba t\xF6rt\xE9nt a teszt l\xE9trehoz\xE1sa k\xF6zben!" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(_attrs)}><form class="flex flex-col gap-4"><div class="flex flex-col gap-2"><label for="courseName">Teszt neve</label>`);
      _push(ssrRenderComponent(_component_InputText, {
        id: "courseName",
        modelValue: unref(form).title,
        "onUpdate:modelValue": ($event) => unref(form).title = $event
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
        onClick: addTest
      }, null, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialogs/AppCreateTest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AppCreateTest-0b588391.mjs.map
