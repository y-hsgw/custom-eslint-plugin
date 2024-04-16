import noLiteral from "./rules/no-literal";
import noLet from "./rules/no-let";
import { ESLint } from "eslint";

const plugin: ESLint.Plugin = {
  rules: { "no-literal": noLiteral, "no-let": noLet },
};

export default plugin;
