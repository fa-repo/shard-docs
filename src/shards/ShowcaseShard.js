import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./ShowcaseShard.scss";

/**
 * ShowcaseShard
 */

const ShowcaseShard = ({ noPad, ...props }) => {
  return (
    <div
      {...props}
      className={classnames("shard-docs-showcase-shard", props.className)}
      style={{ padding: noPad && "0px", ...props.style }}
    />
  );
};

ShowcaseShard.propTypes = {
  noPad: PropTypes.bool
};

ShowcaseShard.defaultProps = {
  noPad: false
};

export default ShowcaseShard;
