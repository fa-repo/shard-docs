import React from "react";
import { render } from "react-dom";

import { MDXProvider } from "@mdx-js/react";

import ShardDocs from "@fa-repo/shard-docs";
import CodeBlock from "@fa-repo/shard-docs/dist/renderers/codeblock";

import "@fa-repo/shard-docs/dist/shard-docs.css";
import "@fa-repo/shard-docs/dist/shards/section.css";
import "@fa-repo/shard-docs/dist/shards/code-sample.css";

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

render(
  <MDXProvider components={components}>
    <ShardDocs
      title="ShardDocs"
      description="ShardDocs document organiser."
      source={[
        {
          title: "Essentials",
          folder: [
            { title: "Install", document: <h1>Install</h1> },
            { title: "Basic usage", document: <h1>Basic usage</h1> }
          ]
        },
        {
          title: "Examples",
          folder: [
            { title: "Use case A", document: <h1>Use case A</h1> },
            { title: "Use case B", document: <h1>Use case B</h1> }
          ]
        },
        { title: "Github", externalLink: "http://github.com" }
      ]}
    />
  </MDXProvider>,
  document.getElementById("root")
);
