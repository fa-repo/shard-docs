import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./SidebarHeader.scss";

/**
 * SidebarHeader
 */

const SidebarHeader = ({ title, basePath, onToggleMenu, ...props }) => {
  return (
    <header className="shard-docs-sidebar-header" {...props}>
      {title && (
        <NavLink to={basePath}>
          <h2 className="shard-docs-sidebar-heading" title={title}>
            {title}
          </h2>
        </NavLink>
      )}
      <button className="shard-docs-toggle-menu" onClick={onToggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
        </svg>
      </button>
    </header>
  );
};

SidebarHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  basePath: PropTypes.string,
  onToggleMenu: PropTypes.func
};

SidebarHeader.defaultProps = {
  title: "",
  description: "",
  basePath: "/",
  onToggleMenu: () => {}
};

export default SidebarHeader;
