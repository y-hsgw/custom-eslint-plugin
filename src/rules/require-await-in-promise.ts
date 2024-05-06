import { Rule } from "eslint";
import ESTree from "estree";
import { isFunction } from "../utils/isFunction.js";

const findFirstFunctionExpression = ({
  parent,
}: Rule.Node): ESTree.Function | null => {
  if (!parent) {
    return null;
  }

  return isFunction(parent) ? parent : findFirstFunctionExpression(parent);
};
const rule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    fixable: "code",
  },
  create: (context) => {
    return {
      CallExpression: (node) => {
        const functionExpression = findFirstFunctionExpression(node);
        if (!functionExpression) return;

        const { parent, callee } = node;
        if (parent.type === "AwaitExpression") return;

        context.report({
          message: "promiseにawaitを追加してください",
          node,
          fix: (fixer) => {
            if (!functionExpression.async)
              return fixer.insertTextBefore(functionExpression, "async ");

            if (
              callee.type === "MemberExpression" &&
              callee.object.type == "Identifier" &&
              callee.object.name === "Promise"
            ) {
              return fixer.insertTextBefore(node, "await ");
            }
            return null;
          },
        });
      },
    };
  },
};

export default rule;
