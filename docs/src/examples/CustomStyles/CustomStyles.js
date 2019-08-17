import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";

/*  */

/**
 * CustomStyles
 */

const sourceCodeLink =
  "https://github.com/fa-repo/shard-docs/tree/master/docs/src/examples/CustomStyles";

export default [
  <ExampleShard
    title="Custom styles"
    lang="jsx"
    sourceCodeLink={sourceCodeLink}
    sourceCode={`<>
  <style
    dangerouslySetInnerHTML={{
      __html: \`.shard-docs-sidebar { background: red; }\`
    }}
  />
  <ShardDocs
    title="Documentation title"
    basePath="/examples/custom-styles"
    structure={[
      { type: "heading", heading: "Essentials" },
      { type: "page", title: "Get started", composition: [<h1>Get started</h1>] }
    ]}
  />
</>`}
  >
    <IframeShard path="#/examples/custom-styles" />
  </ExampleShard>
];
