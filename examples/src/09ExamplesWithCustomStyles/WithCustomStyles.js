import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import withCustomStylesMarkdown from "./with-custom-styles.md";

/**
 * ShardDocs
 */

export default [
  <h1>With custom styles</h1>,
  <IframeShard path="#/examples/with-custom-styles" />,
  <MarkdownShard markdown={withCustomStylesMarkdown} />
];
