import { RuleTester } from "eslint";
import dedent from "dedent";
import rule from "./no-var.js";

const tester = new RuleTester();

tester.run("no-var", rule, {
  valid: [{ code: `const x = 1` }],
  invalid: [
    {
      code: dedent`
        var x = 1;
        var y = 1;
      `,
      errors: [
        {
          message: "そのvar大丈夫そう？🐈",
          line: 1,
        },
        {
          message: "そのvar大丈夫そう？🐈",
          line: 2,
        },
      ],
      output: dedent`
        const x = 1;
        const y = 1;
      `,
    },
  ],
});
