import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "../Breadcrumbs";
import "./Document.scss";
import "./prism.scss";

/**
 * Document
 */

const Document = ({ document, breadcrumbs }) => {
  document = document.map((component, i) => ({ ...component, key: i }));
  return (
    <article className="document">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="document-body">{document}</div>
    </article>
  );
};

Document.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  document: PropTypes.array.isRequired
};

Document.defaultProps = {
  breadcrumbs: [],
  document: []
};

export default Document;
