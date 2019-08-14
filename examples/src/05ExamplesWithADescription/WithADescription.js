import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import withDescriptionMarkdown from "./with-description.md";
import ExternalLink from "@fa-repo/shard-docs/dist/shards/external-link";

/**
 * ShardDocs
 */

export default [
  <h1>With a description</h1>,
  <IframeShard path="#/examples/with-description" />,
  <br />,
  <ExternalLink href="https://github.com/fa-repo/shard-docs/tree/master/examples/src/05ExamplesWithADescription">
    Source code
  </ExternalLink>,
  <MarkdownShard markdown={withDescriptionMarkdown} />
];
