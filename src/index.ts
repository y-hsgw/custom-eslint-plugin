import rules from "./rules/index.js";
import { ESLint } from "eslint";
import recommendedConfig from "./configs/recommended.js";

const plugin: ESLint.Plugin = {
  rules,
  configs: {
    recommended: recommendedConfig(rules),
  },
};

export default plugin;
