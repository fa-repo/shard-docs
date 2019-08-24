import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * MarkdownShard
 */

export default [
  <SectionShard title="Import" persistState="33234">
    <CodeExampleShard
      noShadow
      lang="bash"
      sourceCode={`
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import "@fa-repo/shard-docs/dist/shards/markdown-shard.css";`}
    />
  </SectionShard>,
  <SectionShard title="Properties" persistState="91201">
    <MarkdownShard
      className="as"
      markdown={`
| Name          | Type    | Default   | Required  | Description                 |
|---------------|---------|-----------|-----------|-----------------------------|
| markdown      | string | \`""\`    |  required  | Provide markdown. Code blocks support the following languages: \`bash\`, \`css\`, \`html\`, \`http\`, \`javascript\`, \`js\`, \`json\`, \`jsx\`,  \`markdown\`, \`mathml\`, \`md\`, \`php\`, \`regex\`, \`sass\`, \`scss\`, \`shell\`, \`sql\`, \`svg\`, \`ts\`, \`tsx\`, \`typescript\`, \`xml\`, \`yaml\`, \`yml\`. |`}
    />
  </SectionShard>,
  <SectionShard title="Usage" persistState="11742">
    <CodeExampleShard
      title="Hello world"
      sourceCode={`<MarkdownShard markdown="## Hello world" />`}
    >
      <MarkdownShard markdown="## Hello world" />
    </CodeExampleShard>
  </SectionShard>
];
