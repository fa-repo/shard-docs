import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

Route.propTypes.path = PropTypes.oneOfType([PropTypes.array, PropTypes.string]);

/**
 * Viewer
 */

const Viewer = ({ route, components = [] }) => {
  return (
    <Route
      path={route}
      exact
      render={props => (
        <>
          {components.map((component, i) => {
            return { ...component, key: i };
          })}
        </>
      )}
    />
  );
};

Viewer.propTypes = {};
Viewer.defaultProps = {};

export default Viewer;
