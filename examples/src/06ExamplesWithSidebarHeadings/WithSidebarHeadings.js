import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import withSidebarHeadingsMarkdown from "./with-sidebar-headings.md";

/**
 * ShardDocs
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/examples/src/06ExamplesWithSidebarHeadings";

export default [
  <h1>With sidebar headings</h1>,
  <IframeShard path="#/examples/with-sidebar-headings" />,
  <br />,
  <a href={sourceCodeLink} target="_blank">
    Source code
  </a>,
  <MarkdownShard markdown={withSidebarHeadingsMarkdown} />
];
