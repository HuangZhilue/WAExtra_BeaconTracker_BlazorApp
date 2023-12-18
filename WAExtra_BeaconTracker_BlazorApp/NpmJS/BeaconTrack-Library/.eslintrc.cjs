/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    // "plugin:vue/vue3-essential",
    // "eslint:recommended",
    // "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    // "plugin:@typescript-eslint/recommended",
    // "prettier/@typescript-eslint",
    // "@vue/eslint-config-typescript",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "vue/no-v-model-argument": "off",
  },
};
