import React from "react";
import ShardDocs from "@fa-repo/shard-docs";

/**
 * WithDescriptionExample
 */

const WithDescriptionExample = props => (
  <ShardDocs
    title="WithDescriptionExample title"
    description="A description describing your documentation"
    basePath="/examples/with-description"
    structure={[
      { type: "heading", heading: "Essentials" },
      { type: "page", title: "Get started", composition: [<h1>Get started</h1>] }
    ]}
  />
);

WithDescriptionExample.propTypes = {};
WithDescriptionExample.defaultProps = {};

export default WithDescriptionExample;
