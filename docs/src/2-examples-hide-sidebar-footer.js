import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * HideSidebarFooter
 */

const github =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/HideSidebarFooter";

const sourceCode = `
<ShardDocs
  title="Documentation title"
  basePath="/examples/hide-sidebar-footer"
  showSidebarFooter={false}
  source={[
    {
      page: "Hide sidebar footer",
      composition: [<h1>Hide sidebar footer</h1>]
    }
  ]}
/>`;

export default [
  <CodeExampleShard title="Sidebar sections" repository={github} sourceCode={sourceCode}>
    <IframeShard path="#/examples/hide-sidebar-footer" style={{ width: "1200px" }} />
  </CodeExampleShard>
];
