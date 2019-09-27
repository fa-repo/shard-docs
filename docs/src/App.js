import React from "react";

import { Switch, Route, NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import ShardDocs from "@fa-repo/shard-docs";

// Introduction
import GetStartedPage from "./1-introduction-get-started";

// Examples
import HelloWorldPage from "./2-examples-hello-world";
import SidebarStructurePage from "./2-examples-sidebar-structure";
import SidebarDescriptionPage from "./2-examples-sidebar-description";
import SidebarExternalLinkPage from "./2-examples-sidebar-external-link";
import HideSidebarFooterPage from "./2-examples-hide-sidebar-footer";
import CustomStylesPage from "./2-examples-custom-styles";

// Shards
import MarkdownShardPage from "./3-shards-markdown";
import IframeShardPage from "./3-shards-iframe";
import SectionShardPage from "./3-shards-section";
import CodeExampleShardPage from "./3-shards-code-example";

// Reference material
import APIReferencePage from "./4-reference-api";
import CSSReferencePage from "./4-reference-css";

// Examples
import HelloWorldExample from "./examples/2-hello-world-a";
import SidebarDescriptionExample from "./examples/2-sidebar-description-a";
import SidebarExternalLinkExample from "./examples/2-sidebar-external-link-a";
import SidebarStructureBasicExample from "./examples/2-sidebar-structure-a";
import SidebarStructureGroupsExample from "./examples/2-sidebar-structure-b";
import SidebarStructureIndentationExample from "./examples/2-sidebar-structure-c";

import SidebarCustomStylesExample from "./examples/2-custom-styles-a";
import HideSidebarFooterExample from "./examples/2-hide-sidebar-footer-a";

import "./sanitize.css";
import "@fa-repo/shard-docs/dist/shard-docs.css";
import "@fa-repo/shard-docs/dist/shards/markdown-shard.css";
import "@fa-repo/shard-docs/dist/shards/iframe-shard.css";
import "@fa-repo/shard-docs/dist/shards/external-link.css";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import "@fa-repo/shard-docs/dist/shards/code-example-shard.css";

/**
 * Docs
 */

const Docs = () => (
  <HashRouter>
    <>
      <Route path="/" render={props => <NavLink to="/docs">Go to documentation</NavLink>} exact />
      <Route
        path="/docs"
        render={props => (
          <ShardDocs
            title="@fa-repo/shard-docs"
            description="A concise / extendable react component for handling documentation"
            basePath="/docs"
            tree={[
              { page: "Get started", composition: GetStartedPage },
              {
                group: "Examples",
                pages: [
                  { page: "Hello world", composition: HelloWorldPage },
                  { page: "Sidebar structure", composition: SidebarStructurePage },
                  { page: "Sidebar description", composition: SidebarDescriptionPage },
                  { page: "Sidebar external link", composition: SidebarExternalLinkPage },
                  { page: "Hide sidebar footer", composition: HideSidebarFooterPage },
                  { page: "Custom styles", composition: CustomStylesPage }
                ]
              },
              {
                group: "Shards",
                pages: [
                  { page: "CodeExampleShard", composition: CodeExampleShardPage },
                  { page: "IframeShard", composition: IframeShardPage },
                  { page: "MarkdownShard", composition: MarkdownShardPage },
                  { page: "SectionShard", composition: SectionShardPage }
                ]
              },
              {
                group: "Reference",
                pages: [
                  { page: "API reference", composition: APIReferencePage },
                  { page: "CSS reference", composition: CSSReferencePage }
                ]
              }
            ]}
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
