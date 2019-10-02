import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Breadcrumbs.scss";

/**
 * Breadcrumbs
 */

const Breadcrumbs = ({ breadcrumbs }) => (
  <nav className="breadcrumbs">
    <ol>
      {breadcrumbs.map(({ text, link }, i) => (
        <li key={i}>{link && <NavLink to={link}>{text}</NavLink>}</li>
      ))}
    </ol>
  </nav>
);

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired
};

Breadcrumbs.defaultProps = {
  breadcrumbs: []
};

export default Breadcrumbs;
