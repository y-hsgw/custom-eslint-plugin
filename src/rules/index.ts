import { Rule } from "eslint";
import noLiteral from "./no-literal.js";
import noLet from "./no-let.js";
import noVar from "./no-var.js";
import requireAwaitInPromise from "./require-await-in-promise.js";

const rules = {
  "no-literal": noLiteral,
  "no-let": noLet,
  "no-var": noVar,
  "require-await-in-promise": requireAwaitInPromise,
} as const satisfies Record<string, Rule.RuleModule>;

export default rules;
