import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * SectionShard
 */

export default [
  <SectionShard title="Import" persistState="22190">
    <CodeExampleShard
      noShadow
      lang="bash"
      sourceCode={`
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";`}
    />
  </SectionShard>,
  <SectionShard title="Properties" persistState="99912">
    <MarkdownShard
      markdown={`
| Name       | Type    | Default  | Required  | Description           |
|------------|---------|----------|-----------|-----------------------|
| \`title\`  | string  | \`""\`   | required  | Title of the section. |
| \`persistState\`  | string  | \`""\`   | sometimes  | Provide a custom id to this property to persist collapsed state on page refresh. |
`}
    />
  </SectionShard>,
  <SectionShard title="Usage" persistState="84882">
    <ExampleShard
      title="Hello world"
      lang="jsx"
      sourceCode={`<SectionShard title="Section shard title">
  Click \`Section shard title\` to toggle its content.
</SectionShard>`}
    >
      <SectionShard title="Section shard title">
        Click `Section shard title` to toggle its content.
      </SectionShard>
    </ExampleShard>
    <ExampleShard
      title="Remember collapsed state by assigning a custom ID to `persistState`."
      lang="jsx"
      sourceCode={`<SectionShard title="Section shard title" persistState="abcdef">
  Click \`Section shard title\` to toggle content.
</SectionShard>`}
    >
      <SectionShard title="Section shard title" persistState="abcdef">
        Remember collapsed state when toggling content. Refresh page to see persisted state.
      </SectionShard>
    </ExampleShard>
  </SectionShard>
];
