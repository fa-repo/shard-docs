import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/**
 * ViewerFooter
 */

const ViewerFooter = props => (
  <footer className="shard-docs-page-nav">
    <div className="shard-docs-page-nav-next">
      {props.prevLink && (
        <NavLink to={props.prevLink} exact>
          ⟵ {props.prevText}
        </NavLink>
      )}
    </div>
    <div className="shard-docs-page-spacer" />
    <div className="shard-docs-page-nav-prev">
      {props.nextLink && (
        <NavLink to={props.nextLink} exact>
          {props.nextText} ⟶
        </NavLink>
      )}
    </div>
  </footer>
);

ViewerFooter.propTypes = {
  prevText: PropTypes.string,
  prevLink: PropTypes.string,
  nextText: PropTypes.string,
  nextLink: PropTypes.string
};

ViewerFooter.defaultProps = {
  prevText: "",
  prevLink: "",
  nextText: "",
  nextLink: ""
};

export default ViewerFooter;
