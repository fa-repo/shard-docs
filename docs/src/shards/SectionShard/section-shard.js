import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";
import SourceCodeShard from "@fa-repo/shard-docs/dist/shards/source-code-shard";
import "@fa-repo/shard-docs/dist/shards/source-code-shard.css";

/**
 * SectionShard
 */

export default [
  <SectionShard title="Import">
    <SourceCodeShard
      lang="bash"
      code={`
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";`}
    />
  </SectionShard>,
  <SectionShard title="Properties">
    <MarkdownShard
      markdown={`
| Name       | Type    | Default  | Required  | Description           |
|------------|---------|----------|-----------|-----------------------|
| \`title\`  | string  | \`""\`   | required  | Title of the section. |`}
    />
  </SectionShard>,
  <SectionShard title="Usage">
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
  </SectionShard>
];
