// @ts-check

import eslintPluginExample from "./dist/index.js";
import globals from "globals";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    ignores: ["dist/**/*"],
    ...eslintPluginExample.configs.recommended,
    rules: {
      ...eslintPluginExample.configs.recommended.rules,
      "no-console": "error",
      "example/no-let": "error",
      "example/no-var": "error",
      "example/require-await-in-promise": "error",
    },
  },
];
