import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";

/**
 * API reference
 */

const shardDocsReference = `
| Name      | Type   | Default   | Description                                                     |
|-----------|--------|-----------|-----------------------------------------------------------------|
| \`title\` | string | \`""\` | A title for your documentation. Appears at the top of the sidebar. |
| \`description\` | string | \`""\` | A description for your documentation. Appears below the title in the sidebar.   |
| \`basePath\`    | string | \`"/docs"\` | A path prepended to every page.                         |
| \`source\`      | array  | \`[]\` |Documentation data organised as a tree. See below for help.   |
| \`hideBuiltWithShardDocs\` | boolean | \`false\` | Hide "Built with @fa-repo/shard-docs" on sidebar. |

#### Configuring Shard-Docs structure

The structure of ShardDocs is organised as a tree to indicate the relationship between each page and the indentation levels in the sidebar.

~~~js
const source = [
  { title: "Install", document: [ <h1>Install</h1> ] },
  { title: "Basic usage", document: [ <h1>Basic usage</h1> ] },
  {
    title: "Examples",
    children: [
      { title: "Use case A", document: [ <h1>Use case A</h1> ] },
      { title: "Use case B", document: [ <h1>Use case B</h1> ] }
    ]
  },
  { title: "Github", externalLink: "https://github.com" },
]
~~~

#### Document object properties

An object representing a document in the documentation tree.
| Name         | Type   | Default | Required | Description                                         |
|--------------|--------|---------|----------|-----------------------------------------------------|
| \`title\`    | string | \`""\`  | Required | Set the document title.                             |
| \`document\` | component  | \`null\`  | | A component containing document content. |

#### Group object properties

An object containing an array of documents in the documentation tree.
| Name         | Type   | Default | Required | Description                                         |
|--------------|--------|---------|----------|-----------------------------------------------------|
| \`title\`    | string | \`""\`  |          | Set the group title.                                |
| \`children\` | array  | \`[]\`  | Required | An array of pages in the group.                     |

#### External object properties

An object displaying an external link in the sidebar menu.
| Name             | Type   | Default | Required | Description                                     |
|------------------|--------|---------|----------|-------------------------------------------------|
| \`title\`        | string | \`""\`  |          | Set the link text.                              |
| \`externalLink\` | string | \`""\`  | Required | The link path.                                  |
`;

export default <MarkdownShard markdown={shardDocsReference} />;
