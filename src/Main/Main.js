import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import "./Main.scss";

/**
 * Main
 */

const Main = ({ prevDocument, nextDocument, ...props }) => {
  return (
    <div className="shard-docs-main">
      {props.children}
      <Footer
        prevText={prevDocument && prevDocument.title}
        prevLink={prevDocument && prevDocument.path}
        nextText={nextDocument && nextDocument.title}
        nextLink={nextDocument && nextDocument.path}
      />
    </div>
  );
};

Main.propTypes = {
  prevDocument: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }),
  nextDocument: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  })
};
Main.defaultProps = {};

export default Main;
