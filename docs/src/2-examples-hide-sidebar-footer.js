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
  title="Hide sidebar footer"
  basePath="/examples/hide-sidebar-footer"
  showSidebarFooter={false}
/>`;

export default (
  <CodeExampleShard
    title="Look, nothing shown at the bottom of the sidebar."
    repository={github}
    sourceCode={sourceCode}
  >
    <IframeShard path="#/examples/hide-sidebar-footer" style={{ width: "1200px" }} />
  </CodeExampleShard>
);
