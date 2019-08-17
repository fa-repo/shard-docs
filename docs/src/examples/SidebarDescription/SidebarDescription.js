import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";

/**
 * SidebarDescription
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/SidebarDescription";

export default [
  <ExampleShard
    title="Sidebar description"
    lang="jsx"
    sourceCodeLink={sourceCodeLink}
    sourceCode={`<ShardDocs
  title="Documentation title"
  description="A description describing your documentation"
/>`}
  >
    <IframeShard path="#/examples/sidebar-description" />
  </ExampleShard>
];
