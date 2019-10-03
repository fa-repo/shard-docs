import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { paginationTypes } from "../types";
import "./Pagination.scss";

/**
 * Pagination
 */

const Button = ({ link, text, ...props }) => (
  <div {...props}>
    <NavLink to={link} children={text} exact />
  </div>
);

const Pagination = props => {
  const { prev, next } = props.pagination;
  const show = Boolean(prev || next);
  return (
    show && (
      <footer className="shard-docs-pagination">
        {prev && <Button className="prev" text={`⟵ ${prev.text}`} link={prev.path}></Button>}
        {next && <Button className="next" text={`${next.text} ⟶`} link={next.path}></Button>}
      </footer>
    )
  );
};

Pagination.propTypes = {
  pagination: paginationTypes
};

Pagination.defaultProps = {
  pagination: { prev: null, next: null }
};

export default Pagination;
