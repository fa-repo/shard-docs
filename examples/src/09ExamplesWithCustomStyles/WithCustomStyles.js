import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import ExternalLink from "@fa-repo/shard-docs/dist/shards/external-link";
import withCustomStylesMarkdown from "./with-custom-styles.md";

/**
 * ShardDocs
 */

export default [
  <h1>With custom styles</h1>,
  <IframeShard path="#/examples/with-custom-styles" />,
  <br />,
  <ExternalLink href="https://github.com/fa-repo/shard-docs/tree/master/examples/src/09ExamplesWithCustomStyles">
    Source code
  </ExternalLink>,
  <MarkdownShard markdown={withCustomStylesMarkdown} />
];
