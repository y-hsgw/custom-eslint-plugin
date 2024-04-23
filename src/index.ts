import noLiteral from "./rules/no-literal.js";
import noLet from "./rules/no-let.js";
import { ESLint } from "eslint";

const plugin: ESLint.Plugin = {
  rules: { "no-literal": noLiteral, "no-let": noLet },
};

export default plugin;
