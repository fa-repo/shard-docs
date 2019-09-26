import React from "react";

import { Switch, Route, NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import ShardDocs from "@fa-repo/shard-docs";

import GetStartedPage from "./1-introduction-get-started";
import HelloWorldPage from "./examples/HelloWorld";
import SidebarDescriptionPage from "./examples/SidebarDescription";
import SidebarExternalLinkPage from "./examples/SidebarExternalLink";
import SidebarStructurePage from "./examples/SidebarStructure";
import HideSidebarFooterPage from "./examples/HideSidebarFooter";
import CustomStylesPage from "./examples/CustomStyles";

import MarkdownShardPage from "./shards/markdown-shard";
import IframeShardPage from "./shards/iframe-shard";
import SectionShardPage from "./shards/section-shard";
import CodeExampleShardPage from "./shards/code-example-shard";

import APIReferencePage from "./reference/APIReference";
import CSSReferencePage from "./reference/CSSReference";

import HelloWorldExample from "./examples/HelloWorld/example";
import SidebarDescriptionExample from "./examples/SidebarDescription/example";
import SidebarExternalLinkExample from "./examples/SidebarExternalLink/example";
import SidebarStructureBasicExample from "./examples/SidebarStructure/BasicExample";
import SidebarStructureGroupsExample from "./examples/SidebarStructure/GroupsExample";
import SidebarStructureIndentationExample from "./examples/SidebarStructure/IndentationExample";

import SidebarCustomStylesExample from "./examples/CustomStyles/example";
import HideSidebarFooterExample from "./examples/HideSidebarFooter/example";

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
