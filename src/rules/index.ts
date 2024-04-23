import { ESLint } from "eslint";
import noLiteral from "./no-literal.js";
import noLet from "./no-let.js";

const rules: ESLint.Plugin["rules"] = {
  "no-literal": noLiteral,
  "no-let": noLet,
};

export default rules;
