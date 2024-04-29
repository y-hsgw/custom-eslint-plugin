import { Rule } from "eslint";
import noLiteral from "./no-literal.js";
import noLet from "./no-let.js";

const rules = {
  "no-literal": noLiteral,
  "no-let": noLet,
} as const satisfies Record<string, Rule.RuleModule>;

export default rules;
