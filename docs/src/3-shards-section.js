import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * SectionShard
 */

export default [
  <MarkdownShard
    markdown={`
#### Import

~~~jsx
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
~~~

#### Properties

| Name       | Type    | Default  | Required  | Description           |
|------------|---------|----------|-----------|-----------------------|
| \`title\`  | string  | \`""\`   | required  | Title of the section. |
| \`persistState\`  | string  | \`""\`   | sometimes  | Provide a custom id to persist collapsed state on page refresh. |

#### Usage
`}
  />,
  <CodeExampleShard
    title="Hello world"
    sourceCode={`<SectionShard title="Section shard title">
  Click \`Section shard title\` to toggle its content.
</SectionShard>`}
  >
    <SectionShard title="Section shard title">
      Click `Section shard title` to toggle its content.
    </SectionShard>
  </CodeExampleShard>,
  <CodeExampleShard
    title="Remember collapsed state by assigning a custom ID to `persistState`."
    sourceCode={`<SectionShard title="Section shard title" persistState="abcdef">
  Click \`Section shard title\` to toggle content.
</SectionShard>`}
  >
    <SectionShard title="Section shard title" persistState="abcdef">
      Remember collapsed state when toggling content. Refresh page to see persisted state.
    </SectionShard>
  </CodeExampleShard>
];
