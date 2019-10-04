import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import json from "rollup-plugin-json";

export default [
  transpile("src/index.js", "dist", "shard-docs"),
  transpile("src/shards/CodeExample", "dist/shards", "code-example-shard"),
  transpile("src/shards/Section", "dist/shards", "section-shard"),
  transpile("src/renderers/CodeBlock", "dist/renderers", "codeblock")
];

function transpile(entry, dest, name) {
  return {
    input: entry,
    output: [
      {
        file: dest + "/" + name + ".js",
        format: "cjs",
        sourcemap: true,
        exports: "named"
      },
      {
        file: dest + "/" + name + ".es.js",
        format: "es",
        sourcemap: true,
        exports: "named"
      }
    ],
    plugins: [
      external(),
      postcss({ extract: true }),
      url({ exclude: ["**/*.svg"] }),
      svgr(),
      babel({ exclude: "node_modules/**" }),
      resolve(),
      commonjs(),
      json()
    ]
  };
}
