module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  extends: [
    'plugin:@next/next/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime'
  ],
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/prefer-default-export': 'off',
    'simple-import-sort/imports': 'error',
    'class-methods-use-this': 'off',
    'react/function-component-definition': [2, { 'namedComponents': ['function-declaration', 'arrow-function'] }]
  },
};