const mix = require("laravel-mix");

mix
  .react("./index.js", "public/index.js")
  .copy("node_modules/@fa-repo/shard-docs/dist/shard-docs.css", "public/css/shard-docs.css")
  .copy(
    "node_modules/@fa-repo/shard-docs/dist/shards/code-sample.css",
    "public/css/code-sample-shard.css"
  )
  .copy("node_modules/@fa-repo/shard-docs/dist/shards/section.css", "public/css/section-shard.css")
  .webpackConfig({
    module: {
      rules: [
        { test: /\.md$/, use: "raw-loader" },
        { test: /\.mdx?$/, use: ["babel-loader", "@mdx-js/loader"] }
      ]
    }
  })
  .sourceMaps();
