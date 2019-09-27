import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * HelloWorld
 */

const github = "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/HelloWorld";

const sourceCode = `
<ShardDocs
  title="Package name"
  basePath="/examples/hello-world"
  source={[
    {
      page: "Hello world",
      composition: [ <img src="/images/hello-world.jpg" alt="Turtle" /> ]
    }
  ]}
/>`;

export default [
  <CodeExampleShard title="Hello world" repository={github} sourceCode={sourceCode}>
    <IframeShard path="#/examples/hello-world" style={{ width: "1200px" }} />
  </CodeExampleShard>
];
