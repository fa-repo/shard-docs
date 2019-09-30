import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Document from "../Document";
import Main from "../Main";
import Sidebar from "../Sidebar";
import fromSource from "../adapters/fromSource";
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

  get prevPage() {
    const { location } = this.props;
    const prevIndex = this.documents.findIndex(document => document.path === location.pathname) - 1;

    return this.documents[prevIndex];
  }

  get nextPage() {
    const { location } = this.props;
    const nextIndex = this.documents.findIndex(doc => doc.path === location.pathname) + 1;

    return this.documents[nextIndex];
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
      showSidebarFooter,
      ...props
    } = this.props;

    const documents = this.currentDocuments;

    return (
      <div {...props} className="shard-docs">
        <Sidebar
          title={title}
          description={description}
          basePath={basePath}
          activePath={this.props.location.pathname}
          source={this.state.source}
          showSidebarFooter={this.props.showSidebarFooter}
        />

        <Main prevPage={this.prevPage} nextPage={this.nextPage}>
          {documents.map((document, i) => (
            <Document key={i} breadcrumbs={document.breadcrumbs} document={document.document} />
          ))}
        </Main>
      </div>
    );
  }
}

ShardDocs.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.array,
  basePath: PropTypes.string,
  showSidebarFooter: PropTypes.bool
};

ShardDocs.defaultProps = {
  title: "",
  description: "",
  source: [],
  basePath: "/",
  showSidebarFooter: true
};

export default withRouter(ShardDocs);
