import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import "./Breadcrumbs.scss";

/**
 * Breadcrumbs
 */

const Breadcrumbs = ({ breadcrumbs = [] }) => {
  return (
    <ul className="shard-docs-breadcrumbs">
      {breadcrumbs.map(({ text, link }, i) => {
        return (
          <li key={i}>
            {link && (
              <NavLink className={classnames(breadcrumbs.length === 1 && "active")} to={link}>
                {text}
              </NavLink>
            )}
            {!link && text}
          </li>
        );
      })}
    </ul>
  );
};

Breadcrumbs.propTypes = {};
Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
