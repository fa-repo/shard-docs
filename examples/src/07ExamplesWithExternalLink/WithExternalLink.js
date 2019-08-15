import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import withSidebarExternalLinkMarkdown from "./with-sidebar-external-link.md";

/**
 * ShardDocs
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/examples/src/07ExamplesWithExternalLink";

export default [
  <h1>With sidebar external link</h1>,
  <IframeShard path="#/examples/with-sidebar-external-link" />,
  <br />,
  <a href={sourceCodeLink} target="_blank">
    Source code
  </a>,
  <MarkdownShard markdown={withSidebarExternalLinkMarkdown} />
];
