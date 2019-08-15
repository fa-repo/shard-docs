import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import withCustomStylesMarkdown from "./with-custom-styles.md";

/**
 * ShardDocs
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/examples/src/09ExamplesWithCustomStyles";

export default [
  <h1>With custom styles</h1>,
  <IframeShard path="#/examples/with-custom-styles" />,
  <br />,
  <a href={sourceCodeLink} target="_blank">
    Source code
  </a>,
  <MarkdownShard markdown={withCustomStylesMarkdown} />
];
