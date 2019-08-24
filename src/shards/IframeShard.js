import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./IframeShard.scss";

/**
 * IframeShard
 */

const IframeShard = ({ path, ...props }) => {
  return (
    <div className={classnames("shard-docs-iframe-shard", props.className)}>
      <iframe src={path} {...props} />
    </div>
  );
};

IframeShard.propTypes = {
  path: PropTypes.string
};

IframeShard.defaultProps = {
  path: ""
};

export default IframeShard;
