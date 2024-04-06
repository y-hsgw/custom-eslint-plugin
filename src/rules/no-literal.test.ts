import { RuleTester } from "eslint";

import rule from "./no-literal";

const tester = new RuleTester();

tester.run("no-literal", rule, {
  valid: [{ code: `let x` }],
  invalid: [
    {
      code: `const x = 1;`,
      errors: [{ message: "😿" }],
    },
  ],
});
