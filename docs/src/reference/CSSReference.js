import React from "react";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import SourceCodeShard from "@fa-repo/shard-docs/dist/shards/source-code-shard";
import "@fa-repo/shard-docs/dist/shards/source-code-shard.css";

/**
 * CSS reference
 */

export default [
  <SectionShard title="CSS classes" persistState="49429">
    <SourceCodeShard
      lang="markdown"
      code={`.shard-docs

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
.shard-docs-showcase-shard
.shard-docs-source-code-shard
`}
    />
  </SectionShard>
];
