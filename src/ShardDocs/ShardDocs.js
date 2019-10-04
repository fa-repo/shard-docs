import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Main from "../Main";
import Sidebar from "../Sidebar";
import fromSource from "../adapters/fromSource";
import { sourceTypes } from "../types";
import "./ShardDocs.scss";

/**
 * ShardDocs
 */

class ShardDocs extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    source: fromSource(this.props.source, this.props.basePath)
  };

  get documents() {
    function flatten(items, accumulator = []) {
      for (const item of items) {
        if (item.type === "folder") {
          accumulator = flatten(item.children, accumulator);
        } else if (item.type === "document") {
          accumulator = [...accumulator, item];
        }
      }
      return accumulator;
    }

    return flatten(this.state.source);
  }

  get currentDocuments() {
    const { location } = this.props;

    return this.documents.filter(document => document.path.startsWith(location.pathname));
  }

  get pagination() {
    const location = this.props.location;
    const prevIndex = this.documents.findIndex(document => document.path === location.pathname) - 1;
    const nextIndex = this.documents.findIndex(doc => doc.path === location.pathname) + 1;
    const prevPage = this.documents[prevIndex];
    const nextPage = this.documents[nextIndex];
    const prev = prevPage && { text: prevPage.title, path: prevPage.path };
    const next = nextPage && { text: nextPage.title, path: nextPage.path };
    return { prev, next };
  }

  /* -- Action methods -- */

  /* -- Render methods -- */

  render() {
    const {
      title,
      description,
      baseLink,
      basePath,
      source,
      staticContext,
      history,
      location,
      match,
      hideBuiltWithShardDocs,
      ...props
    } = this.props;

    const app = {
      title,
      description,
      basePath,
      activePath: this.props.location.pathname
    };

    return (
      <div {...props} className="shard-docs">
        <Sidebar
          app={app}
          title={title}
          description={description}
          basePath={basePath}
          activePath={this.props.location.pathname}
          tree={this.state.source}
          hideBuiltWithShardDocs={this.props.hideBuiltWithShardDocs}
        />

        <Main pagination={this.pagination} documents={this.currentDocuments} />
      </div>
    );
  }
}

ShardDocs.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  source: sourceTypes,
  basePath: PropTypes.string,
  hideBuiltWithShardDocs: PropTypes.bool
};

ShardDocs.defaultProps = {
  title: "",
  description: "",
  source: [],
  basePath: "/",
  hideBuiltWithShardDocs: false
};

export default withRouter(ShardDocs);
