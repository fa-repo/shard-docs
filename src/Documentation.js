import React from "react";
import PropTypes from "prop-types";

import slugify from "slugify";
import { withRouter } from "react-router-dom";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import Viewer from "./Viewer";
import ViewerFooter from "./ViewerFooter";

import CollectionIndexShard from "./shards/CollectionIndexShard";

import "./scss/shard-docs.scss";

/**
 * Documentation
 */

class Documentation extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  /* -- Lifecycle methods -- */

  /* -- Handler methods -- */

  /* -- Getter methods -- */

  /**
   * Parse structure property
   */
  get structure() {
    let structure = this.props.structure;
    const basePath = this.props.basePath;

    function transformHeading(item) {
      return { type: "heading", heading: item.heading };
    }

    function transformPage(item, basePath, breadcrumbs = []) {
      const path = basePath + "/" + slugify(item.title, { lower: true });
      return {
        type: "page",
        path: path,
        title: item.title,
        breadcrumbs: [...breadcrumbs, { text: item.title, link: path }],
        composition: item.composition
      };
    }

    function transformCollection(item, basePath, breadcrumbs = []) {
      const path = basePath + "/" + slugify(item.title, { lower: true });
      let composition = item.composition;

      return {
        type: "collection",
        path: path,
        title: item.title,
        breadcrumbs: [...breadcrumbs, { text: item.title, link: path }],
        composition: composition,
        children: mapCollection(item.children, path, breadcrumbs)
      };
    }

    function mapCollection(items, basePath, breadcrumbs = []) {
      basePath = basePath.replace(/\/+$/, "");

      return items
        .map(item => {
          if (item.type === "heading") {
            return transformHeading(item);
          } else if (item.type === "page") {
            return transformPage(item, basePath, breadcrumbs);
          } else if (item.type === "collection") {
            return transformCollection(item, basePath, breadcrumbs);
          } else return false;
        })
        .filter(Boolean);
    }

    structure = mapCollection(structure, basePath);

    return structure;
  }

  get docs() {
    let docs = [];

    function mapAndFlatten(items) {
      return items.map(item => {
        docs.push(item);
        if (item.type === "collection") mapAndFlatten(item.children);
      });
    }

    mapAndFlatten(this.structure);

    return docs.filter(item => ["collection", "page"].includes(item.type));
  }

  get prevDocument() {
    const docs = this.docs;
    const urlPath = this.props.location.pathname;
    const index = urlPath === this.props.basePath ? 0 : docs.findIndex(doc => doc.path === urlPath);
    if (index > 0) return docs[index - 1];
  }

  get nextDocument() {
    const docs = this.docs;
    const urlPath = this.props.location.pathname;
    const index = urlPath === this.props.basePath ? 0 : docs.findIndex(doc => doc.path === urlPath);
    if (index >= 0 && index < docs.length - 1) return docs[index + 1];
  }

  /* -- Action methods -- */

  /* -- Render methods -- */

  render() {
    const {
      title,
      description,
      baseDoc,
      baseLink,
      baseComposition,
      basePath,
      structure,
      staticContext,
      history,
      location,
      match,
      ...props
    } = this.props;

    const prevDocument = this.prevDocument;
    const nextDocument = this.nextDocument;

    const documents = this.docs;

    return (
      <div {...props} className="shard-docs">
        <div className="shard-docs-sidebar">
          <SidebarHeader title={title} description={description} basePath={basePath} />
          <SidebarMenu items={this.structure} />
        </div>

        <div className="shard-docs-main">
          {baseDoc && <Viewer route={baseLink} breadcrumbs={[]} markdown={baseDoc} />}

          {documents.map(({ title, path, breadcrumbs, composition, type, children }, i) => {
            /**
             * Provide a default index page to collection when composition not provided
             */
            if (type === "collection" && !composition) {
              composition = [<CollectionIndexShard title={title} pages={children} />];
            }

            return (
              <Viewer
                key={i}
                basePath={basePath}
                breadcrumbs={breadcrumbs}
                components={composition}
                route={i === 0 ? [path, basePath] : path}
              />
            );
          })}

          <ViewerFooter
            prevText={prevDocument && prevDocument.title}
            prevLink={prevDocument && prevDocument.path}
            nextText={nextDocument && nextDocument.title}
            nextLink={nextDocument && nextDocument.path}
          />
        </div>
      </div>
    );
  }
}

Documentation.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  structure: PropTypes.array,
  basePath: PropTypes.string
};

Documentation.defaultProps = {
  title: "",
  description: "",
  structure: [],
  basePath: "/docs"
};

export default withRouter(Documentation);
