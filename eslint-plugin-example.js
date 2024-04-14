import noLiteral from "./src/rules/no-literal.js";
import noLet from "./src/rules/no-let.js";

/** @type { import("eslint").ESLint.Plugin } */
const plugin = { rules: { "no-literal": noLiteral, "no-let": noLet } };

export default plugin;
