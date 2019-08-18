import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import SourceCodeShard from "@fa-repo/shard-docs/dist/shards/source-code-shard";
import "@fa-repo/shard-docs/dist/shards/source-code-shard.css";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";

/**
 * MarkdownShard
 */

export default [
  <SectionShard title="Import" persistState="33234">
    <SourceCodeShard
      lang="bash"
      code={`
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import "@fa-repo/shard-docs/dist/shards/markdown-shard.css";`}
    />
  </SectionShard>,
  <SectionShard title="Properties" persistState="91201">
    <MarkdownShard
      markdown={`
| Name          | Type    | Default   | Required  | Description                 |
|---------------|---------|-----------|-----------|-----------------------------|
| markdown      | string | \`""\`    |  required  | Provide markdown. Code blocks support the following languages: \`bash\`, \`css\`, \`html\`, \`http\`, \`javascript\`, \`js\`, \`json\`, \`jsx\`,  \`markdown\`, \`mathml\`, \`md\`, \`php\`, \`regex\`, \`sass\`, \`scss\`, \`shell\`, \`sql\`, \`svg\`, \`ts\`, \`tsx\`, \`typescript\`, \`xml\`, \`yaml\`, \`yml\`. |`}
    />
  </SectionShard>,
  <SectionShard title="Usage" persistState="11742">
    <ExampleShard
      title="Hello world"
      lang="jsx"
      sourceCode={`<MarkdownShard markdown="## Hello world" />`}
    >
      <MarkdownShard markdown="## Hello world" />
    </ExampleShard>
  </SectionShard>
];
