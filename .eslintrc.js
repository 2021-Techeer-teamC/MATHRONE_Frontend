module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  // extends: ['standard-with-typescript', 'prettier', 'plugin:prettier/recommended'],
  extends: ['prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
  },
  ignorePatterns: ['.eslintrc.js'],
};