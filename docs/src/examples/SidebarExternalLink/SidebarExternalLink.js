import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";

/**
 * SidebarExternalLink
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/SidebarExternalLink";

export default [
  <ExampleShard
    title="Sidebar external link"
    lang="jsx"
    sourceCodeLink={sourceCodeLink}
    sourceCode={`
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
/>
`}
  >
    <IframeShard path="#/examples/sidebar-external-link" />
  </ExampleShard>
];
