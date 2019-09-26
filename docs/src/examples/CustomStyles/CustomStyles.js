import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * CustomStyles
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/CustomStyles";

export default [
  <CodeExampleShard
    title="Custom styles"
    repository={sourceCodeLink}
    sourceCode={`
<>
  <style
    dangerouslySetInnerHTML={{
      __html: \`.shard-docs-sidebar { background: red; }\`
    }}
  />
  <ShardDocs
    title="Documentation title"
    basePath="/examples/custom-styles/essentials/get-started"
    tree={[
      {
        group: "Essentials",
        pages: [{ page: "Get started", composition: [<h1>Get started</h1>] }]
      }
    ]}
  />
</>`}
  >
    <IframeShard path="#/examples/custom-styles" style={{ width: "1200px" }} />
  </CodeExampleShard>
];
