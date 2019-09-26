import React from "react";
import PropTypes from "prop-types";
import SidebarMenuList from "./SidebarMenuList";
import "./SidebarMenu.scss";

/**
 * SidebarMenu
 */

const SidebarMenu = props => {
  return (
    <div className="shard-docs-sidebar-menu" data-show-menu-on-mobile={props.showMenuOnMobile}>
      <SidebarMenuList items={props.items} basePath={props.basePath} />
    </div>
  );
};

SidebarMenu.propTypes = {
  items: PropTypes.array,
  basePath: PropTypes.string,
  showMenuOnMobile: PropTypes.bool
};
SidebarMenu.defaultProps = {
  items: [],
  items: "",
  showMenuOnMobile: false
};

export default SidebarMenu;
