import React from "react";
import PropTypes from "prop-types";
import HeaderTitle from "../HeaderTitle";
import HeaderToggle from "../HeaderToggle";
import "./Header.scss";

/**
 * Header
 */

const Header = ({ title, basePath, onToggleMenu, ...props }) => {
  return (
    <header className="shard-docs-header" {...props}>
      {title && <HeaderTitle title={title} path={basePath} />}
      <HeaderToggle onClick={onToggleMenu} />
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
