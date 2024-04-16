import eslintPluginExample from "./dist/index.cjs";

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
