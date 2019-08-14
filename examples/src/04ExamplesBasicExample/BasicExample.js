import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import basicExampleMarkdown from "./basic-example.md";

/**
 * ShardDocs
 */

const Documentation = [
  <h1>Basic example</h1>,
  <IframeShard path="#/examples/basic-example" />,
  <MarkdownShard markdown={basicExampleMarkdown} />
];

Documentation.propTypes = {};
Documentation.defaultProps = {};

export default Documentation;
