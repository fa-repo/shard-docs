import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import customStylesMarkdown from "./custom-styles.md";

/**
 * CustomStyles
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/CustomStyles";

export default [
  <h1>Custom styles</h1>,
  <IframeShard path="#/examples/custom-styles" />,
  <br />,
  <a href={sourceCodeLink} target="_blank">
    Source code
  </a>,
  <MarkdownShard markdown={customStylesMarkdown} />
];
