import rules from "./rules/index.js";
import { ESLint } from "eslint";
import recommendedConfig from "./configs/recommended.js";

const basePlugin: ESLint.Plugin = {
  rules,
};

const plugin: ESLint.Plugin = {
  ...basePlugin,
  configs: {
    recommended: recommendedConfig(basePlugin),
  },
};

export default plugin;
