/** @type { import("eslint").Rule.RuleModule } */
const rule = {
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
