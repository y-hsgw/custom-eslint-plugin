import ESTree from "estree";

export const isFunction = (node: ESTree.Node): node is ESTree.Function => {
  const { type } = node;
  return (
    type === "ArrowFunctionExpression" ||
    type === "FunctionDeclaration" ||
    type === "FunctionExpression"
  );
};
