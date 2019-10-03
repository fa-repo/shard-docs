import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import MenuIcon from "boxicons/svg/regular/bx-menu.svg";
import "./Header.scss";

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
        <MenuIcon />
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
