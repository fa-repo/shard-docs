import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import ExternalLink from "@fa-repo/shard-docs/dist/shards/external-link";
import withSidebarHeadingsMarkdown from "./with-sidebar-headings.md";

/**
 * ShardDocs
 */

export default [
  <h1>With sidebar headings</h1>,
  <IframeShard path="#/examples/with-sidebar-headings" />,
  <br />,
  <ExternalLink href="https://github.com/fa-repo/shard-docs/tree/master/examples/src/06ExamplesWithSidebarHeadings">
    Source code
  </ExternalLink>,
  <MarkdownShard markdown={withSidebarHeadingsMarkdown} />
];
