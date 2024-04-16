import noLiteral from "./rules/no-literal.cjs";
import noLet from "./rules/no-let.cjs";
import { ESLint } from "eslint";

const plugin: ESLint.Plugin = {
  rules: { "no-literal": noLiteral, "no-let": noLet },
};

export = plugin;
