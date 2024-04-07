import noLiteral from "./src/rules/no-literal.js";

/** @type { import("eslint").ESLint.Plugin } */
const plugin = { rules: { "no-literal": noLiteral } };

export default plugin;
