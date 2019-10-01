import React from "react";

import { Switch, Route, NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import ScrollMemory from "react-router-scroll-memory";

import ShardDocs from "@fa-repo/shard-docs";

// Introduction
import getStarted from "./1-introduction-get-started";

// Examples
import helloWorld from "./2-examples-hello-world";
import sidebarStructure from "./2-examples-sidebar-structure";
import sidebarDescription from "./2-examples-sidebar-description";
import sidebarExternalLink from "./2-examples-sidebar-external-link";
import hideSidebarFooter from "./2-examples-hide-sidebar-footer";
import customStyles from "./2-examples-custom-styles";

// Shards
import markdownShard from "./3-shards-markdown";
import iframeShard from "./3-shards-iframe";
import sectionShard from "./3-shards-section";
import codeExampleShard from "./3-shards-code-example";

// Reference material
import apiReference from "./4-reference-api";
import cssReference from "./4-reference-css";

// Examples
import HelloWorldExample from "./examples/2-hello-world-a";
import SidebarDescriptionExample from "./examples/2-sidebar-description-a";
import SidebarExternalLinkExample from "./examples/2-sidebar-external-link-a";
import SidebarStructureBasicExample from "./examples/2-sidebar-structure-a";
import SidebarStructureGroupsExample from "./examples/2-sidebar-structure-b";
import SidebarStructureIndentationExample from "./examples/2-sidebar-structure-c";
import SidebarCustomStylesExample from "./examples/2-custom-styles-a";
import HideSidebarFooterExample from "./examples/2-hide-sidebar-footer-a";

// Styles
import "./sanitize.css";
import "@fa-repo/shard-docs/dist/shard-docs.css";
import "@fa-repo/shard-docs/dist/shards/markdown-shard.css";
import "@fa-repo/shard-docs/dist/shards/iframe-shard.css";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import "@fa-repo/shard-docs/dist/shards/code-example-shard.css";

/**
 * Docs
 */

const source = [
  { title: "Get started", document: getStarted },
  {
    title: "Examples",
    children: [
      { title: "Hello world", document: helloWorld },
      { title: "Sidebar structure", document: sidebarStructure },
      { title: "Sidebar description", document: sidebarDescription },
      { title: "Sidebar external link", document: sidebarExternalLink },
      { title: "Hide sidebar footer", document: hideSidebarFooter },
      { title: "Custom styles", document: customStyles }
    ]
  },
  {
    title: "Shards",
    children: [
      { title: "CodeExampleShard", document: codeExampleShard },
      { title: "IframeShard", document: iframeShard },
      { title: "MarkdownShard", document: markdownShard },
      { title: "SectionShard", document: sectionShard }
    ]
  },
  {
    title: "Reference",
    children: [
      { title: "API reference", document: apiReference },
      { title: "CSS reference", document: cssReference }
    ]
  },
  { title: "Github", externalLink: "http://github.com" }
];

const Docs = () => (
  <HashRouter>
    <>
      <ScrollMemory />
      <Route
        render={() => (
          <ShardDocs
            title="@fa-repo/shard-docs"
            description="A concise / extendable react component for handling documentation"
            source={source}
          />
        )}
      />

      <Switch>
        <Route path="/examples/hello-world" children={<HelloWorldExample />} />
        <Route
          path="/examples/sidebar-structure-basic"
          children={<SidebarStructureBasicExample />}
        />
        <Route
          path="/examples/sidebar-structure-groups"
          children={<SidebarStructureGroupsExample />}
        />
        <Route
          path="/examples/sidebar-structure-indentation"
          children={<SidebarStructureIndentationExample />}
        />
        <Route path="/examples/sidebar-description" children={<SidebarDescriptionExample />} />
        <Route path="/examples/sidebar-external-link" children={<SidebarExternalLinkExample />} />
        <Route path="/examples/hide-sidebar-footer" children={<HideSidebarFooterExample />} />
        <Route path="/examples/custom-styles" children={<SidebarCustomStylesExample />} />
      </Switch>
    </>
  </HashRouter>
);

Docs.propTypes = {};
Docs.defaultProps = {};

export default Docs;
