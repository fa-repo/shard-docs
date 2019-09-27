import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * CodeExampleShard
 */

export default [
  <MarkdownShard
    markdown={`
#### Import
\`\`\`jsx
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";
import "@fa-repo/shard-docs/dist/shards/code-example-shard.css";
\`\`\`

#### Properties
| Name       | Type   | Default  | Required  | Description                                         |
|------------|--------|----------|-----------|-----------------------------------------------------|
| title      | string | \`""\`   | Sometimes | Describe the example.                               |
| sourceCode | string | \`""\`   | Required  | The example source code.                            |
| repository | string | \`""\`   |           | Link to external source code.                       |
| lang       | string | \`jsx\`  |           | Language parser: \`bash\`, \`css\`, \`html\`, \`http\`, \`javascript\`, \`js\`, \`json\`, \`jsx\`,  \`markdown\`, \`mathml\`, \`md\`, \`php\`, \`regex\`, \`sass\`, \`scss\`, \`shell\`, \`sql\`, \`svg\`, \`ts\`, \`tsx\`, \`typescript\`, \`xml\`, \`yaml\`, \`yml\`. |`}
  />,
  <CodeExampleShard
    title="Hello world - (visual note: the shard is used to present itself here hence the inception style look)"
    sourceCode={`
<CodeExampleShard
  title="Hi!"
  repository="github.com/path/somewhere"
  sourceCode={\`<p>
  Nulla at egestas ante. Suspendisse urna nisl, cursus eu ullamcorper ut, gravida at nibh. In
  hendrerit eget sapien in sollicitudin. Nulla vulputate elementum turpis, vel ultrices purus
  bibendum maximus. Aliquam vitae orci nunc. Praesent sagittis odio a odio gravida malesuada.
  Vivamus accumsan turpis a turpis sagittis, sit amet eleifend nisl scelerisque.
</p>\`}
>
  <p>
    Nulla at egestas ante. Suspendisse urna nisl, cursus eu ullamcorper ut, gravida at nibh. In
    hendrerit eget sapien in sollicitudin. Nulla vulputate elementum turpis, vel ultrices purus
    bibendum maximus. Aliquam vitae orci nunc. Praesent sagittis odio a odio gravida malesuada.
    Vivamus accumsan turpis a turpis sagittis, sit amet eleifend nisl scelerisque.
  </p>
</CodeExampleShard>
`}
  >
    <CodeExampleShard
      title="Hi!"
      repository="github.com/path/somewhere"
      sourceCode={`<p>
  Nulla at egestas ante. Suspendisse urna nisl, cursus eu ullamcorper ut, gravida at nibh. In
  hendrerit eget sapien in sollicitudin. Nulla vulputate elementum turpis, vel ultrices purus
  bibendum maximus. Aliquam vitae orci nunc. Praesent sagittis odio a odio gravida malesuada.
  Vivamus accumsan turpis a turpis sagittis, sit amet eleifend nisl scelerisque.
</p>`}
    >
      <p>
        Nulla at egestas ante. Suspendisse urna nisl, cursus eu ullamcorper ut, gravida at nibh. In
        hendrerit eget sapien in sollicitudin. Nulla vulputate elementum turpis, vel ultrices purus
        bibendum maximus. Aliquam vitae orci nunc. Praesent sagittis odio a odio gravida malesuada.
        Vivamus accumsan turpis a turpis sagittis, sit amet eleifend nisl scelerisque.
      </p>
    </CodeExampleShard>
  </CodeExampleShard>
];
