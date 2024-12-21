import path from "node:path";

export const getTestName = () => {
  const error = new Error();
  const stackLines = error.stack?.split("\n");
  const callerLine = stackLines?.[2];
  const match = callerLine?.match(/at (.*):\d+:\d+/);
  if (!match || match.length < 2) {
    throw new Error("呼び出し元のファイル名が取得できません");
  }

  return path.basename(match[1], ".test.ts");
};
