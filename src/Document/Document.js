import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "../Breadcrumbs";
import { breadcrumbTypes } from "../types";

import "./github.css";
import "./document.scss";

/**
 * Document
 */

const Document = ({ document, breadcrumbs }) => {
  return (
    <article className="shard-docs-document">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="shard-docs-document-body markdown-body">{document}</div>
    </article>
  );
};

Document.propTypes = {
  breadcrumbs: PropTypes.arrayOf(breadcrumbTypes).isRequired,
  document: PropTypes.element
};

Document.defaultProps = {
  breadcrumbs: [],
  document: null
};

export default Document;
