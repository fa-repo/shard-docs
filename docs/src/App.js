import React from "react";
import { MDXProvider } from "@mdx-js/react";

import { HashRouter } from "react-router-dom";
import ScrollMemory from "react-router-scroll-memory";
import CodeBlock from "@fa-repo/shard-docs/dist/renderers/codeblock";

import ShardDocs from "@fa-repo/shard-docs";

import "@fa-repo/shard-docs/dist/shard-docs.css";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";
import "@fa-repo/shard-docs/dist/shards/code-example-shard.css";

// Essentials
import GetStarted from "./1-essentials-get-started.mdx";
import ApiReference from "./1-reference-api.mdx";
import SchemaReference from "./1-source-schema.mdx";

// Examples
import HelloWorld from "./2-examples-hello-world.mdx";

// Shards
import CodeExampleShard from "./3-shards-code-example.mdx";
import SectionShard from "./3-shards-section.mdx";

/**
 * Docs
 */

const source = [
  {
    title: "Essentials",
    children: [
      { title: "Get started", document: <GetStarted /> },
      { title: "API", document: <ApiReference /> },
      { title: "Source schema", document: <SchemaReference /> }
    ]
  },
  {
    title: "Examples",
    children: [{ title: "Hello world", document: <HelloWorld /> }]
  },
  {
    title: "Shards",
    children: [
      { title: "CodeExampleShard", document: <CodeExampleShard /> },
      { title: "SectionShard", document: <SectionShard /> }
    ]
  },
  { title: "Github", externalLink: "http://github.com/fa-repo/shard-docs" }
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
