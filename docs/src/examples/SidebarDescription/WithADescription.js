import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import withDescriptionMarkdown from "./with-description.md";

/**
 * ShardDocs
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/examples/src/05ExamplesWithADescription";

export default [
  <h1>With a description</h1>,
  <IframeShard path="#/examples/with-description" />,
  <br />,
  <a href={sourceCodeLink} target="_blank">
    Source code
  </a>,
  <MarkdownShard markdown={withDescriptionMarkdown} />
];
