import React from "react";
import PropTypes from "prop-types";
import { withRouter, HashRouter, BrowserRouter, Route } from "react-router-dom";
import Main from "../Main";
import Sidebar from "../Sidebar";
import fromSource from "../adapters/fromSource";
import { sourceTypes, breadcrumbTypes } from "../types";
import { setActiveTreeNode, filterDocuments, setActiveCrumb } from "../utils";
import "./sanitize.css";
import "./ShardDocs.scss";

/**
 * ShardDocs
 */

class ShardDocs extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    source: fromSource(this.props.source, this.props.basePath),
    tree: [],
    documents: []
  };

  componentDidMount() {
    const { tree, documents } = this.state.source;
    const path = this.props.location.pathname;

    this.setState({
      tree: setActiveTreeNode(tree, path),
      documents: filterDocuments(documents, path).map(document => setActiveCrumb(document, path))
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tree, documents } = this.state.source;
    const path = this.props.location.pathname;

    if (path !== prevProps.location.pathname) {
      this.setState({
        tree: setActiveTreeNode(tree, path),
        documents: filterDocuments(documents, path).map(document => setActiveCrumb(document, path))
      });
      window.scrollTo(0, 0);
    }
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
      basePath,
      source,
      staticContext,
      history,
      location,
      match,
      hideBuiltWithShardDocs,
      useBrowserRouter,
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
        <Main pagination={this.pagination} documents={this.state.documents} />
      </div>
    );
  }
}

ShardDocs.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  source: sourceTypes,
  basePath: PropTypes.string,
  hideBuiltWithShardDocs: PropTypes.bool,
  useBrowserRouter: PropTypes.bool
};

ShardDocs.defaultProps = {
  title: "",
  description: "",
  source: [],
  basePath: "/",
  hideBuiltWithShardDocs: false,
  useBrowserRouter: false
};

export default props => {
  const Router = props.useBrowserRouter ? BrowserRouter : HashRouter;
  return (
    <Router>
      <Route component={props2 => <ShardDocs {...{ ...props, ...props2 }} />} />
    </Router>
  );
};
