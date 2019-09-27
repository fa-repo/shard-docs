import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Document.scss";
import "./prism.scss";

/**
 * Document
 */

const Document = ({ document }) => {
  const { breadcrumbs, composition = [] } = document;

  return (
    <article className="document">
      <ul className="breadcrumbs">
        {breadcrumbs.map(({ text, link }, i) => (
          <li key={i}>{link && <NavLink to={link}>{text}</NavLink>}</li>
        ))}
      </ul>
      <div className="content">{composition.map((component, i) => ({ ...component, key: i }))}</div>
    </article>
  );
};

Document.propTypes = {
  document: PropTypes.shape({
    breadcrumbs: PropTypes.array.isRequired,
    composition: PropTypes.array.isRequired
  })
};

Document.defaultProps = {
  document: {}
};

export default Document;
