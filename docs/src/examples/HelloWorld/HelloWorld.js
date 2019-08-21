import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * HelloWorld
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/HelloWorld";

const Documentation = [
  <CodeExampleShard
    title="Hello world"
    repository={sourceCodeLink}
    sourceCode={`
<ShardDocs
  title="Package name"
  basePath="/examples/hello-world"
  tree={[
    {
      page: "Hello world",
      composition: [ <img src="/images/hello-world.jpg" alt="Turtle" /> ]
    }
  ]}
/>
`}
  >
    <IframeShard path="#/examples/hello-world" />
  </CodeExampleShard>
];

Documentation.propTypes = {};
Documentation.defaultProps = {};

export default Documentation;
