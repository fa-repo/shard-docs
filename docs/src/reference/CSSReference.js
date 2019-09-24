import React from "react";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * CSS reference
 */

export default [
  <SectionShard title="CSS classes" persistState="49429">
    <CodeExampleShard
      lang="markdown"
      sourceCode={`.shard-docs

// Sidebar
.shard-docs-sidebar
.shard-docs-sidebar-header
.shard-docs-sidebar-heading
.shard-docs-sidebar-description
.shard-docs-sidebar-menu

// Main
.shard-docs-main
.shard-docs-breadcrumbs
.shard-docs-document
.shard-docs-nav-footer
.shard-docs-nav-next
.shard-docs-nav-prev

// Built in shards
.shard-docs-example-shard
.shard-docs-iframe-shard
.shard-docs-markdown-shard
.shard-docs-section-shard
.shard-docs-source-code-shard
`}
    />
  </SectionShard>
];
