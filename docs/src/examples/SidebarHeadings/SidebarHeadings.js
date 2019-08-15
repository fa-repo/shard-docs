import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import sidebarHeadingsMarkdown from "./sidebar-headings.md";

/**
 * SidebarHeadings
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/SidebarHeadings";

export default [
  <h1>Sidebar headings</h1>,
  <IframeShard path="#/examples/sidebar-headings" />,
  <br />,
  <a href={sourceCodeLink} target="_blank">
    Source code
  </a>,
  <MarkdownShard markdown={sidebarHeadingsMarkdown} />
];
