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
        activePath={props.activePath}
        onNavigate={props.onNavigate}
      />
    </div>
  );
};

SidebarMenu.propTypes = {
  items: PropTypes.array,
  basePath: PropTypes.string,
  activePath: PropTypes.string,
  showMenuOnMobile: PropTypes.bool,
  onNavigate: PropTypes.func
};
SidebarMenu.defaultProps = {
  items: [],
  basePath: "",
  activePath: "",
  showMenuOnMobile: false,
  onNavigate: () => {}
};

export default SidebarMenu;
