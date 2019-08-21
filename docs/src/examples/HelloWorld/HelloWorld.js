import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";

/**
 * HelloWorld
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/HelloWorld";

const Documentation = [
  <ExampleShard
    title="Hello world"
    lang="jsx"
    sourceCodeLink={sourceCodeLink}
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
  </ExampleShard>
];

Documentation.propTypes = {};
Documentation.defaultProps = {};

export default Documentation;
