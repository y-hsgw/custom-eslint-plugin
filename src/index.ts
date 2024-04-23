import rules from "./rules/index.js";
import { ESLint } from "eslint";

const plugin: ESLint.Plugin = {
  rules,
  configs: {
    recommended: {
      plugins: {
        example: { rules },
      },
      name: "example/recommended",
      rules: {
        "example/no-literal": "error",
      },
    },
  },
};

export default plugin;
