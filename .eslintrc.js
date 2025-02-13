module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2021,
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
    },
  };
