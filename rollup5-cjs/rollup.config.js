import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default {
  input: ["./src/index.js"],
  output: {
    file: "./dist/bundle.js",
    format: "umd",
    name: "experience"
  },
  plugins: [
    resolve(), commonjs()
  ],
  external: ["the-answer"]
};
