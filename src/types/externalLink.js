import PropTypes from "prop-types";

export default PropTypes.shape({
  type: PropTypes.oneOf(["external"]).isRequired,
  title: PropTypes.string,
  link: PropTypes.string
});
