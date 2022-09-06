import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default {
  input: ["./src/es6.js"],
  output: {
    file: "./dist/esBundle.js",
    format: "umd",
    name: "experience"
  },
  plugins: [
    resolve(), commonjs()
  ],
  external: ["the-answer"]
};
