import React from "react";
import PropTypes from "prop-types";
import HeaderTitle from "../HeaderTitle";
import SidebarToggle from "../SidebarToggle";
import "./Header.scss";

/**
 * Header
 */

const Header = ({ title, basePath, onToggleMenu, ...props }) => {
  return (
    <header className="shard-docs-sidebar-header" {...props}>
      {title && <HeaderTitle title={title} path={basePath} />}
      <SidebarToggle onClick={onToggleMenu} />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  basePath: PropTypes.string,
  onToggleMenu: PropTypes.func
};

Header.defaultProps = {
  title: "",
  description: "",
  basePath: "/",
  onToggleMenu: () => {}
};

export default Header;
