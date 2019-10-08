import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { breadcrumbTypes } from "../types";
import "./Breadcrumbs.scss";

/**
 * Breadcrumbs
 */

const Breadcrumbs = ({ breadcrumbs }) => (
  <nav className="shard-docs-breadcrumbs">
    <ol>
      {breadcrumbs.map(({ text, link }, i) => (
        <li key={i}>{<NavLink to={link}>{text}</NavLink>}</li>
      ))}
    </ol>
  </nav>
);

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(breadcrumbTypes).isRequired
};

Breadcrumbs.defaultProps = {
  breadcrumbs: []
};

export default Breadcrumbs;
