import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";

/**
 * SectionShard
 */

export default [
  <h1>Section shard</h1>,
  <p>Group content into a section.</p>,
  <h3>Properties</h3>,
  <MarkdownShard
    markdown={`
| Name       | Type    | Default  | Required  | Description           |
|------------|---------|----------|-----------|-----------------------|
| \`title\`  | string  | \`""\`   | required  | Title of the section. |
`}
  />,
  <h3>Usage</h3>,
  <ExampleShard
    header="Basic usage"
    lang="jsx"
    sourceCode={`<SectionShard title="Section shard title">
  Click \`Section shard title\` to toggle its content.
</SectionShard>`}
  >
    <SectionShard title="Section shard title">
      Click `Section shard title` to toggle its content.
    </SectionShard>
  </ExampleShard>
];
