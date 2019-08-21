import React from "react";
import SectionShard from "@fa-repo/shard-docs/dist/shards/section-shard";
import CodeExampleShard from "@fa-repo/shard-docs/dist/shards/code-example-shard";

/**
 * Get started page
 */

const GetStartedPage = [
  <SectionShard title="Installation" persistState="35759">
    <CodeExampleShard lang="bash" noShadow sourceCode="npm install @fa-repo/shard-docs" />
  </SectionShard>,
  <SectionShard title="Dependencies" persistState="57226">
    <p>
      ShardDocs makes use of React Router V4. Ensure that an instance of this component is wrapped
      by a router provider further up the tree. Example:
    </p>
    <CodeExampleShard
      noShadow
      sourceCode={`import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <ShardDocs title="Documentation title" />
  </BrowserRouter>,
  document.getElementById("app")
);`}
    />
  </SectionShard>,
  <SectionShard title="Basic usage" persistState="33306">
    <CodeExampleShard
      noShadow
      sourceCode={`ReactDOM.render(
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
