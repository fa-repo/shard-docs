import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import sectionsMarkdown from "./sidebar-sections.md";

/**
 * SidebarSections
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/examples/src/08ExamplesWithSections";

export default [
  <h1>Sidebar sections</h1>,
  <IframeShard path="#/examples/sidebar-sections" />,
  <br />,
  <a href={sourceCodeLink} target="_blank">
    Source code
  </a>,
  <MarkdownShard markdown={sectionsMarkdown} />
];
