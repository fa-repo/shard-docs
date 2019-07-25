import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import ViewerBreadcrumbs from "../ViewerBreadcrumbs";

Route.propTypes.path = PropTypes.oneOfType([PropTypes.array, PropTypes.string]);

/**
 * Viewer
 */

const Viewer = ({ route, composition, breadcrumbs }) => {
  return (
    <Route
      path={route}
      exact
      render={props => (
        <>
          {breadcrumbs && <ViewerBreadcrumbs breadcrumbs={breadcrumbs} />}
          {composition && composition.map((component, i) => ({ ...component, key: i }))}
        </>
      )}
    />
  );
};

Viewer.propTypes = {};
Viewer.defaultProps = {};

export default Viewer;
