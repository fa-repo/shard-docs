import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import "@fa-repo/shard-docs/dist/shards/source-code-shard.css";

/**
 * API reference
 */

export default [
  <SectionShard title="Shard-Docs properties" persistState="49681">
    <MarkdownShard
      markdown={`
| Name      | Type   | Default   | Description                                                     |
|-----------|--------|-----------|-----------------------------------------------------------------|
| \`title\` | string | \`""\` | A title for your documentation. Appears at the top of the sidebar. |
| \`description\` | string | \`""\` | A description for your documentation. Appears below the title in the sidebar. |
| \`basePath\` | string | \`"/docs"\` | A path prepended to every page.                            |
| \`tree\`  | array  | \`[]\` |Documentation data organised as a tree. See below for help.         |
`}
    />
  </SectionShard>,
  <SectionShard title="Configuring Shard-Docs structure" persistState="85830">
    <MarkdownShard
      markdown={`The structure of ShardDocs is organised as a tree to indicate the relationship between each page and the indentation levels in the sidebar.

\`\`\`js
const tree = [
  { page: "Install", composition: [ <h1>Install</h1> ] },
  { page: "Basic usage", composition: [ <h1>Basic usage</h1> ] },
  {
    group: "Examples",
    pages: [
      { page: "Use case A", composition: [ <h1>Use case A</h1> ] },
      { page: "Use case B", composition: [ <h1>Use case B</h1> ] }
    ]
  },
  { external: "Github", link: "https://github.com" },
]
\`\`\``}
    />
  </SectionShard>,
  <SectionShard title="Page object properties" persistState="53596">
    <MarkdownShard
      markdown={`
An object representing a page in the documentation tree.
| Name      | Type   | Default | Required | Description                                            |
|-----------|--------|---------|----------|--------------------------------------------------------|
| \`page\`  | string | \`""\`  | Required | Define the object as a page and set the page title.    |
| \`slug\`  | string | \`""\`  |          | A custom slug. Defaults to slugified version of title. |
| \`composition\` | array | \`[]\` |      | An array of components that will be rendered in order when viewing this page. |`}
    />
  </SectionShard>,
  <SectionShard title="Group object properties" persistState="95577">
    <MarkdownShard
      markdown={`
An object containing an array of pages in the documentation tree.
| Name      | Type   | Default | Required | Description                                            |
|-----------|--------|---------|----------|--------------------------------------------------------|
| \`group\` | string | \`""\`  | Required | Define the object as a group and set the group title.  |
| \`slug\`  | string | \`""\`  |          | A custom slug. Defaults to slugified version of title. |
| \`pages\` | array  | \`[]\`  |          | An array of pages in the group.                      |`}
    />
  </SectionShard>,
  <SectionShard title="External object properties" persistState="95669">
    <MarkdownShard
      markdown={`
An object displaying an external link in the sidebar menu.
| Name      | Type   | Default | Required | Description                                            |
|-----------|--------|---------|----------|--------------------------------------------------------|
| \`external\` | string | \`""\` | | Define the object as an external link and set the link text.  |
| \`link\`     | string | \`""\`  | Required | The link path.                                    |`}
    />
  </SectionShard>
];
