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
    <Route
      path={["/", "/shard-docs"]}
      render={props => <NavLink to="/shard-docs/documentation">Go to documentation</NavLink>}
      exact
    />
    <Route
      path="/shard-docs/documentation"
      render={props => (
        <ShardDocs
          title="ShardDocs"
          description="A concise / extendable react component for handling documentation"
          basePath="/shard-docs/documentation"
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
                    <IframeShard path="/shard-docs/examples/basic-example" />
                  ]
                },
                {
                  type: "page",
                  title: "With a description",
                  composition: [
                    <MarkdownShard markdown={raw("./docs/examples/with-description.md")} />,
                    <IframeShard path="/shard-docs/examples/with-description" />
                  ]
                },
                {
                  type: "page",
                  title: "With sidebar headings",
                  composition: [
                    <MarkdownShard markdown={raw("./docs/examples/with-sidebar-headings.md")} />,
                    <IframeShard path="/shard-docs/examples/with-sidebar-headings" />
                  ]
                },
                {
                  type: "page",
                  title: "With sections",
                  composition: [
                    <MarkdownShard markdown={raw("./docs/examples/with-sections.md")} />,
                    <IframeShard path="/shard-docs/examples/with-sections" />
                  ]
                },
                {
                  type: "page",
                  title: "With custom styles",
                  composition: [
                    <MarkdownShard markdown={raw("./docs/examples/with-custom-styles.md")} />,
                    <IframeShard path="/shard-docs/examples/with-custom-styles" />
                  ]
                }
              ]
            }
          ]}
        />
      )}
    />
    <Route
      path="/shard-docs/examples"
      render={props => (
        <Switch>
          <Route path="/shard-docs/examples/basic-example" children={<BasicExample />} />
          <Route
            path="/shard-docs/examples/with-description"
            children={<WithDescriptionExample />}
          />
          <Route
            path="/shard-docs/examples/with-sidebar-headings"
            children={<WithSidebarHeadingsExample />}
          />
          <Route path="/shard-docs/examples/with-sections" children={<WithSectionsExample />} />
          <Route
            path="/shard-docs/examples/with-custom-styles"
            children={<WithCustomStylesExample />}
          />
        </Switch>
      )}
    />
  </>
);

Documentation.propTypes = {};
Documentation.defaultProps = {};

export default Documentation;
