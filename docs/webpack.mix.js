const mix = require("laravel-mix");

mix
  .react("./src/index.js", "public/main.js")
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          use: "raw-loader"
        },
        {
          test: /\.mdx?$/,
          use: ["babel-loader", "@mdx-js/loader"]
        }
      ]
    }
  })
  .sourceMaps();
