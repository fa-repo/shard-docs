import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/**
 * Footer
 */

const Footer = props => (
  <footer className="shard-docs-nav-footer">
    {props.prevLink && (
      <div className="shard-docs-nav-next">
        <NavLink to={props.prevLink} exact>
          ⟵ {props.prevText}
        </NavLink>
      </div>
    )}
    <div className="spacer" />
    {props.nextLink && (
      <div className="shard-docs-nav-prev">
        <NavLink to={props.nextLink} exact>
          {props.nextText} ⟶
        </NavLink>
      </div>
    )}
  </footer>
);

Footer.propTypes = {
  prevText: PropTypes.string,
  prevLink: PropTypes.string,
  nextText: PropTypes.string,
  nextLink: PropTypes.string
};

Footer.defaultProps = {
  prevText: "",
  prevLink: "",
  nextText: "",
  nextLink: ""
};

export default Footer;
