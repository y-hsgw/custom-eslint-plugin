import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  moduleNameMapper: {
    "(.+)\\.js": "$1",
  },
};

export default config;
