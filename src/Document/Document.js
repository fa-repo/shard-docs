import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "../Breadcrumbs";
import { breadcrumbTypes } from "../types";

import "./Document.scss";
import "./prism.scss";

/**
 * Document
 */

const Document = ({ document, breadcrumbs }) => {
  return (
    <article className="shard-docs-document">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="shard-docs-document-body">{document}</div>
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
