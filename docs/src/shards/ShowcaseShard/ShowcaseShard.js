import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import ShowcaseShard from "@fa-repo/shard-docs/dist/shards/showcase-shard";
import "@fa-repo/shard-docs/dist/shards/showcase-shard.css";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import SourceCodeShard from "@fa-repo/shard-docs/dist/shards/source-code-shard";
import "@fa-repo/shard-docs/dist/shards/source-code-shard.css";
import ExampleShard from "@fa-repo/shard-docs/dist/shards/example-shard";
import "@fa-repo/shard-docs/dist/shards/example-shard.css";

/**
 * ShowcaseShard
 */

export default [
  <SectionShard title="Import">
    <SourceCodeShard
      lang="bash"
      code={`
import ShowCaseShard from "@fa-repo/shard-docs/dist/shards/showcase-shard";
import "@fa-repo/shard-docs/dist/shards/showcase-shard.css";`}
    />
  </SectionShard>,
  <SectionShard title="Properties">
    <MarkdownShard
      markdown={`
| Name      | Type    | Default | Required   | Description                     |
|-----------|---------|---------|------------|---------------------------------|
| \`title\` | string  | \`""\`  | sometimes  | Give the showcase a title.      |
| \`noPad\` | boolean | \`""\`  | sometimes  | Remove all padding.             |`}
    />
  </SectionShard>,
  <SectionShard title="Usage">
    <ExampleShard
      title="Hello world"
      lang="jsx"
      sourceCode={`<ShowcaseShard title="Showcase title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed ullamcorper est, eget
    fermentum est. Maecenas faucibus risus odio, vel laoreet tellus vehicula eu. Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Duis tristique ligula eu odio tincidunt, ac vulputate
    quam faucibus. Aliquam gravida orci a accumsan cursus. Nulla tempus congue sem in fringilla.
    Mauris erat turpis, ullamcorper non ipsum a, venenatis placerat lectus. Vivamus id aliquam
    massa, sed luctus quam. Suspendisse ante ipsum, tincidunt eget dictum nec, tincidunt quis
    lacus. Etiam maximus euismod orci. Donec rhoncus felis elit, rhoncus varius lorem convallis
    vitae. Aliquam varius erat eget semper venenatis.
  </p>
</ShowcaseShard>`}
    >
      <ShowcaseShard title="Showcase title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed ullamcorper est, eget
          fermentum est. Maecenas faucibus risus odio, vel laoreet tellus vehicula eu. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis tristique ligula eu odio tincidunt, ac
          vulputate quam faucibus. Aliquam gravida orci a accumsan cursus. Nulla tempus congue sem
          in fringilla. Mauris erat turpis, ullamcorper non ipsum a, venenatis placerat lectus.
          Vivamus id aliquam massa, sed luctus quam. Suspendisse ante ipsum, tincidunt eget dictum
          nec, tincidunt quis lacus. Etiam maximus euismod orci. Donec rhoncus felis elit, rhoncus
          varius lorem convallis vitae. Aliquam varius erat eget semper venenatis.
        </p>
      </ShowcaseShard>
    </ExampleShard>
  </SectionShard>
];