module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
    plugins: [],
    rules: {
        quotes: ['error', 'single'],
        'vue/multi-word-component-names': 0,
        'vue/no-reserved-component-names': 0,
        'vue/block-order': [
            'error',
            {
                order: [['script', 'template'], 'style'],
            },
        ],
    },
}
