import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  create: (context) => {
    return {
      VariableDeclaration: (node) => {
        console.log(node.kind);
        if (node.kind !== "let") return;

        context.report({
          message: "そのlet大丈夫そう？",
          node,
        });
      },
    };
  },
};

export default rule;
