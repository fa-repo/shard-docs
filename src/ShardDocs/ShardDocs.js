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
   * Parse documentation tree
   */
  get tree() {
    let tree = this.props.tree;
    const basePath = this.props.basePath;
    const locationPath = this.props.location.pathname;
    let pageIndex = 0;
    let depth = 0;

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
            /* Provide a default index page if none provided */
            const { composition, title, pages } = group;
            if (!composition) {
              group.composition = [
                <IndexShard title={title} pages={pages.filter(page => page.type === "page")} />
              ];
            }
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

    return (
      <div {...props} className="shard-docs">
        <Sidebar
          title={title}
          description={description}
          basePath={basePath}
          tree={this.tree}
          showSidebarFooter={this.props.showSidebarFooter}
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
