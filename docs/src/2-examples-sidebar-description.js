import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * SidebarDescription
 */

const github =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/SidebarDescription";

const sourceCode = `
<ShardDocs
  title="Documentation title"
  description="A description describing your documentation"
/>`;

export default [
  <CodeExampleShard title="Sidebar description" repository={github} sourceCode={sourceCode}>
    <IframeShard path="#/examples/sidebar-description" style={{ width: "1200px" }} />
  </CodeExampleShard>
];
