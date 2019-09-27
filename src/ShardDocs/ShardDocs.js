import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Document from "../Document";
import Main from "../Main";
import Sidebar from "../Sidebar";
import transform from "./transformers";
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
   * Parse documentation tree
   */
  get tree() {
    let tree = this.props.tree;
    const basePath = this.props.basePath;
    const locationPath = this.props.location.pathname;
    let pageIndex = 0;
    let depth = 0;

    /* Combine all top level adjacent groups into discrete groups. */

    let tree2 = [];
    tree.map((item, i) => {
      if (Boolean(item.page) || Boolean(item.external)) {
        const lastItem = tree2[tree2.length - 1] || {};

        if (lastItem._discrete_group === null) {
          tree2[tree2.length - 1].pages.push(item);
        } else {
          tree2[tree2.length] = { _discrete_group: null, pages: [item] };
        }
      } else {
        tree2.push(item);
      }
      return item;
    });

    tree = tree2.map(item => {
      if (item._discrete_group === null) {
        return { ...item, group: null };
      } else {
        return item;
      }
    });

    const transformTree = (items, basePath, breadcrumbs = [], depth = 0) => {
      basePath = basePath.replace(/\/+$/, "");

      return items
        .map(item => {
          const isExternal = Boolean(item.external);
          const isPage = Boolean(item.page);
          const isGroup = Boolean(item.group);
          const isDiscreteGroup = item.group === null;

          if (isExternal) {
            return transform.external(item, depth);
          }

          if (isGroup) {
            const group = transform.group(item, basePath, breadcrumbs, depth);
            const { path, breadcrumbs } = group;
            group.pages = transformTree(item.pages, path, breadcrumbs, depth + 1);
            group.isActive = pageIndex === 0 && basePath === locationPath && "active";
            return group;
          }

          if (isDiscreteGroup) {
            const group = transform.discreteGroup(item, basePath, breadcrumbs, depth);
            const { path, breadcrumbs } = group;
            group.pages = transformTree(item.pages, path, breadcrumbs, depth + 1);
            return group;
          }

          if (isPage) {
            let page = transform.page(item, basePath, breadcrumbs, depth);
            page.pageIndex = pageIndex;
            pageIndex = pageIndex + 1;
            page.isActive = pageIndex === 0 && basePath === locationPath && "active";
            return page;
          }

          return null;
        })
        .filter(Boolean);
    };

    return transformTree(tree, basePath);
  }

  get pages() {
    let pages = [];

    function mapAndFlatten(items) {
      return items.map(item => {
        pages.push(item);
        if (item.type === "group") mapAndFlatten(item.pages);
        else if (item.type === "discrete-group") mapAndFlatten(item.pages);
      });
    }

    mapAndFlatten(this.tree);

    return pages.filter(item => ["group", "page"].includes(item.type));
  }

  get documents() {
    const urlPath = this.props.location.pathname;

    return this.pages
      .filter(page => page.type === "page" && page.path.startsWith(urlPath))
      .map(document => {
        document.breadcrumbs = [{ link: this.props.basePath, text: "~" }, ...document.breadcrumbs];
        return document;
      });
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
      tree,
      staticContext,
      history,
      location,
      match,
      showSidebarFooter,
      ...props
    } = this.props;

    const documents = this.documents;

    return (
      <div {...props} className="shard-docs">
        <Sidebar
          title={title}
          description={description}
          basePath={basePath}
          tree={this.tree}
          showSidebarFooter={this.props.showSidebarFooter}
        />

        <Main prevPage={this.prevPage} nextPage={this.nextPage}>
          {documents.map((document, i) => (
            <Document key={i} document={document} />
          ))}
        </Main>
      </div>
    );
  }
}

ShardDocs.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tree: PropTypes.array,
  basePath: PropTypes.string,
  showSidebarFooter: PropTypes.bool
};

ShardDocs.defaultProps = {
  title: "",
  description: "",
  tree: [],
  basePath: "/",
  showSidebarFooter: true
};

export default withRouter(ShardDocs);
