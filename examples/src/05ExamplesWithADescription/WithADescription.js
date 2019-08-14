import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import withDescriptionMarkdown from "./with-description.md";

/**
 * ShardDocs
 */

export default [
  <h1>With a description</h1>,
  <IframeShard path="#/examples/with-description" />,
  <MarkdownShard markdown={withDescriptionMarkdown} />
];
