import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { breadcrumbTypes } from "../types";
import "./Breadcrumbs.scss";

/**
 * Breadcrumbs
 */

const Breadcrumbs = ({ breadcrumbs }) => (
  <nav className="shard-docs-breadcrumbs">
    <ol>
      {breadcrumbs.map(({ text, link, isActive }, i) => {
        const className = classnames(isActive && "active");

        return (
          <li key={i}>
            {
              <NavLink isActive={() => isActive} to={link}>
                {text}
              </NavLink>
            }
          </li>
        );
      })}
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
