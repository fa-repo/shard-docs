import React from "react";
import { MDXProvider } from "@mdx-js/react";

import { Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import ScrollMemory from "react-router-scroll-memory";
import CodeBlock from "@fa-repo/shard-docs/dist/renderers/codeblock";

import ShardDocs from "@fa-repo/shard-docs";

// Introduction
import GetStarted from "./1-introduction-get-started.mdx";

// Examples
import HelloWorld from "./2-examples-hello-world.mdx";
import SidebarStructure from "./2-examples-sidebar-structure.mdx";
import SidebarDescription from "./2-examples-sidebar-description.mdx";
import SidebarExternalLink from "./2-examples-sidebar-external-link.mdx";
import HideSidebarFooter from "./2-examples-hide-sidebar-footer.mdx";
import CustomStyles from "./2-examples-custom-styles.mdx";

// Shards
import CodeExampleShard from "./3-shards-code-example.mdx";
import IframeShard from "./3-shards-iframe.mdx";
import SectionShard from "./3-shards-section.mdx";

// Reference material
import ApiReference from "./4-reference-api.mdx";
import CssReference from "./4-reference-css.mdx";

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
import "@fa-repo/shard-docs/dist/shards/iframe-shard.css";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import "@fa-repo/shard-docs/dist/shards/code-example-shard.css";

/**
 * Docs
 */

const source = [
  { title: "Get started", document: <GetStarted /> },
  {
    title: "Examples",
    children: [
      { title: "Hello world", document: <HelloWorld /> },
      { title: "Sidebar structure", document: <SidebarStructure /> },
      { title: "Sidebar description", document: <SidebarDescription /> },
      { title: "Sidebar external link", document: <SidebarExternalLink /> },
      { title: "Hide sidebar footer", document: <HideSidebarFooter /> },
      { title: "Custom styles", document: <CustomStyles /> }
    ]
  },
  {
    title: "Shards",
    children: [
      { title: "CodeExampleShard", document: <CodeExampleShard /> },
      { title: "IframeShard", document: <IframeShard /> },
      { title: "SectionShard", document: <SectionShard /> }
    ]
  },
  {
    title: "Reference",
    children: [
      { title: "API reference", document: <ApiReference /> },
      { title: "CSS reference", document: <CssReference /> }
    ]
  },
  { title: "Github", externalLink: "http://github.com" }
];

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
};

const Docs = () => (
  <HashRouter>
    <MDXProvider components={components}>
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
    </MDXProvider>
  </HashRouter>
);

Docs.propTypes = {};
Docs.defaultProps = {};

export default Docs;
