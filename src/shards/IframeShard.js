import React from "react";
import PropTypes from "prop-types";
import "./IframeShard.scss";

/**
 * IframeShard
 */

const IframeShard = ({ path, ...props }) => {
  return (
    <div className="shard-docs-iframe-shard">
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
