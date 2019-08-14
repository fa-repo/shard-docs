import React from "react";

import { Switch, Route, NavLink } from "react-router-dom";

import ShardDocs from "@fa-repo/shard-docs";

import GetStartedPage from "../01GetStarted";
import APIReferencePage from "../02APIReference";
import CSSReferencePage from "../03CSSReference";
import HelloWorldPage from "../04ExamplesHelloWorld";
import WithADescriptionPage from "../05ExamplesWithADescription";
import WithSidebarHeadingsPage from "../06ExamplesWithSidebarHeadings";
import WithExternalLinkPage from "../07ExamplesWithExternalLink";
import WithSectionsPage from "../08ExamplesWithSections";
import WithCustomStylesPage from "../09ExamplesWithCustomStyles";

import HelloWorldExample from "../04ExamplesHelloWorld/example";
import WithDescriptionExample from "../05ExamplesWithADescription/example";
import WithSidebarHeadingsExample from "../06ExamplesWithSidebarHeadings/example";
import WithSidebarExternalLinkExample from "../07ExamplesWithExternalLink/example";
import WithSectionsExample from "../08ExamplesWithSections/example";
import WithCustomStylesExample from "../09ExamplesWithCustomStyles/example";

import "./sanitize.css";
import "@fa-repo/shard-docs/dist/shard-docs.css";
import "@fa-repo/shard-docs/dist/shards/markdown-shard.css";
import "@fa-repo/shard-docs/dist/shards/iframe-shard.css";

/**
 * ShardDocs
 */

const Documentation = props => (
  <>
    <Route path="/" render={props => <NavLink to="/docs">Go to documentation</NavLink>} exact />
    <Route
      path="/docs"
      render={props => (
        <ShardDocs
          title="shard-docs"
          description="A concise / extendable react component for handling documentation"
          basePath="/docs"
          structure={[
            { type: "page", title: "Get started", composition: GetStartedPage },
            { type: "page", title: "API reference", composition: APIReferencePage },
            { type: "page", title: "CSS reference", composition: CSSReferencePage },
            {
              type: "collection",
              title: "Examples",
              children: [
                { type: "page", title: "Hello world", composition: HelloWorldPage },
                { type: "page", title: "With a description", composition: WithADescriptionPage },
                {
                  type: "page",
                  title: "With sidebar headings",
                  composition: WithSidebarHeadingsPage
                },
                {
                  type: "page",
                  title: "With sidebar external link",
                  composition: WithExternalLinkPage
                },
                { type: "page", title: "With sections", composition: WithSectionsPage },
                { type: "page", title: "With custom styles", composition: WithCustomStylesPage }
              ]
            }
          ]}
        />
      )}
    />

    <Switch>
      <Route path="/examples/hello-world" children={<HelloWorldExample />} />
      <Route path="/examples/with-description" children={<WithDescriptionExample />} />
      <Route path="/examples/with-sidebar-headings" children={<WithSidebarHeadingsExample />} />
      <Route
        path="/examples/with-sidebar-external-link"
        children={<WithSidebarExternalLinkExample />}
      />
      <Route path="/examples/with-sections" children={<WithSectionsExample />} />
      <Route path="/examples/with-custom-styles" children={<WithCustomStylesExample />} />
    </Switch>
  </>
);

Documentation.propTypes = {};
Documentation.defaultProps = {};

export default Documentation;
