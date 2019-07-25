import React from "react";

import { Switch, Route, NavLink } from "react-router-dom";
import raw from "raw.macro";
import ShardDocs, { MarkdownShard, IframeShard } from "shard-docs";

import BasicExample from "./docs/examples/basic-example";
import WithDescriptionExample from "./docs/examples/with-description";
import WithSectionsExample from "./docs/examples/with-sections";
import WithSidebarHeadingsExample from "./docs/examples/with-sidebar-headings";
import WithCustomStylesExample from "./docs/examples/with-custom-styles";

import "./sanitize.css";
import "shard-docs/dist/shard-docs.css";

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
            {
              type: "page",
              title: "Get started",
              composition: [<MarkdownShard markdown={raw("./docs/get-started.md")} />]
            },
            {
              type: "page",
              title: "API reference",
              composition: [<MarkdownShard markdown={raw("./docs/api-reference.md")} />]
            },
            {
              type: "page",
              title: "CSS reference",
              composition: [<MarkdownShard markdown={raw("./docs/css-reference.md")} />]
            },
            {
              type: "collection",
              title: "Examples",
              children: [
                {
                  type: "page",
                  title: "Basic example",
                  composition: [
                    <MarkdownShard markdown={raw("./docs/examples/basic-example.md")} />,
                    <IframeShard path="#/examples/basic-example" />
                  ]
                },
                {
                  type: "page",
                  title: "With a description",
                  composition: [
                    <MarkdownShard markdown={raw("./docs/examples/with-description.md")} />,
                    <IframeShard path="#/examples/with-description" />
                  ]
                },
                {
                  type: "page",
                  title: "With sidebar headings",
                  composition: [
                    <MarkdownShard markdown={raw("./docs/examples/with-sidebar-headings.md")} />,
                    <IframeShard path="#/examples/with-sidebar-headings" />
                  ]
                },
                {
                  type: "page",
                  title: "With sections",
                  composition: [
                    <MarkdownShard markdown={raw("./docs/examples/with-sections.md")} />,
                    <IframeShard path="#/examples/with-sections" />
                  ]
                },
                {
                  type: "page",
                  title: "With custom styles",
                  composition: [
                    <MarkdownShard markdown={raw("./docs/examples/with-custom-styles.md")} />,
                    <IframeShard path="#/examples/with-custom-styles" />
                  ]
                }
              ]
            }
          ]}
        />
      )}
    />
    <Route
      path="/examples"
      render={props => (
        <Switch>
          <Route path="/examples/basic-example" children={<BasicExample />} />
          <Route path="/examples/with-description" children={<WithDescriptionExample />} />
          <Route path="/examples/with-sidebar-headings" children={<WithSidebarHeadingsExample />} />
          <Route path="/examples/with-sections" children={<WithSectionsExample />} />
          <Route path="/examples/with-custom-styles" children={<WithCustomStylesExample />} />
        </Switch>
      )}
    />
  </>
);

Documentation.propTypes = {};
Documentation.defaultProps = {};

export default Documentation;
