import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    hasSuggestions: true,
  },
  create: (context) => {
    return {
      VariableDeclaration: (node) => {
        if (node.kind !== "let") return;

        context.report({
          message: "そのlet大丈夫そう？",
          node,
          suggest: [
            {
              desc: "letをconstに変更します",
              fix: (fixer) => {
                const firstToken = context.sourceCode.getFirstToken(
                  node,
                  (token) => token.value === "let"
                );
                if (!firstToken) throw new Error("firstToken not found.");

                return fixer.replaceText(firstToken, "const");
              },
            },
          ],
        });
      },
    };
  },
};

export default rule;
