import { Rule } from "eslint";
import noLiteral from "./no-literal.js";
import noLet from "./no-let.js";
import noVar from "./no-var.js";

const rules = {
  "no-literal": noLiteral,
  "no-let": noLet,
  "no-var": noVar,
} as const satisfies Record<string, Rule.RuleModule>;

export default rules;
