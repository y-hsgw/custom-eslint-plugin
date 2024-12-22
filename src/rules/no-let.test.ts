import { RuleTester } from "eslint";
import dedent from "dedent";
import rule from "./no-let.js";
import { getTestName } from "../test/utils.js";

const tester = new RuleTester();

tester.run(getTestName(), rule, {
  valid: [{ code: `const x = 1` }],
  invalid: [
    {
      code: dedent`
        let x = 1;
        let y = 1;
      `,
      errors: [
        {
          message: "そのlet大丈夫そう？",
          line: 1,
          suggestions: [
            {
              desc: "letをconstに変更します",
              output: dedent`
                const x = 1;
                let y = 1;
              `,
            },
          ],
        },
        {
          message: "そのlet大丈夫そう？",
          line: 2,
          suggestions: [
            {
              desc: "letをconstに変更します",
              output: dedent`
                let x = 1;
                const y = 1;
              `,
            },
          ],
        },
      ],
    },
  ],
});
