import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * HideSidebarFooter
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/HideSidebarFooter";

export default [
  <CodeExampleShard
    title="Sidebar sections"
    repository={sourceCodeLink}
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
  </CodeExampleShard>
];
