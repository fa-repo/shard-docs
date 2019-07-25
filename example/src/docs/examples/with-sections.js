import React from "react";
import ShardDocs from "shard-docs";

/**
 * WithSectionsExample
 */

const WithSectionsExample = props => (
  <ShardDocs
    title="Documentation title"
    basePath="/examples/with-sections"
    baseComposition={[<h1>Overview</h1>]}
    structure={[
      {
        type: "collection",
        title: "Essentials",
        children: [
          {
            type: "page",
            title: "Get started",
            composition: [<h1>Get started</h1>]
          },
          {
            type: "page",
            title: "API",
            composition: [<h1>API</h1>]
          }
        ]
      }
    ]}
  />
);

WithSectionsExample.propTypes = {};
WithSectionsExample.defaultProps = {};

export default WithSectionsExample;
