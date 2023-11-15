const client_manifest = {
  "_IconBook.5fa3e9e3.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IconBook.5fa3e9e3.js",
    "imports": [
      "__plugin-vue_export-helper.c27b6911.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_IconCog.e218c6ea.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IconCog.e218c6ea.js",
    "imports": [
      "__plugin-vue_export-helper.c27b6911.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_IconRefresh.28467fb3.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IconRefresh.28467fb3.js",
    "imports": [
      "__plugin-vue_export-helper.c27b6911.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_IconTrash.271302c3.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IconTrash.271302c3.js",
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
  "_auth.0e1747a1.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "auth.0e1747a1.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_toast-message.a26e5741.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "toast-message.a26e5741.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "components/dialogs/AppCreateCourse.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "AppCreateCourse.2a61cec2.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.a26e5741.js"
    ],
    "isDynamicEntry": true,
    "src": "components/dialogs/AppCreateCourse.vue"
  },
  "components/dialogs/AppCreateTest.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "AppCreateTest.5a623dd6.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.a26e5741.js"
    ],
    "isDynamicEntry": true,
    "src": "components/dialogs/AppCreateTest.vue"
  },
  "components/dialogs/AppCreateUpcomingTest.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "AppCreateUpcomingTest.b708a16b.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.a26e5741.js"
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
    "file": "default.e258775f.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.0e1747a1.js",
      "_toast-message.a26e5741.js",
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
    "file": "unauthenticated.70f9e8ad.js",
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
    "file": "auth.e24629ce.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.0e1747a1.js"
    ],
    "isDynamicEntry": true,
    "src": "middleware/auth.ts"
  },
  "middleware/student.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "student.7e448293.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_Roles.a23a7a2f.js",
      "_auth.0e1747a1.js"
    ],
    "isDynamicEntry": true,
    "src": "middleware/student.ts"
  },
  "middleware/teacher.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "teacher.a37978eb.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_Roles.a23a7a2f.js",
      "_auth.0e1747a1.js"
    ],
    "isDynamicEntry": true,
    "src": "middleware/teacher.ts"
  },
  "middleware/unauthenticated.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "unauthenticated.4a42773c.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.0e1747a1.js"
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
    "file": "entry.ebb06466.js",
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
    "file": "_authToken_.29cfec05.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.a26e5741.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/auth/forgot-password/[userId]/[authToken].vue"
  },
  "pages/auth/forgot-password/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.69a019b8.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.a26e5741.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/auth/forgot-password/index.vue"
  },
  "pages/auth/login.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "login.0ae12012.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.0e1747a1.js",
      "_toast-message.a26e5741.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/auth/login.vue"
  },
  "pages/auth/register.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "register.161ef93c.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.a26e5741.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/auth/register.vue"
  },
  "pages/course/[id].vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "_id_.61dbcc4c.js",
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
    "file": "_id_.aa98c1ee.js",
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
    "file": "index.e805f582.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconCog.e218c6ea.js",
      "_IconRefresh.28467fb3.js",
      "_toast-message.a26e5741.js",
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
    "file": "index.135273a6.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.0e1747a1.js",
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
    "file": "_upcomingTestId_.d6297357.js",
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
    "file": "_userId_.7db0cedc.js",
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
    "file": "index.2b244dc0.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconRefresh.28467fb3.js",
      "_IconBook.5fa3e9e3.js",
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
    "file": "_testId_.744b8a53.js",
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
    "file": "_id_.50a99a08.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_QuestionTypes.2471fd4d.js",
      "_IconTrash.271302c3.js",
      "__plugin-vue_export-helper.c27b6911.js",
      "_toast-message.a26e5741.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/test/my/[id].vue"
  },
  "pages/test/my/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.28a26380.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconCog.e218c6ea.js",
      "_IconTrash.271302c3.js",
      "_toast-message.a26e5741.js",
      "_IconRefresh.28467fb3.js",
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
    "file": "index.ca62a90e.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconRefresh.28467fb3.js",
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
    "file": "index.d3787f5d.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconBook.5fa3e9e3.js",
      "_IconRefresh.28467fb3.js",
      "_IconTrash.271302c3.js",
      "__plugin-vue_export-helper.c27b6911.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/upcoming-test/my/index.vue"
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
