import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./ShowcaseShard.scss";

/**
 * ShowcaseShard
 */

const ShowcaseShard = ({ noPad, title, children, ...props }) => {
  return (
    <div {...props} className={classnames("shard-docs-showcase-shard", props.className)}>
      {title && <header className="shard-docs-showcase-shard-title">{title}</header>}
      <div
        style={{ padding: noPad && "0px", ...props.style }}
        className="shard-docs-showcase-shard-body"
      >
        {children}
      </div>
    </div>
  );
};

ShowcaseShard.propTypes = {
  title: PropTypes.string,
  noPad: PropTypes.bool
};

ShowcaseShard.defaultProps = {
  title: "",
  noPad: false
};

export default ShowcaseShard;
