module.exports = {
  // root: true,
  // parser: '@typescript-eslint/parser',
  // plugins: ["@typescript-eslint", "prettier"],
  // // extends: ['standard-with-typescript', 'prettier', 'plugin:prettier/recommended'],
  // extends: [
  //   'prettier',
  //   'plugin:prettier/recommended',
  //   "plugin:@typescript-eslint/parser"
  // ],
  // parserOptions: {
  //   project: './tsconfig.json',
  //   sourceType: 'module',
  //   tsconfigRootDir: __dirname,
  // },
  // ignorePatterns: [".eslintrc.js"],
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },

  env: {
    node: true,
  },

  extends: [
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },

  ignorePatterns: [".eslintrc.js"], 
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
  },
};