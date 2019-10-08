import React from "react";
import PropTypes from "prop-types";
import MenuIcon from "boxicons/svg/regular/bx-menu.svg";
import "./HeaderToggle.scss";

/**
 * HeaderToggle
 */

const HeaderToggle = props => {
  return (
    <button className="shard-docs-header-toggle" {...props}>
      <MenuIcon />
    </button>
  );
};

HeaderToggle.propTypes = {};

HeaderToggle.defaultProps = {};

export default HeaderToggle;
