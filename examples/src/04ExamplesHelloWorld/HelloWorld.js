import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import HelloWorldMarkdown from "./hello-world.md";

/**
 * ShardDocs
 */

const Documentation = [
  <h1>Hello world</h1>,
  <IframeShard path="#/examples/hello-world" />,
  <br />,
  <a href="https://github.com/fa-repo/shard-docs/tree/master/examples/src/04ExamplesBasicExample">
    Source code
  </a>,
  <MarkdownShard markdown={HelloWorldMarkdown} />
];

Documentation.propTypes = {};
Documentation.defaultProps = {};

export default Documentation;
