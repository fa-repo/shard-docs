import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import withDescriptionMarkdown from "./with-description.md";

/**
 * ShardDocs
 */

export default [
  <MarkdownShard markdown={withDescriptionMarkdown} />,
  <IframeShard path="#/examples/with-description" />
];
