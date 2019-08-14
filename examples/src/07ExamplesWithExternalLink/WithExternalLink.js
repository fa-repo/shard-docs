import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import ExternalLink from "@fa-repo/shard-docs/dist/shards/external-link";
import withSidebarExternalLinkMarkdown from "./with-sidebar-external-link.md";

/**
 * ShardDocs
 */

export default [
  <h1>With sidebar external link</h1>,
  <IframeShard path="#/examples/with-sidebar-external-link" />,
  <br />,
  <ExternalLink href="https://github.com/fa-repo/shard-docs/tree/master/examples/src/07ExamplesWithExternalLink">
    Source code
  </ExternalLink>,
  <MarkdownShard markdown={withSidebarExternalLinkMarkdown} />
];
