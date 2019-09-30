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
    source: fromSource(this.props.source, this.props.basePath, this.props.location.pathname)
  };

  /* -- Lifecycle methods -- */

  /* -- Handler methods -- */

  /* -- Getter methods -- */

  get documents() {
    let documents = [];

    function mapAndFlatten(items) {
      return items.map(item => {
        documents.push(item);
        if (item.type === "folder") mapAndFlatten(item.children);
      });
    }

    mapAndFlatten(this.state.source);

    return documents.filter(item => ["document"].includes(item.type));
  }

  get showDocuments() {
    const urlPath = this.props.location.pathname;

    return this.documents
      .filter(document => document.type === "document" && document.path.startsWith(urlPath))
      .map(document => {
        return {
          ...document,
          breadcrumbs: [{ link: this.props.basePath, text: "~" }, ...document.breadcrumbs]
        };
      });
  }

  get currentDocument() {
    const documents = this.documents;
    const urlPath = this.props.location.pathname;
    const index =
      urlPath === this.props.basePath ? 0 : documents.findIndex(doc => doc.path === urlPath);

    if (index >= 0 && documents[index]) return documents[index];
    else return {};
  }

  get prevDocument() {
    const documents = this.documents;
    const urlPath = this.props.location.pathname;
    const index =
      urlPath === this.props.basePath ? 0 : documents.findIndex(doc => doc.path === urlPath);
    if (index > 0) return documents[index - 1];
  }

  get nextDocument() {
    const documents = this.documents;
    const urlPath = this.props.location.pathname;
    const index =
      urlPath === this.props.basePath ? 0 : documents.findIndex(doc => doc.path === urlPath);
    if (index >= 0 && index < documents.length - 1) return documents[index + 1];
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

    const documents = this.showDocuments;

    return (
      <div {...props} className="shard-docs">
        <Sidebar
          title={title}
          description={description}
          basePath={basePath}
          activePath={this.props.location.pathname}
          tree={this.state.source}
          showSidebarFooter={this.props.showSidebarFooter}
        />

        <Main prevDocument={this.prevDocument} nextDocument={this.nextDocument}>
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
