import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * SidebarDescription
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/SidebarDescription";

export default [
  <CodeExampleShard
    title="Sidebar description"
    repository={sourceCodeLink}
    sourceCode={`
<ShardDocs
  title="Documentation title"
  description="A description describing your documentation"
/>
`}
  >
    <IframeShard path="#/examples/sidebar-description" />
  </CodeExampleShard>
];
