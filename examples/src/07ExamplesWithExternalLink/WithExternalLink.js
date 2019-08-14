import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import withSidebarExternalLinkMarkdown from "./with-sidebar-external-link.md";

/**
 * ShardDocs
 */

export default [
  <MarkdownShard markdown={withSidebarExternalLinkMarkdown} />,
  <IframeShard path="#/examples/with-sidebar-external-link" />
];
