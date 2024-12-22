import { Linter, Rule } from "eslint";

export default (rules: Record<string, Rule.RuleModule>): Linter.Config => {
  const NAME = "example";
  const filteredRules: Linter.RulesRecord = Object.fromEntries(
    Object.entries(rules)
      .filter(([_, value]) => value.meta?.docs?.recommended)
      .map<[string, Linter.RuleEntry]>(([key]) => [`${NAME}/${key}`, "error"])
  );

  return {
    plugins: {
      [NAME]: { rules },
    },
    name: `${NAME}/recommended`,
    rules: filteredRules,
  };
};
