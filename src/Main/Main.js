import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import "./Main.scss";

/**
 * Main
 */

const Main = ({ prevPage, nextPage, ...props }) => {
  return (
    <main className="shard-docs-main">
      {props.children}
      <Footer
        prevText={prevPage && prevPage.title}
        prevLink={prevPage && prevPage.path}
        nextText={nextPage && nextPage.title}
        nextLink={nextPage && nextPage.path}
      />
    </main>
  );
};

Main.propTypes = {
  prevPage: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }),
  nextPage: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  })
};
Main.defaultProps = {};

export default Main;
