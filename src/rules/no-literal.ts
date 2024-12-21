import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      recommended: false,
    },
  },
  create: (context) => {
    return {
      Literal: (node) => {
        context.report({
          message: "😿",
          node,
        });
      },
    };
  },
};

export default rule;
