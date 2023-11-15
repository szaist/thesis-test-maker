const client_manifest = {
  "_IconBook.ad923e4f.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IconBook.ad923e4f.js",
    "imports": [
      "__plugin-vue_export-helper.c27b6911.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_IconCog.cf29234a.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IconCog.cf29234a.js",
    "imports": [
      "__plugin-vue_export-helper.c27b6911.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_IconRefresh.94039121.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IconRefresh.94039121.js",
    "imports": [
      "__plugin-vue_export-helper.c27b6911.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_IconTrash.c4a4eb84.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IconTrash.c4a4eb84.js",
    "imports": [
      "__plugin-vue_export-helper.c27b6911.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_QuestionTypes.2471fd4d.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "QuestionTypes.2471fd4d.js"
  },
  "_Roles.a23a7a2f.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "Roles.a23a7a2f.js"
  },
  "__plugin-vue_export-helper.c27b6911.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "_plugin-vue_export-helper.c27b6911.js"
  },
  "_auth.2e97ed73.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "auth.2e97ed73.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_toast-message.98c30be3.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "toast-message.98c30be3.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "components/dialogs/AppCreateCourse.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "AppCreateCourse.e6f5a2e4.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.98c30be3.js"
    ],
    "isDynamicEntry": true,
    "src": "components/dialogs/AppCreateCourse.vue"
  },
  "components/dialogs/AppCreateTest.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "AppCreateTest.dd5d4ded.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.98c30be3.js"
    ],
    "isDynamicEntry": true,
    "src": "components/dialogs/AppCreateTest.vue"
  },
  "components/dialogs/AppCreateUpcomingTest.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "AppCreateUpcomingTest.73ac6590.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.98c30be3.js"
    ],
    "isDynamicEntry": true,
    "src": "components/dialogs/AppCreateUpcomingTest.vue"
  },
  "layouts/default.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "dynamicImports": [
      "components/dialogs/AppCreateCourse.vue",
      "components/dialogs/AppCreateTest.vue",
      "components/dialogs/AppCreateUpcomingTest.vue"
    ],
    "file": "default.baaa30ff.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.2e97ed73.js",
      "_toast-message.98c30be3.js",
      "_Roles.a23a7a2f.js"
    ],
    "isDynamicEntry": true,
    "src": "layouts/default.vue"
  },
  "layouts/unauthenticated.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "unauthenticated.f83e6756.js",
    "imports": [
      "__plugin-vue_export-helper.c27b6911.js",
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "isDynamicEntry": true,
    "src": "layouts/unauthenticated.vue"
  },
  "middleware/auth.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "auth.c0cc26f1.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.2e97ed73.js"
    ],
    "isDynamicEntry": true,
    "src": "middleware/auth.ts"
  },
  "middleware/student.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "student.ca224a77.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_Roles.a23a7a2f.js",
      "_auth.2e97ed73.js"
    ],
    "isDynamicEntry": true,
    "src": "middleware/student.ts"
  },
  "middleware/teacher.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "teacher.b5688959.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_Roles.a23a7a2f.js",
      "_auth.2e97ed73.js"
    ],
    "isDynamicEntry": true,
    "src": "middleware/teacher.ts"
  },
  "middleware/unauthenticated.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "unauthenticated.1c8e7090.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.2e97ed73.js"
    ],
    "isDynamicEntry": true,
    "src": "middleware/unauthenticated.ts"
  },
  "node_modules/nuxt/dist/app/entry.css": {
    "resourceType": "style",
    "prefetch": true,
    "preload": true,
    "file": "entry.6f06462d.css",
    "src": "node_modules/nuxt/dist/app/entry.css"
  },
  "node_modules/nuxt/dist/app/entry.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "assets": [
      "primeicons.ce852338.eot",
      "primeicons.3824be50.woff2",
      "primeicons.90a58d3a.woff",
      "primeicons.131bc3bf.ttf",
      "primeicons.5e10f102.svg"
    ],
    "css": [
      "entry.6f06462d.css"
    ],
    "dynamicImports": [
      "middleware/auth.ts",
      "middleware/student.ts",
      "middleware/teacher.ts",
      "middleware/unauthenticated.ts",
      "layouts/default.vue",
      "layouts/unauthenticated.vue"
    ],
    "file": "entry.68a40b73.js",
    "isEntry": true,
    "src": "node_modules/nuxt/dist/app/entry.js",
    "_globalCSS": true
  },
  "entry.6f06462d.css": {
    "file": "entry.6f06462d.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "primeicons.ce852338.eot": {
    "file": "primeicons.ce852338.eot",
    "resourceType": "font",
    "mimeType": "font/eot"
  },
  "primeicons.3824be50.woff2": {
    "file": "primeicons.3824be50.woff2",
    "resourceType": "font",
    "mimeType": "font/woff2"
  },
  "primeicons.90a58d3a.woff": {
    "file": "primeicons.90a58d3a.woff",
    "resourceType": "font",
    "mimeType": "font/woff"
  },
  "primeicons.131bc3bf.ttf": {
    "file": "primeicons.131bc3bf.ttf",
    "resourceType": "font",
    "mimeType": "font/ttf"
  },
  "primeicons.5e10f102.svg": {
    "file": "primeicons.5e10f102.svg",
    "resourceType": "image",
    "prefetch": true,
    "mimeType": "image/svg+xml"
  },
  "node_modules/primeicons/fonts/primeicons.eot": {
    "resourceType": "font",
    "mimeType": "font/eot",
    "file": "primeicons.ce852338.eot",
    "src": "node_modules/primeicons/fonts/primeicons.eot"
  },
  "node_modules/primeicons/fonts/primeicons.svg": {
    "resourceType": "image",
    "prefetch": true,
    "mimeType": "image/svg+xml",
    "file": "primeicons.5e10f102.svg",
    "src": "node_modules/primeicons/fonts/primeicons.svg"
  },
  "node_modules/primeicons/fonts/primeicons.ttf": {
    "resourceType": "font",
    "mimeType": "font/ttf",
    "file": "primeicons.131bc3bf.ttf",
    "src": "node_modules/primeicons/fonts/primeicons.ttf"
  },
  "node_modules/primeicons/fonts/primeicons.woff": {
    "resourceType": "font",
    "mimeType": "font/woff",
    "file": "primeicons.90a58d3a.woff",
    "src": "node_modules/primeicons/fonts/primeicons.woff"
  },
  "node_modules/primeicons/fonts/primeicons.woff2": {
    "resourceType": "font",
    "mimeType": "font/woff2",
    "file": "primeicons.3824be50.woff2",
    "src": "node_modules/primeicons/fonts/primeicons.woff2"
  },
  "pages/auth/forgot-password/[userId]/[authToken].vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "_authToken_.f8ca696a.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.98c30be3.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/auth/forgot-password/[userId]/[authToken].vue"
  },
  "pages/auth/forgot-password/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.232081b1.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.98c30be3.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/auth/forgot-password/index.vue"
  },
  "pages/auth/login.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "login.23ac38e4.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.2e97ed73.js",
      "_toast-message.98c30be3.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/auth/login.vue"
  },
  "pages/auth/register.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "register.3e6df33c.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.98c30be3.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/auth/register.vue"
  },
  "pages/course/[id].vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "_id_.2e878d9d.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/course/[id].vue"
  },
  "pages/course/my/[id].vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "_id_.a3418428.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/course/my/[id].vue"
  },
  "pages/course/my/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.39e85917.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconCog.cf29234a.js",
      "_IconRefresh.94039121.js",
      "_toast-message.98c30be3.js",
      "__plugin-vue_export-helper.c27b6911.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/course/my/index.vue"
  },
  "pages/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.b9bf0fec.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.2e97ed73.js",
      "__plugin-vue_export-helper.c27b6911.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/index.vue"
  },
  "pages/test-results/student/[upcomingTestId].vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "_upcomingTestId_.26d957eb.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/test-results/student/[upcomingTestId].vue"
  },
  "pages/test-results/teacher/[upcomingTestId]/[userId].vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "_userId_.c1cf7d54.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/test-results/teacher/[upcomingTestId]/[userId].vue"
  },
  "pages/test-results/teacher/[upcomingTestId]/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.ea3a3fef.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconRefresh.94039121.js",
      "_IconBook.ad923e4f.js",
      "__plugin-vue_export-helper.c27b6911.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/test-results/teacher/[upcomingTestId]/index.vue"
  },
  "pages/test/fill/[filledId]/[testId].vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "_testId_.33df08e1.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_QuestionTypes.2471fd4d.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/test/fill/[filledId]/[testId].vue"
  },
  "pages/test/my/[id].vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "_id_.6d008830.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_QuestionTypes.2471fd4d.js",
      "_IconTrash.c4a4eb84.js",
      "__plugin-vue_export-helper.c27b6911.js",
      "_toast-message.98c30be3.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/test/my/[id].vue"
  },
  "pages/test/my/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.4012e5cd.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconCog.cf29234a.js",
      "_IconTrash.c4a4eb84.js",
      "_toast-message.98c30be3.js",
      "_IconRefresh.94039121.js",
      "__plugin-vue_export-helper.c27b6911.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/test/my/index.vue"
  },
  "pages/upcoming-test/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.88a40b1f.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconRefresh.94039121.js",
      "__plugin-vue_export-helper.c27b6911.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/upcoming-test/index.vue"
  },
  "pages/upcoming-test/my/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.46f2806d.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconBook.ad923e4f.js",
      "_IconRefresh.94039121.js",
      "_IconTrash.c4a4eb84.js",
      "__plugin-vue_export-helper.c27b6911.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/upcoming-test/my/index.vue"
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
