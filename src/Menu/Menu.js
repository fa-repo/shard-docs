import React from "react";
import PropTypes from "prop-types";
import SidebarMenuList from "./MenuList";
import "./Menu.scss";

/**
 * Menu
 */

const Menu = props => {
  return (
    <div className="shard-docs-sidebar-menu" data-show-menu-on-mobile={props.showMenuOnMobile}>
      <SidebarMenuList app={props.app} items={props.items} onNavigate={props.onNavigate} />
    </div>
  );
};

Menu.propTypes = {
  app: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    actionPath: PropTypes.string,
    basePath: PropTypes.string
  }),
  items: PropTypes.array,
  showMenuOnMobile: PropTypes.bool,
  onNavigate: PropTypes.func
};
Menu.defaultProps = {
  app: {},
  items: [],
  showMenuOnMobile: false,
  onNavigate: () => {}
};

export default Menu;
