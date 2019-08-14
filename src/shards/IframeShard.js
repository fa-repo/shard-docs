import React from "react";
import PropTypes from "prop-types";
import "./IframeShard.scss";

/**
 * IframeShard
 */

const IframeShard = props => {
  return <iframe src={props.path} className="shard-docs-iframe-shard" style={props.styles} />;
};

IframeShard.propTypes = {
  path: PropTypes.string
};
IframeShard.defaultProps = {
  path: ""
};

export default IframeShard;
