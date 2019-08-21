import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";

/**
 * SidebarSections
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/SidebarSections";

export default [
  <ExampleShard
    title="Sidebar sections"
    lang="jsx"
    sourceCodeLink={sourceCodeLink}
    sourceCode={`
<ShardDocs
  title="Documentation title"
  tree={[
    {
      group: "Section A",
      pages: [
        { page: "Page A", composition: [<h1>Page A</h1>] },
        { page: "Page B", composition: [<h1>Page B</h1>] }
      ]
    },
    {
      group: "Section B",
      pages: [
        { page: "Page C", composition: [<h1>Page C</h1>] },
        { page: "Page D", composition: [<h1>Page D</h1>] }
      ]
    }
  ]}
/>`}
  >
    <IframeShard path="#/examples/sidebar-groups" />
  </ExampleShard>
];
