import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";

/**
 * ExampleShard
 */

export default [
  <h1>Example shard</h1>,
  <p>Present example in ShardDocs.</p>,
  <h3>Properties</h3>,
  <MarkdownShard
    markdown={`
| Name          | Type    | Default   | Required  | Description                 |
|---------------|---------|-----------|-----------|-----------------------------|
| \`header\`    | string, element | \`""\`    |  Sometimes  | Describe the example. |
| \`sourceCode\` | string | \`""\`    | Required   | The example source code. |
| \`lang\`      | string | \`undefined\`    | Required  | Language parser: \`bash\`, \`css\`, \`html\`, \`http\`, \`javascript\`, \`js\`, \`json\`, \`jsx\`,  \`markdown\`, \`mathml\`, \`md\`, \`php\`, \`regex\`, \`sass\`, \`scss\`, \`shell\`, \`sql\`, \`svg\`, \`ts\`, \`tsx\`, \`typescript\`, \`xml\`, \`yaml\`, \`yml\`. |
`}
  />,
  <h3>Example</h3>,
  <ExampleShard
    header={"Example shard title"}
    lang="jsx"
    sourceCode={`<ExampleShard header={"Example shard title"} lang="jsx" sourceCode={\`This example could get into a recurring loop here.... this is where the source code snippet you're currently reading goes.\`}>
  <button onClick={e=> alert('The game')}>Click me</button>
</ExampleShard>`}
  >
    <button onClick={e => alert("The game")}>Click me</button>
  </ExampleShard>
];
