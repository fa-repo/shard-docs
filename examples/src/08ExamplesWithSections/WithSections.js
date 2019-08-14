import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import ExternalLink from "@fa-repo/shard-docs/dist/shards/external-link";
import withSectionsMarkdown from "./with-sections.md";

/**
 * ShardDocs
 */

export default [
  <h1>With sections</h1>,
  <IframeShard path="#/examples/with-sections" />,
  <br />,
  <ExternalLink href="https://github.com/fa-repo/shard-docs/tree/master/examples/src/08ExamplesWithSections">
    Source code
  </ExternalLink>,
  <MarkdownShard markdown={withSectionsMarkdown} />
];
