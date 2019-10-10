import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Main from "../Main";
import Sidebar from "../Sidebar";
import fromSource from "../adapters/fromSource";
import { sourceTypes } from "../types";
import { setActiveTreeNode } from "../utils";
import "./sanitize.css";
import "./ShardDocs.scss";

/**
 * ShardDocs
 */

class ShardDocs extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    tree: [],
    documents: []
  };

  constructor(props) {
    super(props);

    let { tree, documents } = fromSource(this.props.source, this.props.basePath);
    tree = setActiveTreeNode(tree, this.props.location.pathname);

    this.state = { tree, documents };
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;

    if (location.pathname !== prevProps.location.pathname) {
      this.setState({ tree: setActiveTreeNode(this.state.tree, location.pathname) });
      window.scrollTo(0, 0);
    }
  }

  get showDocuments() {
    const { location } = this.props;

    return this.state.documents.filter(document => document.path.startsWith(location.pathname));
  }

  get pagination() {
    const location = this.props.location;
    const prevIndex =
      this.state.documents.findIndex(document => document.path === location.pathname) - 1;
    const nextIndex = this.state.documents.findIndex(doc => doc.path === location.pathname) + 1;
    const prevPage = this.state.documents[prevIndex];
    const nextPage = this.state.documents[nextIndex];
    const prev = prevPage && { text: prevPage.title, path: prevPage.path };
    const next = nextPage && { text: nextPage.title, path: nextPage.path };
    return { prev, next };
  }

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
          tree={this.state.tree}
          hideBuiltWithShardDocs={this.props.hideBuiltWithShardDocs}
        />

        <Main pagination={this.pagination} documents={this.showDocuments} />
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
