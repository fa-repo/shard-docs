import React from "react";
import ShardDocs from "shard-docs";

/**
 * BasicExample
 */

const BasicExample = props => (
  // <ShardDocs
  //   title="BasicExample title"
  //   basePath="/examples/basic-example"
  //   structure={[
  //     { type: "heading", heading: "Essentials" },
  //     { type: "page", title: "Page A", composition: [<h1>Page A</h1>] },
  //     { type: "page", title: "Page B", composition: [<h1>Page B</h1>] },
  //     { type: "page", title: "Page C", composition: [<h1>Page C</h1>] }
  //   ]}
  // />
  <ShardDocs
    title="Documentation title"
    basePath="/examples/basic-example"
    structure={[
      { type: "heading", heading: "Essentials" },
      {
        type: "page",
        title: "Get started",
        composition: [
          <>
            <h1>Get started</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
              vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
              leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
              Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
              libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
              est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.
              Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
              sapien ornare nisl. Phasellus pede arcu, dapibus eu.
            </p>
          </>
        ]
      }
    ]}
  />
);

BasicExample.propTypes = {};
BasicExample.defaultProps = {};

export default BasicExample;

// ReactDOM.render(
//   <ShardDocs
//     title="Documentation title"
//     structure={[
//       { heading: "Essentials" },
//       { title: "Get started", shards: [ <h1>Get started</h1> ] }
//     ]}
//   />,
//     document.getElementById('app')
// );
