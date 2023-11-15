import { defineComponent, inject, ref, computed, resolveComponent, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { b as useDependency, T as TestRepositoryToken, C as CourseRepositoryToken, e as UpcomingTestRepositoryToken } from '../server.mjs';
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
  __name: "AppCreateUpcomingTest",
  __ssrInlineRender: true,
  setup(__props) {
    const dialogRef = inject("dialogRef");
    const toastStore = useToastMessages();
    useDependency(TestRepositoryToken);
    useDependency(CourseRepositoryToken);
    const upcomingRepository = useDependency(UpcomingTestRepositoryToken);
    const testValues = ref([]);
    const courseValues = ref([]);
    const startDateValue = ref(/* @__PURE__ */ new Date());
    const endDateValue = ref(/* @__PURE__ */ new Date());
    ref(true);
    const myTests = ref();
    const myCourses = ref();
    const tests = computed(() => {
      var _a;
      return (_a = myTests.value) != null ? _a : [];
    });
    const courses = computed(() => {
      var _a;
      return (_a = myCourses.value) != null ? _a : [];
    });
    const addUpcomingTest = async () => {
      try {
        await courseValues.value.forEach(async (cId) => {
          await testValues.value.forEach(async (tId) => {
            await upcomingRepository.create({
              testId: tId,
              courseId: cId,
              lastStartDate: endDateValue.value,
              startDate: startDateValue.value
            });
          });
        });
        dialogRef.value.close();
        toastStore.showInfo({ message: "A tesztek ki\xEDr\xE1sa sikeres!" });
      } catch (error) {
        toastStore.showError({ message: "Hiba t\xF6rt\xE9nt a tesztek ki\xEDr\xE1sa sor\xE1n!" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MultiSelect = resolveComponent("MultiSelect");
      const _component_Calendar = resolveComponent("Calendar");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(_attrs)}><form class="flex flex-col gap-4"><div class="flex flex-col gap-2"><label for="courselist">Kurzusok list\xE1ja</label>`);
      _push(ssrRenderComponent(_component_MultiSelect, {
        id: "courselist",
        modelValue: unref(courseValues),
        "onUpdate:modelValue": ($event) => isRef(courseValues) ? courseValues.value = $event : null,
        options: unref(courses),
        "option-label": "name",
        "option-value": "id",
        "empty-message": "Nincs el\xE9rhet\u0151 kurzus",
        "empty-selection-message": "Nincs kurzus kiv\xE1lasztva",
        placeholder: "V\xE1lassz a kurzusok k\xF6z\xFCl"
      }, null, _parent));
      _push(`</div><div class="flex flex-col gap-2"><label for="testlist">Tesztek list\xE1ja</label>`);
      _push(ssrRenderComponent(_component_MultiSelect, {
        id: "testlist",
        modelValue: unref(testValues),
        "onUpdate:modelValue": ($event) => isRef(testValues) ? testValues.value = $event : null,
        options: unref(tests),
        "option-label": "title",
        "option-value": "id",
        "empty-message": "Nincs el\xE9rhet\u0151 teszt",
        "empty-selection-message": "Nincs teszt kiv\xE1lasztva",
        placeholder: "V\xE1lassz a tesztek k\xF6z\xFCl"
      }, null, _parent));
      _push(`</div><div class="flex flex-col gap-2"><label for="">Teszt kit\xF6lt\xE9s\xE9nek kezd\u0151 id\u0151pontja</label>`);
      _push(ssrRenderComponent(_component_Calendar, {
        modelValue: unref(startDateValue),
        "onUpdate:modelValue": ($event) => isRef(startDateValue) ? startDateValue.value = $event : null,
        "show-time": "",
        "hour-format": "24",
        "show-icon": ""
      }, null, _parent));
      _push(`</div><div class="flex flex-col gap-2"><label for="">Teszt kit\xF6lt\xE9s\xE9nek hat\xE1rideje</label>`);
      _push(ssrRenderComponent(_component_Calendar, {
        modelValue: unref(endDateValue),
        "onUpdate:modelValue": ($event) => isRef(endDateValue) ? endDateValue.value = $event : null,
        "show-time": "",
        "hour-format": "24",
        "show-icon": ""
      }, null, _parent));
      _push(`</div><div class="flex justify-end mt-2">`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Ki\xEDr\xE1s",
        onClick: addUpcomingTest
      }, null, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialogs/AppCreateUpcomingTest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AppCreateUpcomingTest-7b49aa36.mjs.map
