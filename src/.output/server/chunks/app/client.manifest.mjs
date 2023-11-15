const client_manifest = {
  "_IconBook.ac93eb9e.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IconBook.ac93eb9e.js",
    "imports": [
      "__plugin-vue_export-helper.c27b6911.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_IconCog.37587e7a.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IconCog.37587e7a.js",
    "imports": [
      "__plugin-vue_export-helper.c27b6911.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_IconRefresh.818997b5.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IconRefresh.818997b5.js",
    "imports": [
      "__plugin-vue_export-helper.c27b6911.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_IconTrash.4a12ce6d.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IconTrash.4a12ce6d.js",
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
  "_auth.53e3255c.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "auth.53e3255c.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_toast-message.839c4d0d.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "toast-message.839c4d0d.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "components/dialogs/AppCreateCourse.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "AppCreateCourse.405f54c7.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.839c4d0d.js"
    ],
    "isDynamicEntry": true,
    "src": "components/dialogs/AppCreateCourse.vue"
  },
  "components/dialogs/AppCreateTest.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "AppCreateTest.3eafd470.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.839c4d0d.js"
    ],
    "isDynamicEntry": true,
    "src": "components/dialogs/AppCreateTest.vue"
  },
  "components/dialogs/AppCreateUpcomingTest.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "AppCreateUpcomingTest.48460717.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.839c4d0d.js"
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
    "file": "default.1fb38169.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.53e3255c.js",
      "_toast-message.839c4d0d.js",
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
    "file": "unauthenticated.80eb9313.js",
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
    "file": "auth.da1bfb93.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.53e3255c.js"
    ],
    "isDynamicEntry": true,
    "src": "middleware/auth.ts"
  },
  "middleware/student.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "student.f82b5dd0.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_Roles.a23a7a2f.js",
      "_auth.53e3255c.js"
    ],
    "isDynamicEntry": true,
    "src": "middleware/student.ts"
  },
  "middleware/teacher.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "teacher.8459a00b.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_Roles.a23a7a2f.js",
      "_auth.53e3255c.js"
    ],
    "isDynamicEntry": true,
    "src": "middleware/teacher.ts"
  },
  "middleware/unauthenticated.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "unauthenticated.6bd1314e.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.53e3255c.js"
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
    "file": "entry.be0c2818.js",
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
    "file": "_authToken_.774446e3.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.839c4d0d.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/auth/forgot-password/[userId]/[authToken].vue"
  },
  "pages/auth/forgot-password/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.0f137eec.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.839c4d0d.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/auth/forgot-password/index.vue"
  },
  "pages/auth/login.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "login.e77b89ea.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.53e3255c.js",
      "_toast-message.839c4d0d.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/auth/login.vue"
  },
  "pages/auth/register.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "register.a3d1a52f.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_toast-message.839c4d0d.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/auth/register.vue"
  },
  "pages/course/[id].vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "_id_.1996f12f.js",
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
    "file": "_id_.7186960d.js",
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
    "file": "index.b72355fe.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconCog.37587e7a.js",
      "_IconRefresh.818997b5.js",
      "_toast-message.839c4d0d.js",
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
    "file": "index.94db2a03.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_auth.53e3255c.js",
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
    "file": "_upcomingTestId_.8b86fc67.js",
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
    "file": "_userId_.8df817da.js",
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
    "file": "index.f366fc8a.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconRefresh.818997b5.js",
      "_IconBook.ac93eb9e.js",
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
    "file": "_testId_.b035525b.js",
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
    "file": "_id_.0cb7ae83.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_QuestionTypes.2471fd4d.js",
      "_IconTrash.4a12ce6d.js",
      "__plugin-vue_export-helper.c27b6911.js",
      "_toast-message.839c4d0d.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/test/my/[id].vue"
  },
  "pages/test/my/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.35a43b6d.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconCog.37587e7a.js",
      "_IconTrash.4a12ce6d.js",
      "_toast-message.839c4d0d.js",
      "_IconRefresh.818997b5.js",
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
    "file": "index.7712816f.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconRefresh.818997b5.js",
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
    "file": "index.8aa1a0da.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_IconBook.ac93eb9e.js",
      "_IconRefresh.818997b5.js",
      "_IconTrash.4a12ce6d.js",
      "__plugin-vue_export-helper.c27b6911.js"
    ],
    "isDynamicEntry": true,
    "src": "pages/upcoming-test/my/index.vue"
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
