# Markdown shard
Write markdown directly into ShardDocs.

### Usage
```jsx
import ShardDocs from "@fa-repo/shard-docs"
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard.js"
import "@fa-repo/shard-docs/dist/shards/markdown-shard.css"

<ShardDocs
  title="Markdown shard"
  structure={[
    {
      type: "page",
      title: "Hello world",
      composition: [<MarkdownShard markdown="# Hello world" />]
    }
  ]}
/>
```