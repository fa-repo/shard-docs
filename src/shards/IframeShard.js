import React from "react";
import PropTypes from "prop-types";
import "./IframeShard.scss";

/**
 * IframeShard
 */

const IframeShard = ({ path, ...props }) => {
  return <iframe src={path} className="shard-docs-iframe-shard" {...props} />;
};

IframeShard.propTypes = {
  path: PropTypes.string
};

IframeShard.defaultProps = {
  path: ""
};

export default IframeShard;
