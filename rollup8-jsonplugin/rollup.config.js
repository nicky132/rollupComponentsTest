import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
export default {
  input: ["./src/json.js"],
  output: {
    file: "./dist/jsonBundle.js",
    format: "umd",
    name: "experience"
  },
  plugins: [
    resolve(), commonjs(), babel(), json()
  ],
  external: ["the-answer"]
};
