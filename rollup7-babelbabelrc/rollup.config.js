import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
export default {
  input: ["./src/es6.js"],
  output: {
    file: "./dist/esBundle.js",
    format: "umd",
    name: "experience"
  },
  plugins: [
    resolve(), commonjs(), babel()
  ],
  external: ["the-answer"]
};
