module.exports = {
    root: true,
    extends: [
        'eslint:recommended'
    ],
    globals: {
        IS_DEVELOPMENT: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        eqeqeq: ['error', 'always'],
        indent: ['error', 2],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': ['warn'],
        'no-console': 'off'
    }
}
