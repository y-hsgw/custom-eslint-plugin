// @ts-check

import eslintPluginExample from "./dist/index.js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    ...eslintPluginExample.configs.recommended,
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { args: "after-used", destructuredArrayIgnorePattern: "^_" },
      ],
      ...eslintPluginExample.configs.recommended.rules,
      "no-console": "error",
      "example/no-let": "error",
      "example/no-var": "error",
      // "example/require-await-in-promise": "error",
    },
  },
  {
    ignores: ["dist/**/*"],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  }
);
