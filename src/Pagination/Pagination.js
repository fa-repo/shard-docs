import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
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
  pagination: PropTypes.shape({
    prev: PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string
    }),
    next: PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string
    })
  })
};

Pagination.defaultProps = {
  pagination: { prev: null, next: null }
};

export default Pagination;
