module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-essential", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["vue.min.js"],
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  extends: ["plugin:prettier/recommended"],
};
