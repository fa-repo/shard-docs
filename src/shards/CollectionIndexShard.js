import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/**
 * CollectionIndexShard
 */

const CollectionIndexShard = ({ title, pages }) => {
  return (
    <div className="shard-docs-markdown-shard">
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
