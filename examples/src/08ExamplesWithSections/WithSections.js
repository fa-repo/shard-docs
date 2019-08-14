import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import withSectionsMarkdown from "./with-sections.md";

/**
 * ShardDocs
 */

export default [
  <MarkdownShard markdown={withSectionsMarkdown} />,
  <IframeShard path="#/examples/with-sections" />
];
