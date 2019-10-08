import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./HeaderTitle.scss";

/**
 * HeaderTitle
 */

const HeaderTitle = ({ title, path }) => {
  return (
    <NavLink to={path} className="shard-docs-header-title">
      <h2 title={title}>{title}</h2>
    </NavLink>
  );
};

HeaderTitle.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string
};

HeaderTitle.defaultProps = {
  title: "",
  path: "/"
};

export default HeaderTitle;
