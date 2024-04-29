import { ESLint, Linter } from "eslint";

export default (plugin: ESLint.Plugin): Linter.FlatConfig => ({
  plugins: {
    example: plugin,
  },
  name: "example/recommended",
  rules: {
    "example/no-literal": "error",
  },
});
