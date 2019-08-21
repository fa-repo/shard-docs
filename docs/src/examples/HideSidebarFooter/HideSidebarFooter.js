import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";

/**
 * HideSidebarFooter
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/HideSidebarFooter";

export default [
  <ExampleShard
    title="Sidebar sections"
    lang="jsx"
    sourceCodeLink={sourceCodeLink}
    sourceCode={`
<ShardDocs
  title="Documentation title"
  basePath="/examples/hide-sidebar-footer"
  showSidebarFooter={false}
  tree={[
    {
      page: "Hide sidebar footer",
      composition: [<h1>Hide sidebar footer</h1>]
    }
  ]}
/>
`}
  >
    <IframeShard path="#/examples/hide-sidebar-footer" />
  </ExampleShard>
];
