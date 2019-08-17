import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import SourceCodeShard from "@fa-repo/shard-docs/dist/shards/source-code-shard";
import "@fa-repo/shard-docs/dist/shards/source-code-shard.css";

/**
 * IframeShard
 */

export default [
  <SectionShard title="Import">
    <SourceCodeShard
      lang="bash"
      code={`
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import "@fa-repo/shard-docs/dist/shards/iframe-shard.css";`}
    />
  </SectionShard>,
  <SectionShard title="Properties">
    <MarkdownShard
      markdown={`
| Name | Type   | Default | Required | Description                 |
|------|--------|---------|----------|-----------------------------|
| path | string | \`""\`  | required | Point iframe to a URL. |
`}
    />
  </SectionShard>,

  <SectionShard title="Usage">
    <ExampleShard
      title="Iframe shard"
      lang="jsx"
      sourceCode={`import ShardDocs from "@fa-repo/shard-docs"
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/iframe-shard.js"
import "@fa-repo/shard-docs/dist/shards/iframe-shard.css"

<ShardDocs
  title="Iframe shard"
  structure={[
    {
      type: "page",
      title: "Hello world",
      composition: [ <IframeShard path="#/docs/hello-world" /> ]
    }
  ]}
/>`}
    >
      <IframeShard path="#/docs/hello-world" />
    </ExampleShard>
  </SectionShard>
];
