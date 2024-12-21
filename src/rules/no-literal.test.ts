import { RuleTester } from "eslint";

import rule from "./no-literal";
import { getTestName } from "../test/utils";

const tester = new RuleTester();

tester.run(getTestName(), rule, {
  valid: [
    { code: `let x;` },
    { code: "const x = undefined" },
    { code: "const x = {}" },
  ],
  invalid: [
    {
      code: `const x = 1;`,
      errors: [{ message: "😿" }],
    },
    {
      code: `const x = { foo: "hoge" };`,
      errors: [{ message: "😿" }],
    },
    {
      code: `const x = ["hoge"];`,
      errors: [{ message: "😿" }],
    },
  ],
});
