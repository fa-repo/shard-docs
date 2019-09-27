import React from "react";
import PropTypes from "prop-types";
import SidebarMenuList from "./MenuList";
import "./Menu.scss";

/**
 * SidebarMenu
 */

const SidebarMenu = props => {
  return (
    <div className="shard-docs-sidebar-menu" data-show-menu-on-mobile={props.showMenuOnMobile}>
      <SidebarMenuList
        items={props.items}
        basePath={props.basePath}
        onNavigate={props.onNavigate}
      />
    </div>
  );
};

SidebarMenu.propTypes = {
  items: PropTypes.array,
  basePath: PropTypes.string,
  showMenuOnMobile: PropTypes.bool,
  onNavigate: PropTypes.func
};
SidebarMenu.defaultProps = {
  items: [],
  items: "",
  showMenuOnMobile: false,
  onNavigate: () => {}
};

export default SidebarMenu;
