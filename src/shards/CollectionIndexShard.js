import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import "./CollectionIndexShard.scss";

/**
 * CollectionIndexShard
 */

const CollectionIndexShard = ({ title, pages, ...props }) => {
  return (
    <div className={classnames("shard-docs-markdown-shard", props.className)}>
      <h1>{title} index</h1>
      <ul>
        {pages.map((page, i) => (
          <li key={i}>
            <NavLink to={page.path}>{page.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

CollectionIndexShard.propTypes = {
  path: PropTypes.string
};
CollectionIndexShard.defaultProps = {
  path: ""
};

export default CollectionIndexShard;
