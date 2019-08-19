import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./SidebarHeader.scss";

/**
 * SidebarHeader
 */

const SidebarHeader = ({ title, basePath, ...props }) => {
  return (
    <header className="shard-docs-sidebar-header" {...props}>
      {title && (
        <NavLink to={basePath}>
          <h2 className="shard-docs-sidebar-heading" title={title}>
            {title}
          </h2>
        </NavLink>
      )}
    </header>
  );
};

SidebarHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  basePath: PropTypes.string
};

SidebarHeader.defaultProps = {
  title: "",
  description: "",
  basePath: "/"
};

export default SidebarHeader;
