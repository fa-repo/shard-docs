import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * SidebarExternalLink
 */

const github =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/SidebarExternalLink";

const sourceCode = `
<ShardDocs
  title="Documentation title"
  source={[
    {
      title: null,
      children: [
        { title: "Some page A", document: [<p>Lorem ipsum...</p>] },
        { title: "Some page B", document: [<p>Lorem ipsum...</p>] },
        { title: "Some page C", document: [<p>Lorem ipsum...</p>] },
        { title: "Github", externalLink: "https://github.com/" }
      ]
    }
  ]}
/>`;

export default [
  <CodeExampleShard title="Sidebar external link" repository={github} sourceCode={sourceCode}>
    <IframeShard path="#/examples/sidebar-external-link" style={{ width: "1200px" }} />
  </CodeExampleShard>
];
