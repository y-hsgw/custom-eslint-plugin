import rules from "./rules/index.js";
import { ESLint } from "eslint";

const plugin: ESLint.Plugin = {
  rules,
};

export default plugin;
