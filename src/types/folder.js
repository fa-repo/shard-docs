import PropTypes from "prop-types";
import treeTypes from "./tree";

export default PropTypes.shape({
  type: PropTypes.oneOf(["folder"]).isRequired,
  path: PropTypes.string,
  title: PropTypes.string,
  isEmpty: PropTypes.bool,
  isActive: PropTypes.bool,
  folder: treeTypes
});
