import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * MarkdownShard
 */

export default (
  <>
    <MarkdownShard
      markdown={`
#### Import
~~~jsx
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import "@fa-repo/shard-docs/dist/shards/markdown-shard.css";
~~~

#### Properties
| Name          | Type    | Default   | Required  | Description                 |
|---------------|---------|-----------|-----------|-----------------------------|
| markdown      | string | \`""\`    |  required  | Provide markdown. Code blocks support the following languages: \`bash\`, \`css\`, \`html\`, \`http\`, \`javascript\`, \`js\`, \`json\`, \`jsx\`,  \`markdown\`, \`mathml\`, \`md\`, \`php\`, \`regex\`, \`sass\`, \`scss\`, \`shell\`, \`sql\`, \`svg\`, \`ts\`, \`tsx\`, \`typescript\`, \`xml\`, \`yaml\`, \`yml\`. |

#### Usage
`}
    />
    <CodeExampleShard
      title="Hello world"
      sourceCode={`<MarkdownShard markdown="## Hello world" />`}
    >
      <MarkdownShard markdown="## Hello world" />
    </CodeExampleShard>
  </>
);
