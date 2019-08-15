import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import IndexShard from "../shards/CollectionIndexShard";
import transform from "../transformers";
import "./ShardDocs.scss";

/**
 * ShardDocs
 */

class ShardDocs extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  /* -- Lifecycle methods -- */

  /* -- Handler methods -- */

  /* -- Getter methods -- */

  /**
   * Build skeleton of documentation
   */
  get skeleton() {
    let structure = this.props.structure;
    const basePath = this.props.basePath;
    let pageIndex = 0;

    function transformStructure(items, basePath, breadcrumbs = []) {
      basePath = basePath.replace(/\/+$/, "");

      return items
        .map(item => {
          if (item.type === "heading") {
            return transform.heading(item);
          } else if (item.type === "external") {
            return transform.external(item);
          } else if (item.type === "page") {
            let page = transform.page(item, basePath, breadcrumbs);
            page.pageIndex = pageIndex;
            pageIndex = pageIndex + 1;
            return page;
          } else if (item.type === "collection") {
            const collection = transform.collection(item, basePath, breadcrumbs);
            const { path, breadcrumbs } = collection;
            collection.children = transformStructure(item.children, path, breadcrumbs);
            /* Provide a default index page if none provided */
            const { composition, title, children } = collection;
            if (!composition) {
              collection.composition = [<IndexShard title={title} pages={children} />];
            }
            return collection;
          } else return false;
        })
        .filter(Boolean);
    }

    return transformStructure(structure, basePath);
  }

  get pages() {
    let pages = [];

    function mapAndFlatten(items) {
      return items.map(item => {
        pages.push(item);
        if (item.type === "collection") mapAndFlatten(item.children);
      });
    }

    mapAndFlatten(this.skeleton);

    return pages.filter(item => ["collection", "page"].includes(item.type));
  }

  get currentPage() {
    const pages = this.pages;
    const urlPath = this.props.location.pathname;
    const index =
      urlPath === this.props.basePath ? 0 : pages.findIndex(doc => doc.path === urlPath);
    if (index >= 0 && pages[index]) return pages[index];
    else return {};
  }

  get prevPage() {
    const pages = this.pages;
    const urlPath = this.props.location.pathname;
    const index =
      urlPath === this.props.basePath ? 0 : pages.findIndex(doc => doc.path === urlPath);
    if (index > 0) return pages[index - 1];
  }

  get nextPage() {
    const pages = this.pages;
    const urlPath = this.props.location.pathname;
    const index =
      urlPath === this.props.basePath ? 0 : pages.findIndex(doc => doc.path === urlPath);
    if (index >= 0 && index < pages.length - 1) return pages[index + 1];
  }

  /* -- Action methods -- */

  /* -- Render methods -- */

  render() {
    const {
      title,
      description,
      baseLink,
      basePath,
      structure,
      staticContext,
      history,
      location,
      match,
      ...props
    } = this.props;

    return (
      <div {...props} className="shard-docs">
        <Sidebar
          title={title}
          description={description}
          basePath={basePath}
          skeleton={this.skeleton}
        />

        <div className="shard-docs-main">
          <Breadcrumbs breadcrumbs={(this.currentPage && this.currentPage.breadcrumbs) || []} />

          <div className="shard-docs-document">
            {(this.currentPage.composition || []).map((component, i) => {
              return { ...component, key: i };
            })}
          </div>

          <Footer
            prevText={this.prevPage && this.prevPage.title}
            prevLink={this.prevPage && this.prevPage.path}
            nextText={this.nextPage && this.nextPage.title}
            nextLink={this.nextPage && this.nextPage.path}
          />
        </div>
      </div>
    );
  }
}

ShardDocs.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  structure: PropTypes.array,
  basePath: PropTypes.string
};

ShardDocs.defaultProps = {
  title: "",
  description: "",
  structure: [],
  basePath: "/docs"
};

export default withRouter(ShardDocs);
