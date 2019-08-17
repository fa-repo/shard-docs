import React from "react";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import SourceCodeShard from "@fa-repo/shard-docs/dist/shards/source-code-shard";
import "@fa-repo/shard-docs/dist/shards/source-code-shard.css";

/**
 * CSS reference
 */

export default [
  <SectionShard title="CSS classes">
    <SourceCodeShard
      lang="markdown"
      code={`.shard-docs

// Sidebar
.shard-docs-sidebar
.shard-docs-sidebar-header
.shard-docs-sidebar-heading
.shard-docs-sidebar-description
.shard-docs-sidebar-menu

// Viewer
.shard-docs-main
.shard-docs-breadcrumbs
.shard-docs-page-nav
.shard-docs-page-nav-next
.shard-docs-page-nav-spacer
.shard-docs-page-nav-prev

// Built in shards
.shard-docs-markdown-shard
.shard-docs-iframe-shard`}
    />
  </SectionShard>
];
