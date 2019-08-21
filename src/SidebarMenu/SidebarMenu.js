import React from "react";
import PropTypes from "prop-types";
import SidebarMenuList from "./SidebarMenuList";
import "./SidebarMenu.scss";

/**
 * SidebarMenu
 */

const SidebarMenu = props => {
  return (
    <div className="shard-docs-sidebar-menu">
      <SidebarMenuList items={props.items} basePath={props.basePath} />
    </div>
  );
};

SidebarMenu.propTypes = {
  items: PropTypes.array,
  basePath: PropTypes.string
};
SidebarMenu.defaultProps = {
  items: [],
  items: ""
};

export default SidebarMenu;
