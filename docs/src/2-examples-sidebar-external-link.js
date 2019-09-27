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
  tree={[
    {
      group: null,
      pages: [
        { page: "Getting started", composition: [<h1>Getting started</h1>] },
        { page: "API reference", composition: [<h1>API reference</h1>] },
        { page: "Basic example", composition: [<h1>Basic example</h1>] },
        { external: "Github", link: "https://github.com/" }
      ]
    }
  ]}
/>`;

export default [
  <CodeExampleShard title="Sidebar external link" repository={github} sourceCode={sourceCode}>
    <IframeShard path="#/examples/sidebar-external-link" style={{ width: "1200px" }} />
  </CodeExampleShard>
];
