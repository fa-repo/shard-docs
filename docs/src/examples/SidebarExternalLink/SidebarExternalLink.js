import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import sidebarExternalLinkMarkdown from "./sidebar-external-link.md";

/**
 * SidebarExternalLink
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/SidebarExternalLink";

export default [
  <h1>Sidebar external link</h1>,
  <IframeShard path="#/examples/sidebar-external-link" />,
  <br />,
  <a href={sourceCodeLink} target="_blank">
    Source code
  </a>,
  <MarkdownShard markdown={sidebarExternalLinkMarkdown} />
];
