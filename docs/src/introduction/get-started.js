import React from "react";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import SourceCodeShard from "@fa-repo/shard-docs/dist/shards/source-code-shard";
import "@fa-repo/shard-docs/dist/shards/source-code-shard.css";
import "@fa-repo/shard-docs/dist/shards/section-shard.css";

/**
 * Get started page
 */

const GetStartedPage = [
  <SectionShard title="Installation">
    <SourceCodeShard lang="bash" code="npm install @fa-repo/shard-docs" />
  </SectionShard>,
  <SectionShard title="Dependencies">
    <p>
      ShardDocs makes use of React Router V4. Ensure that an instance of this component is wrapped
      by a router provider further up the tree. Example:
    </p>
    <SourceCodeShard
      lang="jsx"
      code={`import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <ShardDocs title="Documentation title" />
  </BrowserRouter>,
  document.getElementById("app")
);`}
    />
  </SectionShard>,
  <SectionShard title="Basic usage">
    <SourceCodeShard
      lang="jsx"
      code={`ReactDOM.render(
  <ShardDocs
    title="Documentation title"
    structure={[
      { heading: "Essentials" },
      { title: "Get started", shards: [ <h1>Get started</h1> ] }
    ]}
  />,
    document.getElementById('app')
);`}
    />
  </SectionShard>
];

GetStartedPage.propTypes = {};
GetStartedPage.defaultProps = {};

export default GetStartedPage;
