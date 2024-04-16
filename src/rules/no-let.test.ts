import { RuleTester } from "eslint";

import rule from "./no-let";

const tester = new RuleTester();

tester.run("no-let", rule, {
  valid: [{ code: `const x = 1` }],
  invalid: [
    {
      code: `let x = 1;`,
      errors: [{ message: "そのlet大丈夫そう？" }],
    },
  ],
});
