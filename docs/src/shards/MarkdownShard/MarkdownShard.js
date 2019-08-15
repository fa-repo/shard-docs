import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import markdownShardMarkdown from "./markdown-shard.md";

/**
 * HelloWorld
 */

const Documentation = [<MarkdownShard markdown={markdownShardMarkdown} />];

Documentation.propTypes = {};
Documentation.defaultProps = {};

export default Documentation;
