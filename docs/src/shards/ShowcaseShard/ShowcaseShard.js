import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import ShowcaseShard from "@fa-repo/shard-docs/dist/shards/showcase-shard";
import "@fa-repo/shard-docs/dist/shards/showcase-shard.css";

/**
 * ShowcaseShard
 */

export default [
  <MarkdownShard
    markdown={`
# ShowcaseShard
Showcase something. An example component, block of text, anything..

### Properties
| Name      | Type    | Default | Required   | Description                     |
|-----------|---------|---------|------------|---------------------------------|
| \`title\` | string  | \`""\`  | sometimes  | Give the showcase a title.      |
| \`noPad\` | boolean | \`""\`  | sometimes  | Remove all padding.             |

### Example`}
  />,
  <ShowcaseShard title="Showcase title">
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
  </ShowcaseShard>,
  <MarkdownShard
    markdown={`
### Source code
\`\`\`jsx
import ShowcaseShard from "@fa-repo/shard-docs/dist/shards/showcase-shard";
import "@fa-repo/shard-docs/dist/shards/showcase-shard.css";

<ShowcaseShard title="Showcase title">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed ullamcorper est, eget
  fermentum est. Maecenas faucibus risus odio, vel laoreet tellus vehicula eu. Lorem ipsum dolor
  sit amet, consectetur adipiscing elit. Duis tristique ligula eu odio tincidunt, ac vulputate
  quam faucibus. Aliquam gravida orci a accumsan cursus. Nulla tempus congue sem in fringilla.
  Mauris erat turpis, ullamcorper non ipsum a, venenatis placerat lectus. Vivamus id aliquam
  massa, sed luctus quam. Suspendisse ante ipsum, tincidunt eget dictum nec, tincidunt quis lacus.
  Etiam maximus euismod orci. Donec rhoncus felis elit, rhoncus varius lorem convallis vitae.
  Aliquam varius erat eget semper venenatis.</p>
</ShowcaseShard>
\`\`\`
`}
  />
];
