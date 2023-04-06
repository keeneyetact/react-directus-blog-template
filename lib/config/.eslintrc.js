module.exports = {
  root: false,
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: ["playwright.config.ts", "rollup.config.js"],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
