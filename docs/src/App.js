import React from "react";

import { Switch, Route, NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import ShardDocs from "@fa-repo/shard-docs";

import GetStartedPage from "./introduction/get-started";
import HelloWorldPage from "./examples/HelloWorld";
import SidebarDescriptionPage from "./examples/SidebarDescription";
import SidebarExternalLinkPage from "./examples/SidebarExternalLink";
import SidebarGroupsPage from "./examples/SidebarGroups";
import HideSidebarFooterPage from "./examples/HideSidebarFooter";
import CustomStylesPage from "./examples/CustomStyles";

import ExampleShardPage from "./shards/ExampleShard";
import MarkdownShardPage from "./shards/MarkdownShard";
import IframeShardPage from "./shards/IframeShard";
import SectionShardPage from "./shards/SectionShard";
import ShowcaseShardPage from "./shards/ShowcaseShard";
import SourceCodeShardPage from "./shards/SourceCodeShard";

import APIReferencePage from "./reference/APIReference";
import CSSReferencePage from "./reference/CSSReference";

import HelloWorldExample from "./examples/HelloWorld/example";
import SidebarDescriptionExample from "./examples/SidebarDescription/example";
import SidebarExternalLinkExample from "./examples/SidebarExternalLink/example";
import SidebarGroupsExample from "./examples/SidebarGroups/example";
import SidebarCustomStylesExample from "./examples/CustomStyles/example";
import HideSidebarFooterExample from "./examples/HideSidebarFooter/example";

import "./sanitize.css";
import "@fa-repo/shard-docs/dist/shard-docs.css";
import "@fa-repo/shard-docs/dist/shards/markdown-shard.css";
import "@fa-repo/shard-docs/dist/shards/iframe-shard.css";
import "@fa-repo/shard-docs/dist/shards/external-link.css";

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
                  { page: "Sidebar description", composition: SidebarDescriptionPage },
                  { page: "Sidebar external link", composition: SidebarExternalLinkPage },
                  { page: "Sidebar groups", composition: SidebarGroupsPage },
                  { page: "Hide sidebar footer", composition: HideSidebarFooterPage },
                  { page: "Custom styles", composition: CustomStylesPage }
                ]
              },
              {
                group: "Shards",
                pages: [
                  { page: "ExampleShard", composition: ExampleShardPage },
                  { page: "IframeShard", composition: IframeShardPage },
                  { page: "MarkdownShard", composition: MarkdownShardPage },
                  { page: "SectionShard", composition: SectionShardPage },
                  { page: "ShowcaseShard", composition: ShowcaseShardPage },
                  { page: "SourceCodeShard", composition: SourceCodeShardPage }
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
        <Route path="/examples/sidebar-description" children={<SidebarDescriptionExample />} />
        <Route path="/examples/sidebar-external-link" children={<SidebarExternalLinkExample />} />
        <Route path="/examples/sidebar-groups" children={<SidebarGroupsExample />} />
        <Route path="/examples/hide-sidebar-footer" children={<HideSidebarFooterExample />} />
        <Route path="/examples/custom-styles" children={<SidebarCustomStylesExample />} />
      </Switch>
    </>
  </HashRouter>
);

Docs.propTypes = {};
Docs.defaultProps = {};

export default Docs;
