import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import iframeShardMarkdown from "./iframe-shard.md";

/**
 * IframeShard
 */

export default [
  <h1>Iframe shard</h1>,
  <p>Load another url into page.</p>,
  <IframeShard path="#/docs/hello-world" />,
  <MarkdownShard markdown={iframeShardMarkdown} />
];
