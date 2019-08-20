import babel from "rollup-plugin-babel"
import pkg from "./package.json"
const banner = `/*!
* Integerify Bot - v${pkg.version}
* MIT License
* Copyright (c) 2019 Frenco W. Jobs
*/`

export default [
  {
    input: "index.js",
    external: ["ms"],
    output: [{ file: pkg.main, format: "cjs", name: "Integerify", banner }],
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
    ],
  },
]
