import React from "react";
import PropTypes from "prop-types";
import Pagination from "../Pagination";
import "./Main.scss";

/**
 * Main
 */

const Main = ({ pagination, prevPage, nextPage, ...props }) => {
  return (
    <main className="shard-docs-main">
      {props.children}
      <Pagination pagination={pagination} />
    </main>
  );
};

Main.propTypes = {
  pagination: PropTypes.object
};
Main.defaultProps = {
  pagination: {}
};

export default Main;
