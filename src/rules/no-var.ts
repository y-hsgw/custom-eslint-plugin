import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    fixable: "code",
  },
  create: (context) => {
    return {
      VariableDeclaration: (node) => {
        if (node.kind !== "var") return;

        context.report({
          message: "そのvar大丈夫そう？",
          node,
          fix: (fixer) => {
            const firstToken = context.sourceCode.getFirstToken(
              node,
              (token) => token.value === "var"
            );
            if (!firstToken) throw new Error("firstToken not found.");

            return fixer.replaceText(firstToken, "const");
          },
        });
      },
    };
  },
};

export default rule;
