import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * CustomStyles
 */

const github = "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/CustomStyles";

const sourceCode = `<>
  <style
    dangerouslySetInnerHTML={{
      __html: \`.shard-docs-sidebar { background: red; }\`
    }}
  />
  <ShardDocs
    title="Documentation title"
    basePath="/examples/custom-styles/essentials/get-started"
    source={[
      {
        title: "Essentials",
        children: [{ title: "Get started", document: [<h1>Get started</h1>] }]
      }
    ]}
  />
</>`;

export default [
  <CodeExampleShard title="Custom styles" repository={github} sourceCode={sourceCode}>
    <IframeShard path="#/examples/custom-styles" style={{ width: "1200px" }} />
  </CodeExampleShard>
];
