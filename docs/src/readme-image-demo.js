import React from "react";

import ShardDocs from "@fa-repo/shard-docs";

export default () => (
  <ShardDocs
    title="ShardDocs"
    description="ShardDocs document organiser."
    source={[
      {
        title: "Essentials",
        children: [
          {
            title: "Install",
            document: (
              <>
                <h1>Install</h1>
              </>
            )
          },
          {
            title: "Basic usage",
            document: (
              <>
                <h1>Basic usage</h1>
              </>
            )
          }
        ]
      },

      {
        title: "Examples",
        children: [
          {
            title: "Use case A",
            document: (
              <>
                <h1>Use case A</h1>
              </>
            )
          },
          {
            title: "Use case B",
            document: (
              <>
                <h1>Use case B</h1>
              </>
            )
          }
        ]
      },
      { title: "Github", externalLink: "https://github.com" }
    ]}
  />
);
