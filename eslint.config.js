import eslintPluginExample from "./dist/index.js";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    ignores: ["dist/**/*"],
    ...eslintPluginExample.configs.recommended,
    rules: {
      ...eslintPluginExample.configs.recommended.rules,
      "example/no-let": "error",
      "example/no-var": "error",
      "example/require-await-in-promise": "error",
    },
  },
];
