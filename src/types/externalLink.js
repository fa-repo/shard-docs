import PropTypes from "prop-types";

export default PropTypes.shape({
  type: PropTypes.oneOf(["external"]),
  title: PropTypes.string,
  link: PropTypes.string
});
