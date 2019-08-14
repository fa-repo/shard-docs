import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import withSidebarHeadingsMarkdown from "./with-sidebar-headings.md";

/**
 * ShardDocs
 */

export default [
  <MarkdownShard markdown={withSidebarHeadingsMarkdown} />,
  <IframeShard path="#/examples/with-sidebar-headings" />
];
