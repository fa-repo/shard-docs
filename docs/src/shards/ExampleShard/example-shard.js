import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import SourceCodeShard from "@fa-repo/shard-docs/dist/shards/source-code-shard";
import "@fa-repo/shard-docs/dist/shards/source-code-shard.css";

/**
 * ExampleShard
 */

export default [
  <SectionShard title="Import">
    <SourceCodeShard
      lang="bash"
      code={`
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";`}
    />
  </SectionShard>,

  <SectionShard title="Properties">
    <MarkdownShard
      markdown={`
| Name          | Type    | Default   | Required  | Description                 |
|---------------|---------|-----------|-----------|-----------------------------|
| title    | string, element | \`""\`    |  Sometimes  | Describe the example. |
| sourceCode | string | \`""\`    | Required   | The example source code. |
| sourceCodeLink | string | \`""\`    |   | Link to external source code. |
| lang      | string | \`undefined\`    | Required  | Language parser: \`bash\`, \`css\`, \`html\`, \`http\`, \`javascript\`, \`js\`, \`json\`, \`jsx\`,  \`markdown\`, \`mathml\`, \`md\`, \`php\`, \`regex\`, \`sass\`, \`scss\`, \`shell\`, \`sql\`, \`svg\`, \`ts\`, \`tsx\`, \`typescript\`, \`xml\`, \`yaml\`, \`yml\`. |`}
    />
  </SectionShard>,
  <SectionShard title="Usage">
    <ExampleShard
      title="Example shard title"
      lang="jsx"
      sourceCode={`<ExampleShard header={"Example shard title"} lang="jsx" sourceCode={\`This example could get into a recurring loop here.... this is where the source code snippet you're currently reading goes.\`}>
  <button onClick={e=> alert('The game')}>Click me</button>
</ExampleShard>`}
    >
      <button onClick={e => alert("The game")}>Click me</button>
    </ExampleShard>
  </SectionShard>
];
