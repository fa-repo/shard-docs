import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import json from "rollup-plugin-json";

import pkg from "./package.json";

export default [
  transpile("src/index.js", "./dist/shard-docs.js"),
  transpile("src/shards/IframeShard.js", "./dist/shards/iframe-shard.js"),
  transpile("src/shards/MarkdownShard.js", "./dist/shards/markdown-shard.js")
];

function transpile(entry, dest) {
  return {
    input: entry,
    output: [
      {
        file: dest,
        format: "cjs",
        sourcemap: true,
        exports: "named"
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: true,
        exports: "named"
      }
    ],
    plugins: [
      external(),
      postcss({
        extract: true
      }),
      url({ exclude: ["**/*.svg"] }),
      svgr(),
      babel({
        exclude: "node_modules/**"
      }),
      resolve(),
      commonjs(),
      json()
    ]
  };
}
