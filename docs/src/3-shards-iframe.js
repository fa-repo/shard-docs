import React from "react";
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * IframeShard
 */

export default [
  <MarkdownShard
    markdown={`
#### Import
~~~jsx
import IframeShard from "@fa-repo/shard-docs/dist/shards/iframe-shard";
import "@fa-repo/shard-docs/dist/shards/iframe-shard.css";
~~~

#### Properties
| Name | Type   | Default | Required | Description                 |
|------|--------|---------|----------|-----------------------------|
| path | string | \`""\`  | required | Point iframe to a URL. |

#### Usage

`}
  />,
  <CodeExampleShard
    title="Iframe shard"
    sourceCode={`import ShardDocs from "@fa-repo/shard-docs"
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/iframe-shard.js"
import "@fa-repo/shard-docs/dist/shards/iframe-shard.css"

<ShardDocs
  title="Iframe shard"
  structure={[
    {
      page: "Hello world",
      composition: [ <IframeShard path="#/docs/hello-world" /> ]
    }
  ]}
/>`}
  >
    <IframeShard path="#/docs/hello-world" style={{ width: "1200px" }} />
  </CodeExampleShard>
];