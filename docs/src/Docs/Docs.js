import React from "react";

import { Switch, Route, NavLink } from "react-router-dom";

import ShardDocs from "@fa-repo/shard-docs";

import GetStartedPage from "../introduction/GetStarted";
import HelloWorldPage from "../examples/HelloWorld";
import SidebarDescriptionPage from "../examples/SidebarDescription";
import SidebarHeadingsPage from "../examples/SidebarHeadings";
import SidebarExternalLinkPage from "../examples/SidebarExternalLink";
import SidebarSectionsPage from "../examples/SidebarSections";
import CustomStylesPage from "../examples/CustomStyles";

import MarkdownShardPage from "../shards/MarkdownShard";
import IframeShardPage from "../shards/IframeShard";
import ShowcaseShardPage from "../shards/ShowcaseShard";

import APIReferencePage from "../reference/APIReference";
import CSSReferencePage from "../reference/CSSReference";

import HelloWorldExample from "../examples/HelloWorld/example";
import SidebarDescriptionExample from "../examples/SidebarDescription/example";
import SidebarHeadingsExample from "../examples/SidebarHeadings/example";
import SidebarExternalLinkExample from "../examples/SidebarExternalLink/example";
import SidebarSectionsExample from "../examples/SidebarSections/example";
import SidebarCustomStylesExample from "../examples/CustomStyles/example";

import "./sanitize.css";
import "@fa-repo/shard-docs/dist/shard-docs.css";
import "@fa-repo/shard-docs/dist/shards/markdown-shard.css";
import "@fa-repo/shard-docs/dist/shards/iframe-shard.css";
import "@fa-repo/shard-docs/dist/shards/external-link.css";

/**
 * Docs
 */

const Docs = props => (
  <>
    <Route path="/" render={props => <NavLink to="/docs">Go to documentation</NavLink>} exact />
    <Route
      path="/docs"
      render={props => (
        <ShardDocs
          title="@fa-repo/shard-docs"
          description="A concise / extendable react component for handling documentation"
          basePath="/docs"
          structure={[
            { type: "page", title: "Get started", composition: GetStartedPage },
            { type: "heading", heading: "Examples" },
            { type: "page", title: "Hello world", composition: HelloWorldPage },
            { type: "page", title: "Sidebar description", composition: SidebarDescriptionPage },
            { type: "page", title: "Sidebar headings", composition: SidebarHeadingsPage },
            { type: "page", title: "Sidebar external link", composition: SidebarExternalLinkPage },
            { type: "page", title: "Sidebar sections", composition: SidebarSectionsPage },
            { type: "page", title: "Custom styles", composition: CustomStylesPage },
            { type: "heading", heading: "Shards" },
            { type: "page", title: "IframeShard", composition: IframeShardPage },
            { type: "page", title: "MarkdownShard", composition: MarkdownShardPage },
            { type: "page", title: "ShowcaseShard", composition: ShowcaseShardPage },
            { type: "heading", heading: "Reference" },
            { type: "page", title: "API reference", composition: APIReferencePage },
            { type: "page", title: "CSS reference", composition: CSSReferencePage }
          ]}
        />
      )}
    />

    <Switch>
      <Route path="/examples/hello-world" children={<HelloWorldExample />} />
      <Route path="/examples/sidebar-description" children={<SidebarDescriptionExample />} />
      <Route path="/examples/sidebar-headings" children={<SidebarHeadingsExample />} />
      <Route path="/examples/sidebar-external-link" children={<SidebarExternalLinkExample />} />
      <Route path="/examples/sidebar-sections" children={<SidebarSectionsExample />} />
      <Route path="/examples/custom-styles" children={<SidebarCustomStylesExample />} />
    </Switch>
  </>
);

Docs.propTypes = {};
Docs.defaultProps = {};

export default Docs;
