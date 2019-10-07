import React from "react";
import { MDXProvider } from "@mdx-js/react";

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
import SectionShard from "./3-shards-section.mdx";

// Reference material
import ApiReference from "./4-reference-api.mdx";
import CssReference from "./4-reference-css.mdx";

// Styles
import "./sanitize.css";
import "@fa-repo/shard-docs/dist/shard-docs.css";
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
  pre: props => {
    if (props?.children?.props?.mdxType === "code") {
      return props.children;
    } else {
      return <pre {...props} />;
    }
  },
  code: CodeBlock
};

const Docs = () => (
  <HashRouter>
    <MDXProvider components={components}>
      <>
        <ScrollMemory />
        <ShardDocs
          title="@fa-repo/shard-docs"
          description="A concise / extendable react component for handling documentation"
          source={source}
        />
      </>
    </MDXProvider>
  </HashRouter>
);

Docs.propTypes = {};
Docs.defaultProps = {};

export default Docs;
