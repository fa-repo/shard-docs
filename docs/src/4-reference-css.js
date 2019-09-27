import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";

/**
 * CSS reference
 */

const cssReference = `
~~~jsx
.shard-docs

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
~~~`;

export default [<MarkdownShard markdown={cssReference} />];
