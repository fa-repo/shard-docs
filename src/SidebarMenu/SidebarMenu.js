import React from "react";
import PropTypes from "prop-types";
import SidebarMenuList from "./SidebarMenuList";

/**
 * SidebarMenu
 */

const SidebarMenu = props => {
  return <SidebarMenuList className="shard-docs-sidebar-menu" items={props.items} />;
};

SidebarMenu.propTypes = {
  items: PropTypes.array
};
SidebarMenu.defaultProps = {
  items: []
};

export default SidebarMenu;
