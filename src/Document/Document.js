import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Document.scss";
import "./prism.scss";

/**
 * Document
 */

const Document = ({ document, breadcrumbs }) => {
  return (
    <article className="document">
      <ul className="breadcrumbs">
        {breadcrumbs.map(({ text, link }, i) => (
          <li key={i}>{link && <NavLink to={link}>{text}</NavLink>}</li>
        ))}
      </ul>
      <div className="content">{document.map((component, i) => ({ ...component, key: i }))}</div>
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
