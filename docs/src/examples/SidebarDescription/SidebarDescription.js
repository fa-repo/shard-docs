import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import SidebarDescriptionMarkdown from "./sidebar-description.md";

/**
 * SidebarDescription
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/SidebarDescription";

export default [
  <h1>Sidebar description</h1>,
  <IframeShard path="#/examples/sidebar-description" />,
  <br />,
  <a href={sourceCodeLink} target="_blank">
    Source code
  </a>,
  <MarkdownShard markdown={SidebarDescriptionMarkdown} />
];
