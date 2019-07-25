import React from "react";
import ShardDocs from "shard-docs";

/**
 * WithDescriptionExample
 */

const WithDescriptionExample = props => (
  <ShardDocs
    title="WithDescriptionExample title"
    description="A description describing your documentation"
    basePath="/examples/with-description"
    baseComposition={[<h1>Overview</h1>]}
    structure={[
      { type: "heading", heading: "Essentials" },
      { type: "page", title: "Get started", shards: [<h1>Get started</h1>] }
    ]}
  />
);

WithDescriptionExample.propTypes = {};
WithDescriptionExample.defaultProps = {};

export default WithDescriptionExample;
