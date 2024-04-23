import eslintPluginExample from "./dist/index.js";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    ignores: ["dist/**/*"],
    ...eslintPluginExample.configs.recommended,
  },
];
