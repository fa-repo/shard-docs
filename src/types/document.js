import PropTypes from "prop-types";
import documentTypes from "./document";
import breadcrumbTypes from "./breadcrumb";

export default PropTypes.shape({
  type: PropTypes.oneOf(["document"]).isRequired,
  path: PropTypes.string,
  title: PropTypes.string,
  isEmpty: PropTypes.bool,
  isActive: PropTypes.bool,
  breadcrumbs: PropTypes.arrayOf(breadcrumbTypes),
  document: documentTypes
});
