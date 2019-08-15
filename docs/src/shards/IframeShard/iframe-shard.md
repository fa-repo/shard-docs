### Usage
```jsx
import ShardDocs from "@fa-repo/shard-docs"
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
/>
```