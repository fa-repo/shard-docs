import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import withSidebarExternalLinkMarkdown from "./with-sidebar-external-link.md";

/**
 * ShardDocs
 */

export default [
  <h1>With sidebar external link</h1>,
  <IframeShard path="#/examples/with-sidebar-external-link" />,
  <MarkdownShard markdown={withSidebarExternalLinkMarkdown} />
];
