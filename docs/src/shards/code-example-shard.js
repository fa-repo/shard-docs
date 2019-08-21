import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";

/**
 * CodeExampleShard
 */

export default [
  <SectionShard title="Import" persistState="39129">
    <CodeExampleShard
      lang="bash"
      noShadow
      sourceCode={`
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";
import "@fa-repo/shard-docs/dist/shards/code-example-shard.css";`}
    />
  </SectionShard>,

  <SectionShard title="Properties" persistState="53231">
    <MarkdownShard
      markdown={`
| Name       | Type   | Default  | Required  | Description                                         |
|------------|--------|----------|-----------|-----------------------------------------------------|
| title      | string | \`""\`   | Sometimes | Describe the example.                               |
| sourceCode | string | \`""\`   | Required  | The example source code.                            |
| repository | string | \`""\`   |           | Link to external source code.                       |
| lang       | string | \`jsx\`  |           | Language parser: \`bash\`, \`css\`, \`html\`, \`http\`, \`javascript\`, \`js\`, \`json\`, \`jsx\`,  \`markdown\`, \`mathml\`, \`md\`, \`php\`, \`regex\`, \`sass\`, \`scss\`, \`shell\`, \`sql\`, \`svg\`, \`ts\`, \`tsx\`, \`typescript\`, \`xml\`, \`yaml\`, \`yml\`. |
| noShadow | boolean  | false   |           | Disable the shadow.                             |
`}
    />
  </SectionShard>,
  <SectionShard title="Examples" persistState="32912">
    <CodeExampleShard
      title="Hello world"
      sourceCode={`
<CodeExampleShard title="Hi!" sourceCode={\`Example source code goes here.\`}>
  <button onClick={e=> alert('The game')}>Click me</button>
</CodeExampleShard>
`}
    >
      <CodeExampleShard
        title="Hi!"
        sourceCode={`<button onClick={e=> alert('The game')}>Click me</button>`}
      >
        <button onClick={e => alert("The game")}>Click me</button>
      </CodeExampleShard>
    </CodeExampleShard>
    <CodeExampleShard title="Disable shadow" sourceCode={`<CodeExampleShard ... noShadow />`}>
      <CodeExampleShard
        title="Example shard without shadow"
        noShadow
        sourceCode={`# Oh look! No shadow`}
      />
    </CodeExampleShard>
    <CodeExampleShard
      title="Headless CodeExampleShard"
      sourceCode={`
<CodeExampleShard sourceCode={"/* Source code */"}>
  // Executed code
</CodeExampleShard>
`}
    >
      <CodeExampleShard sourceCode={`<button onClick={e=> alert('The game')}>Click me</button>`}>
        <button onClick={e => alert("The game")}>Click me</button>
      </CodeExampleShard>
    </CodeExampleShard>
    <CodeExampleShard
      title="Contentless CodeExampleShatd"
      sourceCode={`<CodeExampleShard title="Code example shard" sourceCode={"/* Source code */"} />`}
    >
      <CodeExampleShard
        title="Code example shard"
        sourceCode={`<button onClick={e=> alert('The game')}>Click me</button>`}
      />
    </CodeExampleShard>
    <CodeExampleShard
      title="Source codeless CodeExampleShard"
      sourceCode={`
<CodeExampleShard title="Code example shard">
  // Executed code
</CodeExampleShard>
`}
    >
      <CodeExampleShard title="Code example shard">
        <button onClick={e => alert("The game")}>Click me</button>
      </CodeExampleShard>
    </CodeExampleShard>
  </SectionShard>
];
