import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { paginationTypes } from "../types";
import "./Pagination.scss";

/**
 * Pagination
 */

const PaginationButton = ({ link, text, ...props }) => (
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
        {prev && (
          <PaginationButton
            className="prev"
            text={`⟵ ${prev.text}`}
            link={prev.path}
          ></PaginationButton>
        )}
        {next && (
          <PaginationButton
            className="next"
            text={`${next.text} ⟶`}
            link={next.path}
          ></PaginationButton>
        )}
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
