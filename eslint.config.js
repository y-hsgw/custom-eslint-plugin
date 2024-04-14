import eslintPluginExample from "./eslint-plugin-example.js";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    ignores: ["dist"],
    plugins: { example: eslintPluginExample },
    rules: {
      "example/no-literal": "error",
      "example/no-let": "error",
    },
  },
];
