/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: "ts-jest",
  moduleNameMapper: {
    "(.+)\\.js": "$1",
  },
};

export default config;
