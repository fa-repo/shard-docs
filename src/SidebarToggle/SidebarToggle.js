import React from "react";
import PropTypes from "prop-types";
import MenuIcon from "boxicons/svg/regular/bx-menu.svg";
import "./SidebarToggle.scss";

/**
 * SidebarToggle
 */

const SidebarToggle = props => {
  return (
    <button className="shard-docs-sidebar-toggle" {...props}>
      <MenuIcon />
    </button>
  );
};

SidebarToggle.propTypes = {};

SidebarToggle.defaultProps = {};

export default SidebarToggle;
