import { RuleTester } from "eslint";
import dedent from "dedent";
import rule from "./require-await-in-promise";
import { getTestName } from "../test/utils";

const tester = new RuleTester();

tester.run(getTestName(), rule, {
  valid: [
    {
      code: dedent`
      const hoge = async () => {
        await Promise.all([]);
      }`,
    },
  ],
  invalid: [
    {
      code: dedent`
      const hoge = () => {
        Promise.all([]);
        Promise.all([]);
      }`,
      output: dedent`
      const hoge = async () => {
        Promise.all([]);
        Promise.all([]);
      }`,
      errors: [
        {
          message: "promiseにawaitを追加してください",
        },
        {
          message: "promiseにawaitを追加してください",
        },
      ],
    },
    {
      code: dedent`
      const hoge = async () => {
        Promise.all([]);
        Promise.all([]);
      }`,
      output: dedent`
      const hoge = async () => {
        await Promise.all([]);
        await Promise.all([]);
      }`,
      errors: [
        {
          message: "promiseにawaitを追加してください",
        },
        {
          message: "promiseにawaitを追加してください",
        },
      ],
    },
  ],
});
